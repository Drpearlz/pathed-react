import logo from './logo.svg';
import './App.css';
import { connect } from "react-redux";
import { Router, Switch, Route, Link } from "react-router-dom";
import about_wrapper from './components/about_wrapper';
import preloader from './components/preloader';
import header_wrapper from './components/header_wrapper';
import hero_slider from './components/hero_slider';
import we_provide from './components/we_provide';
import client_logos from './components/client_logos';
import our_services from './components/our_services';
import our_team_wrapper from './components/our_team_wrapper';
import project_case_wrapper from './components/project_case_wrapper';
import testimonial_wrapper from './components/testimonial_wrapper';
import blog_sec from './components/blog_sec';
import cta_banner3 from './components/cta_banner3';
import footer from './components/footer';

function App() {
  return (
    preloader,
      header_wrapper,
    hero_slider,
    we_provide,
    client_logos,
    about_wrapper,
    our_services,
    our_team_wrapper,
    project_case_wrapper,
    testimonial_wrapper,
    blog_sec,
    cta_banner3,
    footer
    );
}

export default App;
