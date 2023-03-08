import React from 'react'

function our_services() {
    return (
        <section className="our-service-provide techex-landing-page">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-12 text-center">
                        <div className="section-title">
                            <a className="theme-btn-sm mb-15" data-aos="fade-up">
                                What We Do
                            </a>
                            <h1 data-aos="fade-up" data-aos-delay={100}>
                                We Provide Best Solutions For IT Business
                            </h1>
                        </div>
                    </div>
                </div>
                <div className="row text-center">
                    <div className="col-xl-4 col-md-6 col-12" data-aos="fade-up">
                        <div className="single-our-service style-2">
                            <div
                                className="thumb bg-cover"
                                style={{ backgroundImage: 'url("assets/img/case/2.jpg")' }}
                            />
                            <div className="content">
                                <div className="icon">
                                    <i className="fal fa-envelope" />
                                </div>
                                <h3>
                                    <a href="services-details.html">Product Engineering</a>
                                </h3>
                                <p>Lorem ipsum dolor sitconsectetur adipiscing eiusmod tempor.</p>
                                <a href="#" className="read-more text-uppercase">
                                    read more <i className="icon-arrow-right-1" />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div
                        className="col-xl-4 col-md-6 col-12"
                        data-aos="fade-up"
                        data-aos-delay={100}
                    >
                        <div className="single-our-service style-2">
                            <div
                                className="thumb bg-cover"
                                style={{ backgroundImage: 'url("assets/img/case/2.jpg")' }}
                            />
                            <div className="content">
                                <div className="icon">
                                    <img src="assets/img/techex-landing-page/sketch.png" alt="" />
                                </div>
                                <h3>
                                    <a href="services-details.html">Web Development</a>
                                </h3>
                                <p>Lorem ipsum dolor sitconsectetur adipiscing eiusmod tempor.</p>
                                <a href="#" className="read-more text-uppercase">
                                    read more <i className="icon-arrow-right-1" />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div
                        className="col-xl-4 col-md-6 col-12"
                        data-aos="fade-up"
                        data-aos-delay={150}
                    >
                        <div className="single-our-service style-2">
                            <div
                                className="thumb bg-cover"
                                style={{ backgroundImage: 'url("assets/img/case/2.jpg")' }}
                            />
                            <div className="content">
                                <div className="icon">
                                    <img src="assets/img/techex-landing-page/diagram.png" alt="" />
                                </div>
                                <h3>
                                    <a href="services-details.html">UX/UI Strategy</a>
                                </h3>
                                <p>Lorem ipsum dolor sitconsectetur adipiscing eiusmod tempor.</p>
                                <a href="#" className="read-more text-uppercase">
                                    read more <i className="icon-arrow-right-1" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default our_services