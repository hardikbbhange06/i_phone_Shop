import React from "react";
import Product from "./Product";
// import img from "/public/assets/home/img_1.jpg"

import Carousel from "react-bootstrap/Carousel";

function Home() {
  return (
    <div>
      <div>
        <div className="container py-5">
          <Carousel data-bs-theme="dark">
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="/assets/home/img_1.jpg"
                alt="First slide"
              />
              <Carousel.Caption>
                {/* <h5>First slide label</h5>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p> */}
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="/assets/home/img_2.jpg"
                alt="Second slide"
              />
              <Carousel.Caption>
                {/* <h5>Second slide label</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="/assets/home/img_3.jpg"
                alt="Third slide"
              />
              <Carousel.Caption>
                {/* <h5>Third slide label</h5>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur.
                </p> */}
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
     
        <Product />
      </div>
    </div>
  );
}

export default Home;
