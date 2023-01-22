import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import CarItem from "../components/UI/CarItem";
import carData from "../assets/data/carData";

const CarListing = () => {
const [sortType, setSortType] = useState("");
const [sortedCarData, setSortedCarData] = useState(carData);

useEffect(() => {
  if (sortType === "high") {
    setSortedCarData(carData.sort((a, b) => a.price - b.price));
  } else if (sortType === "low") {
    setSortedCarData(carData.sort((a, b) => b.price - a.price));
  } else {
    setSortedCarData(carData);
  }
}, [sortType]);

const handleSortChange = (e) => {
  setSortType(e.target.value);
};


  return (
    <Helmet title="Cars">
      <CommonSection title="" />

      <section>
        <Container>
          <Row>
            <Col lg="12">
              <div className=" d-flex align-items-center gap-3 mb-5">
                <span className=" d-flex align-items-center gap-2">
                  <i class="ri-sort-asc"></i> Sort By
                </span>

                <select onChange={handleSortChange}>
                  <option>Select</option>
                  <option value="low">Low to High</option>
                  <option value="high">High to Low</option>
                </select>
              </div>
            </Col>

            {carData.map((item) => (
              <CarItem item={item} key={item.id} />
            ))}
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default CarListing;
