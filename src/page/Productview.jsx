import React from "react";

const Productview=()=>{
    return(
        <div className="productview-offer">
            <div id="productview-heading">
                <h2>We Offer You</h2>
            </div>
            <div>
                <section className="carousel">
                    <div className="list">
                        <article className="item">
                            <div className="main-content-caru">
                               <div className="content">
                                <h2>spinch tortilla</h2>
                                <p className="price">200</p>
                                <p className="discription">hello mera name timtim</p>
                               </div>
                            </div>
                        <figure className="image">
                            <img src="roti.jpg"/>
                            <figcaption>spinch tortilla</figcaption>
                        </figure>
                        </article>
                        <article className="item">
                            <div className="main-content-caru2">
                               <div className="content">
                                <h2>Regular tortilla</h2>
                                <p className="price">200</p>
                                <p className="discription">hello mera name timtim</p>
                               </div>
                            </div>
                        <figure className="image">
                            <img src="breakfast-wraps-8.jpg"/>
                            <figcaption>Regular tortilla</figcaption>
                        </figure>
                        </article>
                         <article className="item">
                            <div className="main-content-caru3">
                               <div className="content">
                                <h2>fruit tortilla</h2>
                                <p className="price">200</p>
                                <p className="discription">hello mera name timtim</p>
                               </div>
                            </div>
                        <figure className="image">
                            <img src="download.png"/>
                            <figcaption>fruit tortilla</figcaption>
                        </figure>
                        </article>
                         <article className="item">
                            <div className="main-content-caru4">
                               <div className="content">
                                <h2>apple tortilla</h2>
                                <p className="price">200</p>
                                <p className="discription">hello mera name timtim</p>
                               </div>
                            </div>
                        <figure className="image">
                            <img src="leafWrap.jpg"/>
                            <figcaption>apple tortilla</figcaption>
                        </figure>
                        </article>
                    </div>
                    <div className="arrows">
                        <button id="prev"></button>
                        <button id="next"></button>

                    </div>
                </section>
            </div>
        </div>
    )
}
export default Productview;