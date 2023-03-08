import React from 'react'

const header_wrapper = () => {
    return (

        <>
            <header className="header-wrap header-5">
                <div className="top-header d-none d-md-block">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-7">
                                <div className="header-cta">
                                    <ul>
                                        <li>
                                            <a href="#">
                                                <i className="icon-location-dot" />
                                                Port Harcourt | Nigeria
                                            </a>
                                        </li>
                                        <li>
                                            <a href="mailto:pathedapp@gmail.com">
                                                <i className="fal fa-envelope" />
                                                pathedapp@gmail.com
                                            </a>
                                        </li>
                                        <li>
                                            <a href="tel:+16728829826">
                                                <i className="fal fa-phone" />+ 234 (0) 808 373 7776{" "}
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-5">
                                <div className="header-right-cta d-flex justify-content-end">
                                    <div className="social-profile">
                                        <a href="#">
                                            <i className="fab fa-facebook" />
                                        </a>
                                        <a href="#">
                                            <i className="fab fa-twitter" />
                                        </a>
                                        <a href="#">
                                            <i className="fab fa-behance" />
                                        </a>
                                        <a href="#">
                                            <i className="fab fa-youtube" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="main-header-wraper">
                    <div className="container-fluid">
                        <div className="row align-items-center justify-content-between">
                            <div className="header-logo">
                                <div className="logo">
                                    <a href="index.html">
                                        <img src="assets/img/slogo-g.png" alt="logo" />
                                    </a>
                                </div>
                            </div>
                            <div className="header-menu d-none d-xl-block">
                                <div className="main-menu">
                                    <ul>
                                        <li>
                                            <a href="index.html">Home </a>
                                        </li>
                                        <li>
                                            <a href="cases.html">Case Study</a>
                                        </li>
                                        <li>
                                            <a href="faq.html">FAQ</a>{" "}
                                        </li>
                                        <li>
                                            <a href="team.html">Team</a>
                                        </li>
                                        <li>
                                            <a href="contact.html">Contact</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="header-right d-flex align-items-center">
                                <div className="header-btn-cta">
                                    <div className="header-search">
                                        <a className="search-toggle" data-selector=".header-search">
                                            <span className="fas fa-search" />
                                        </a>
                                        <form className="search-box" action="#" method="get">
                                            <div className="form-group d-flex align-items-center">
                                                <input
                                                    type="search"
                                                    name="s"
                                                    defaultValue=""
                                                    className="search-input"
                                                    id="search"
                                                    placeholder="Search" />
                                                <button type="submit" className="search-submit">
                                                    <i className="icon-search" />
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                    <a href="contact.html" className="theme-btn">
                                        Contact Now <i className="icon-arrow-right-1" />
                                    </a>
                                </div>
                                <div className="mobile-nav-bar d-block ml-3 ml-sm-4 d-xl-none">
                                    <div className="mobile-nav-wrap">
                                        <div id="hamburger">
                                            <i className="fal fa-bars" />
                                        </div>
                                        {/* mobile menu - responsive menu  */}
                                        <div className="mobile-nav">
                                            <button type="button" className="close-nav">
                                                <i className="fal fa-times-circle" />
                                            </button>
                                            <nav className="sidebar-nav">
                                                <ul className="metismenu" id="mobile-menu">
                                                    <li><a href="index.html">Home</a>
                                                        <ul className="sub-menu">
                                                            <li><a href="index.html">Home</a></li>
                                                        </ul>
                                                    </li>
                                                    <li><a href="cases.html">Case Study</a></li>
                                                    <li><a href="faq.html">FAQ</a> </li>
                                                    <li><a href="team.html">Team</a></li>
                                                    <li><a href="contact.html">Contact</a></li>
                                                </ul>
                                            </nav>
                                            <div className="action-bar">
                                                <a href="#"><i className="icon-location-dot" />Port Harcourt | Nigeria</a>
                                                <a href="mailto:pathedapp@gmail.com"><i className="fal fa-envelope-open-text" />pathedapp@gmail.com</a>
                                                <a href="tel:+2348149194054"><i className="fal fa-phone" />+ 234 (0) 814 919 4054"</a>
                                                <a href="contact.html" className="d-btn theme-btn black">Contact Us <i className="icon-arrow-right-1" /></a>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="overlay" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header > <div className="header-gutter" />
        </>
    )
}

export default header_wrapper