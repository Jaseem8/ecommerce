import React from "react";
import { client } from "../lib/client";
import { Product, FooterBanner, HeroBanner } from "../components";
import Categories from "@/components/Categories";
import ImageSlider from "@/components/ImageSlider";
import Grid from "@/components/Grid";
import Grid2 from "@/components/Grid2";
import Slider2 from "@/components/Slider2";
const Home = (props) => {
  return (
    <>
      <Categories />
      <ImageSlider />
      {/* <HeroBanner heroBanner={bannerData.length && bannerData[0]} /> */}
      <div className="products-heading">
        <h2>Best Seller Products</h2>
      </div>
      <div className="products-container">
        {props.selected?.map((product) => (
          <Product key={product._id} product={product} />
        ))}
      </div>
      <div className="grids-container">
        <Grid title={"Top SmartPhones"} categories="mobiles" />
        <Grid2 title={"Best Selling Electronics"} categories="electronics" />
      </div>

      <Slider2 />
      <div className="grids-container">
        <Grid title={"Top Books"} categories="books" />
        <Grid title={"Top appliances"} categories="appliances" />
        <Grid title={"Top Toys"} categories="toys" />
      </div>
      {/* <FooterBanner footerBanner={props.bannerData && props.bannerData[0]} /> */}
    </>
  );
};

export const getServerSideProps = async () => {
  const query = `*[_type=="product"]`;
  const products = await client.fetch(query);
  const bannerQuery = '*[_type=="banner"]';
  const bannerData = await client.fetch(bannerQuery);

  // Shuffle array
  const shuffled = products.sort(() => 0.5 - Math.random());

  // Get sub-array of first n elements after shuffled
  let selected = shuffled.slice(0, 5);
  return {
    props: { products, bannerData, selected },
  };
};
export default Home;
