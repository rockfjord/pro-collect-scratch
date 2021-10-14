/* eslint-disable react-hooks/exhaustive-deps */
import './assets/css/bootstrap.min.css'
import './assets/css/global.css'
import './App.css';
import { withUAL, UALProvider } from "ual-reactjs-renderer";
import {Helmet} from "react-helmet"
import Footer from "./components/footer";
import Aos from 'aos'
import 'aos/dist/aos.css';
import Navigation from "./components/navigation/Navigation";
import {
  getCollections,
  getSchemas,
  getTemplates,
  loadCollections,
  getPacks
} from "./components/api/Api";
import Home from "./components/Home"
import Collection from './components/Collection';
import WindowWrapper from "./components/windows/WindowWrapper";
import { Anchor } from "ual-anchor";
import { Wax } from "@eosdacio/ual-wax";
import { QueryClient, QueryClientProvider } from "react-query";
import { useContext, useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import MarketWrapper, { Context } from "./components/marketwrapper";
import cn from "classnames";
import 'regenerator-runtime/runtime'
import config from "./config.json";

const queryClient = new QueryClient();

const waxNet = {
  chainId: "1064487b3cd1a897ce03ae5b6a865651747e2e152090f99c1d19d44e01aea5a4",
  rpcEndpoints: [
    {
      protocol: "https",
      host: config.api_endpoint.replace("https://", "").replace("http://", ""),
      port: 443
    }
  ]
};

const anchor = new Anchor([waxNet], {
  appName: config.market_name
});

const wax = new Wax([waxNet], {
  appName: config.market_name
});

const wallets = [wax, anchor];

const parseCollections = (dispatch, res) => {
  if (res && res.status === 200) {
    const data = res["data"];
    dispatch({ type: "SET_COLLECTIONS", payload: data["rows"][0].collections });
    dispatch({
      type: "SET_COLLECTION_DATA",
      payload: getCollections(data["rows"][0].collections)
    });
    dispatch({
      type: "SET_TEMPLATE_DATA",
      payload: getTemplates({
        collections: data["rows"][0].collections,
        limit: 1000
      })
    });
    dispatch({
      type: "SET_SCHEMA_DATA",
      payload: getSchemas({
        collections: data["rows"][0].collections
      })
    });
    if (config.packs_contracts)
      dispatch({
        type: "SET_PACK_DATA",
        payload: getPacks({
          collections: data["rows"][0].collections
        })
      });
  } else {
    dispatch({ type: "SET_COLLECTIONS", payload: [config.default_collection] });
    dispatch({
      type: "SET_COLLECTION_DATA",
      payload: getCollections([config.default_collection])
    });
    dispatch({
      type: "SET_TEMPLATE_DATA",
      payload: getTemplates({
        collections: [config.default_collection],
        limit: 1000
      })
    });
    dispatch({
      type: "SET_SCHEMA_DATA",
      payload: getSchemas({
        collections: [config.default_collection]
      })
    });
    if (config.packs_contracts)
      dispatch({
        type: "SET_PACK_DATA",
        payload: getPacks({
          collections: [config.default_collection]
        })
      });
  }
};
function App({ Component, pageProps }) {
  const AppContainer = (props) => {
    const [state, dispatch] = useContext(Context);

    const [init, setInit] = useState(true);

    useEffect(() => {
      if (init) {
        setInit(false);
        loadCollections().then((res) => parseCollections(dispatch, res));
      }
    }, [state.collections === null]);
    useEffect(() => {

      Aos.init({
        duration: 1000
        })
    },[]);

    return (
    <div>
      <WindowWrapper {...props} />
    	<div className="AppContainer">
        <Helmet>
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
          <title>
            WAX Pro Collectors League
          </title>
          <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700" rel="stylesheet" />
          <link rel="stylesheet" type="text/css" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" />
        </Helmet>
          <Navigation {...props} />
  			<Switch>
          <Route path="/" exact component={Home} />
          <Route path="/Collection" exact component={Collection} />
        </Switch>
  
        <Footer {...props} />
	    </div>
    	</div>
    
  );
    
    }

const AppWithUAL = withUAL(AppContainer);

return (
  <MarketWrapper>
      <UALProvider chains={[waxNet]} authenticators={wallets} appName={config.market_name}>
          <QueryClientProvider client={queryClient}>
              <AppWithUAL {...pageProps} />
          </QueryClientProvider>
      </UALProvider>
  </MarketWrapper>
);
}

export default App;
