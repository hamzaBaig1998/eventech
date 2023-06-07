import React from "react";
import NavBar from "../components/NavBar";
import ShowCaseComponent from "./ShowCaseComponent";
import FeedsComponent from "./FeedsComponent";
import PackagesComponent from "./PackagesComponent";
import TestimonialComponent from "./TestimonialComponent";
import SocialMediaComponent from "./SocialMediaComponent";
import EmailComponent from "./EmailComponent";
import Footer from "../components/Footer";
import RandomQuoteComponent from "./RandomQuoteComponent";

export default function LandingPage() {
  return (
    <>
      <NavBar />
      <ShowCaseComponent />
      <FeedsComponent />
      <PackagesComponent />
      <TestimonialComponent />
      <SocialMediaComponent />
      <RandomQuoteComponent />
      <EmailComponent />
      <Footer />
    </>
  );
}
