import React from "react";
import {
  Categories,
  Products,
  Slide,
  Newsletter,
  Footer,
  Announcement,
  Header,
} from "../../component";

function Home() {
  return (
    <>
      <Announcement />
      <Header />
      <Slide />
      <Categories />
      <Products />
      <Newsletter />
      <Footer />
    </>
  );
}

export default Home;
