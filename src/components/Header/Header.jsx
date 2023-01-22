import React, { useRef } from "react";
import { useState } from "react";
import { Container, Row, Col} from "reactstrap";
import { Link, NavLink } from "react-router-dom";
import "../../styles/header.css";
import carData from "../../assets/data/carData";

const navLinks = [
  {
    path: "/home",
    display: "Home",
  },
  {
    path: "/about",
    display: "About",
  },
  {
    path: "/cars",
    display: "Cars",
  },

  {
    path: "/blogs",
    display: "Blog",
  },
  {
    path: "/contact",
    display: "Contact",
  },
];

const Header = () => {
  const menuRef = useRef(null);
  const toggleMenu = () => menuRef.current.classList.toggle("menu__active");

  const [filteredCars, setFilteredCars] = useState([]);

  const handleSearch = (event) => {
    let searchTerm = event.target.value;

    const fitlered = carData.filter((car) =>
      car.carName.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredCars(fitlered);
  };

  console.log(carData);

  function handleSelect(car) {
    window.location.href = `/cars/${car.carName}`;
  }

  // const filteredCarData =
  //   carData && carData.length
  //     ? carData.filter((car) =>
  //         car.name.toLowerCase().includes(searchTerm.toLowerCase())
  //       )
  //     : [];

  return (
    <header className="header">
      {/* =============== header top =========== */}
      <div className="header__middle">
        <Container>
          <Row>
            <Col lg="4" md="3" sm="4">
              <div className="logo">
                <h1>
                  <Link to="/home" className=" d-flex align-items-center gap-2">
                    <i class="ri-car-fill"></i>
                    <span>Rental Car Service</span>
                  </Link>
                </h1>
              </div>
            </Col>

            <Col lg="3" md="3" sm="4">
              <div className="header__location d-flex align-items-center gap-2">
                <span>
                  <i class="ri-earth-line"></i>
                </span>
                <div className="header__location-content">
                  <h4 className="Title">Kenya</h4>
                  <h6 className="Title"> 1738 Kenya, Thika Rd, Nairobi</h6>
                </div>
              </div>
            </Col>

            <Col lg="3" md="3" sm="4">
              <div className="header__location d-flex align-items-center gap-2 ">
                <span>
                  <i class="ri-time-line"></i>
                </span>
                <div className="header__location-content">
                  <h4>Monday to Saturday</h4>
                  <h6>9am - 5pm</h6>
                </div>
              </div>
            </Col>

            <Col
              lg="2"
              md="3"
              sm="0"
              className="align-items-center justify-content-end "
            >
              <i class="ri-phone-line"></i>
              <Link to="/contact" className="link-call">
                Request a call
              </Link>
            </Col>
          </Row>
        </Container>
      </div>

      {/* ========== main navigation =========== */}

      <div className="main__navbar">
        <Container>
          <div className="navigation__wrapper d-flex align-items-center justify-content-between">
            <span className="mobile__menu">
              <i class="ri-menu-line" onClick={toggleMenu}></i>
            </span>

            <div className="navigation" ref={menuRef} onClick={toggleMenu}>
              <div className="menu">
                {navLinks.map((item, index) => (
                  <NavLink
                    to={item.path}
                    className={(navClass) =>
                      navClass.isActive ? "nav__active nav__item" : "nav__item"
                    }
                    key={index}
                  >
                    {item.display}
                  </NavLink>
                ))}
              </div>
            </div>
            <div className="nav__right">
              <div
                className={`search__box ${filteredCars.length ? "show" : ""}`}
              >
                <input
                  onChange={(e) => handleSearch(e)}
                  className="input-a"
                  type="text"
                  placeholder="Find a car"
                />

                <span>
                  <i class="ri-search-line"></i>
                </span>
                {filteredCars.slice(0, 3).map((car) => (
                  <li key={car.id} onClick={() => handleSelect(car)}>
                    {car.carName}
                  </li>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </div>
    </header>
  );
};

export default Header;
