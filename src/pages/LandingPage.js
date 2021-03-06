import Header from "parts/Header"
import React from "react";
import landingPage from "json/landingPage.json";
import Hero from "parts/Hero"
import MostPicked from "parts/MostPicked"
import Categories from "parts/Categories";
import Testimony from "parts/Testimony";
import Footer from "parts/Footer";

const LandingPage = (props) => {
  const refMostPicked = React.createRef();
    return (
      <div>
        <Header {...props}></Header>
        <Hero data={landingPage.hero} refMostPicked={refMostPicked}/>
        <MostPicked data={landingPage.mostPicked} refMostPicked={refMostPicked} />
        <Categories data={landingPage.categories} />
        <Testimony data={landingPage.testimonial}/>
        <Footer />
      </div>
    );
  }


export default LandingPage;
