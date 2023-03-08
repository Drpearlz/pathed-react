import React from 'react'

function about_wrapper() {
    return (
        <section className="about-wrapper techex-landing-page">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="about-img" data-aos="fade-right">
                            <img src="assets/img/home/cap.gif" className="img-fluid" alt="" />
                            <div
                                className="video-play-btn"
                                data-aos="fade-up"
                                data-aos-delay={100}
                            >
                                <a
                                    href="assets/img/home/animockup.gif"
                                    className="play-video popup-video"
                                >
                                    <i className="fas fa-play" />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="section-title">
                            <a className="theme-btn-sm mb-15" data-aos="fade-left">
                                ABOUT US
                            </a>
                            <h1 data-aos="fade-left" data-aos-delay={100}>
                                Many Years of Experience In IT Solutions
                            </h1>
                            <div data-aos="fade-left" data-aos-delay={150}>
                                <p>
                                    Sed ut perspiciatis unde omnis natus error sity voluptatem accusa
                                    ntium doloremque laudantie totam rem aperiamea queipsa quae
                                    abillonven tore veritatis.
                                </p>
                            </div>
                            <div className="rate-content-grid d-flex justify-content-between">
                                <div className="single-rate-item" data-aos="fade-up">
                                    <h3>4</h3>
                                    <p>Active Status Clients</p>
                                </div>
                                <div
                                    className="single-rate-item"
                                    data-aos="fade-up"
                                    data-aos-delay={100}
                                >
                                    <h3>8+</h3>
                                    <p>Successful Projects</p>
                                </div>
                                <div
                                    className="single-rate-item"
                                    data-aos="fade-up"
                                    data-aos-delay={150}
                                >
                                    <h3>5</h3>
                                    <p>In-House Engineers</p>
                                </div>
                            </div>
                            <a
                                href="#"
                                className="theme-btn black"
                                data-aos="fade-up"
                                data-aos-delay={200}
                            >
                                Know us more <i className="icon-arrow-right-1" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default about_wrapper