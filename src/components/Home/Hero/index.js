import Page from "../../common/layout/Page"

const HeroContainer = () => {
	return(
    <Page>
	    <section className="hero-section moving section-padding" id="home">
	        <div className="moving-bg"></div>
	        <div className="hero-section-content">
	            <div className="container ">
	                <div className="row align-items-center">
	                    <div className="col-12 col-lg-6 col-md-12">
	                        <div className="welcome-content">
	                            <div className="promo-section">
	                                <h3 className="special-head gradient-text">Wax Pro Collectors League</h3>
                                    <h1>Troll and Toad has entered the NFT world<span className="gradient-text">on WAX</span> </h1>
	                            <p className="w-text"> $$ PlaceHolder $$</p>
	                            <div className="dream-btn-group">
	                                <button className="btn btn-explore more-btn mr-3">Explore More</button>
	                                <button className="btn btn-Collect more-btn">Collect NFT </button>
	                            </div>
	                        </div>
	                    </div>
	                    <div className="col-lg-6"></div>
	                </div>
	            </div>
	        </div>
            </div>
	    </section>
        </Page>
	)
}

export default HeroContainer