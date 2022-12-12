import React from "react";
import Container from "../../components/Container";
import ListProducts from "../../Products/pages/ListProducts";
import HeaderTitle from "../../components/HeaderTitle";
import Carousel from "../../components/Carousel";
import CarouselProduct from "../../Products/components/CarouselProduct";

const MainPage = () => {
  return (
    <>
      <Carousel />
      <Container>
        <div className="w-full pt-20">
          <HeaderTitle title="TOP SALED PRODUCTS" />
          <CarouselProduct />
          <HeaderTitle title="OUR PRODUCTS" />
          <ListProducts />
        </div>
      </Container>
    </>
  );
};

export default MainPage;
