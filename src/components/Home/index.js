import React from 'react';
import HeroContainer from './Hero'
import Page from "../common/layout/Page"
import cn from "classnames";
import config from "../../config.json";
import '../../assets/css/home.css';
import Head from '../header'
const Home = () => {
    return (
        <Page>
        <Head />
            <div className={cn('container-fluid')}>
                <h4><HeroContainer /></h4>
            </div>
        </Page>
    );
};

export default Home;