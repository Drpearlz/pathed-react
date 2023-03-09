import React from 'react'

function testimonial_wrapper() {
    return (
        <section className="testimonial-wrapper pathed-landing-page">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-8">
                        <div className="section-title">
                            <a className="theme-btn-sm mb-15" data-aos="fade-right">
                                Client Testimonials
                            </a>
                            <h1 data-aos="fade-right" data-aos-delay={100}>
                                What They’re Talking
                            </h1>
                        </div>
                        <div className="testimonial-carousel-3 owl-carousel owl-theme">
                            <div className="single-testimonial active">
                                <div className="icon">
                                    <i className="flaticon-right-quote" />
                                </div>
                                <h2>
                                    PathEd App has been around for more than adecade. It’s a trusted
                                    social media tool for businesses of all shapes and sizes.
                                </h2>
                                <div className="client-info">
                                    <div className="client-bio">
                                        <p>
                                            <a href="#">Symash Petel,</a> CEO-Aliner
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="single-testimonial">
                                <div className="icon">
                                    <i className="flaticon-right-quote" />
                                </div>
                                <h2>
                                    PathEd App has been around for more than adecade. It’s a trusted
                                    social media tool for businesses of all shapes and sizes.
                                </h2>
                                <div className="client-info">
                                    <div className="client-bio">
                                        <p>
                                            <a href="#">Symash Petel,</a> CEO-Aliner
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="single-testimonial">
                                <div className="icon">
                                    <i className="flaticon-right-quote" />
                                </div>
                                <h2>
                                    PathEd App has been around for more than a decade. It’s a trusted
                                    social media tool for businesses of all shapes and sizes.
                                </h2>
                                <div className="client-info">
                                    <div className="client-bio">
                                        <p>
                                            <a href="#">Symash Petel,</a> CEO-Aliner
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="testimonial-media" data-aos="fade-left">
                            <img
                                src="assets/img/pathed-landing-page/testimonial-media.png"
                                alt=""
                                className="img-fluid"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default testimonial_wrapper