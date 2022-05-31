import React from "react";
import {
  Card,
  Carousel,
  Container,
  Nav,
  Navbar,
  NavDropdown
} from "react-bootstrap";
import { BsArrowRightCircleFill } from "react-icons/bs";
import { IoIosCreate } from "react-icons/io";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <Navbar
        expand="lg"
        className="py-3 position-fixed w-100 shadow"
        style={{ zIndex: 50, background: "white" }}
      >
        <Container container="true">
          <Navbar.Brand href="#" className="fw-bold">
            CAPITAL DOCTOR
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="mx-auto my-2 my-lg-0"
              style={{ maxHeight: "150px" }}
              navbarScroll
            >
              <Nav.Link href="#action1">Home</Nav.Link>
              <NavDropdown
                title="Product & Services"
                id="navbarScrollingDropdown"
              >
                <NavDropdown
                  title="Issue Management"
                  id="navbarScrollingDropdown"
                >
                  <h6 className="px-2">Copper teach industry LTD.</h6>
                  <NavDropdown.Item href="#action3">
                    <div
                      style={{ fontSize: "16px" }}
                      className="d-flex justify-items-center"
                    >
                      <p className="mb-0">
                        <BsArrowRightCircleFill className="text-success" />
                      </p>
                      <p className="ms-2 mb-0">Prospectus</p>
                    </div>
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action4">
                    <div
                      style={{ fontSize: "16px" }}
                      className="d-flex justify-items-center"
                    >
                      <p className="mb-0">
                        <BsArrowRightCircleFill className="text-success" />
                      </p>
                      <p className="ms-2 mb-0">IPO Application Process</p>
                    </div>
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <h6 className="px-2">Olmex Electrode Limited</h6>
                  <NavDropdown.Item href="#action5">
                    <div
                      style={{ fontSize: "16px" }}
                      className="d-flex justify-items-center"
                    >
                      <p className="mb-0">
                        <BsArrowRightCircleFill className="text-success" />
                      </p>
                      <p className="ms-2 mb-0">IPO Application Process</p>
                    </div>
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action6">
                    <div
                      style={{ fontSize: "16px" }}
                      className="d-flex justify-items-center"
                    >
                      <p className="mb-0">
                        <BsArrowRightCircleFill className="text-success" />
                      </p>
                      <p className="ms-2 mb-0">Prospectus</p>
                    </div>
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action6">
                    <div
                      style={{ fontSize: "16px" }}
                      className="d-flex justify-items-center"
                    >
                      <p className="mb-0">
                        <BsArrowRightCircleFill className="text-success" />
                      </p>
                      <p className="ms-2 mb-0">IPO Application Process</p>
                    </div>
                  </NavDropdown.Item>
                </NavDropdown>
              </NavDropdown>
              {/* Become A Client */}
              <NavDropdown title="Become A Client" id="navbarScrollingDropdown">
                <NavDropdown
                  title="Bangladeshi Individuals"
                  id="navbarScrollingDropdown"
                >
                  <NavDropdown.Item href="#action6">
                    <div
                      style={{ fontSize: "16px" }}
                      className="d-flex justify-items-center"
                    >
                      <p className="mb-0">
                        <BsArrowRightCircleFill className="text-success" />
                      </p>
                      <p className="ms-2 mb-0">Item 1</p>
                    </div>
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action6">
                    <div
                      style={{ fontSize: "16px" }}
                      className="d-flex justify-items-center"
                    >
                      <p className="mb-0">
                        <BsArrowRightCircleFill className="text-success" />
                      </p>
                      <p className="ms-2 mb-0">Item 2</p>
                    </div>
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action6">
                    <div
                      style={{ fontSize: "16px" }}
                      className="d-flex justify-items-center"
                    >
                      <p className="mb-0">
                        <BsArrowRightCircleFill className="text-success" />
                      </p>
                      <p className="ms-2 mb-0">Item 3</p>
                    </div>
                  </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown
                  title="Bangladeshi Institutions"
                  id="navbarScrollingDropdown"
                >
                  <NavDropdown.Item href="#action6">
                    <div
                      style={{ fontSize: "16px" }}
                      className="d-flex justify-items-center"
                    >
                      <p className="mb-0">
                        <BsArrowRightCircleFill className="text-success" />
                      </p>
                      <p className="ms-2 mb-0">Item 1</p>
                    </div>
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action6">
                    <div
                      style={{ fontSize: "16px" }}
                      className="d-flex justify-items-center"
                    >
                      <p className="mb-0">
                        <BsArrowRightCircleFill className="text-success" />
                      </p>
                      <p className="ms-2 mb-0">Item 2</p>
                    </div>
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action6">
                    <div
                      style={{ fontSize: "16px" }}
                      className="d-flex justify-items-center"
                    >
                      <p className="mb-0">
                        <BsArrowRightCircleFill className="text-success" />
                      </p>
                      <p className="ms-2 mb-0">Item 3</p>
                    </div>
                  </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown
                  title="Foreign Investors"
                  id="navbarScrollingDropdown"
                >
                  <NavDropdown.Item href="#action6">
                    <div
                      style={{ fontSize: "16px" }}
                      className="d-flex justify-items-center"
                    >
                      <p className="mb-0">
                        <BsArrowRightCircleFill className="text-success" />
                      </p>
                      <p className="ms-2 mb-0">Item 1</p>
                    </div>
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action6">
                    <div
                      style={{ fontSize: "16px" }}
                      className="d-flex justify-items-center"
                    >
                      <p className="mb-0">
                        <BsArrowRightCircleFill className="text-success" />
                      </p>
                      <p className="ms-2 mb-0">Item 2</p>
                    </div>
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action6">
                    <div
                      style={{ fontSize: "16px" }}
                      className="d-flex justify-items-center"
                    >
                      <p className="mb-0">
                        <BsArrowRightCircleFill className="text-success" />
                      </p>
                      <p className="ms-2 mb-0">Item 3</p>
                    </div>
                  </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="NRBs" id="navbarScrollingDropdown">
                  <NavDropdown.Item href="#action6">
                    <div
                      style={{ fontSize: "16px" }}
                      className="d-flex justify-items-center"
                    >
                      <p className="mb-0">
                        <BsArrowRightCircleFill className="text-success" />
                      </p>
                      <p className="ms-2 mb-0">Item 1</p>
                    </div>
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action6">
                    <div
                      style={{ fontSize: "16px" }}
                      className="d-flex justify-items-center"
                    >
                      <p className="mb-0">
                        <BsArrowRightCircleFill className="text-success" />
                      </p>
                      <p className="ms-2 mb-0">Item 2</p>
                    </div>
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action6">
                    <div
                      style={{ fontSize: "16px" }}
                      className="d-flex justify-items-center"
                    >
                      <p className="mb-0">
                        <BsArrowRightCircleFill className="text-success" />
                      </p>
                      <p className="ms-2 mb-0">Item 3</p>
                    </div>
                  </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown
                  title="Daily Market Commentary"
                  id="navbarScrollingDropdown"
                >
                  <NavDropdown.Item href="#action6">
                    <div
                      style={{ fontSize: "16px" }}
                      className="d-flex justify-items-center"
                    >
                      <p className="mb-0">
                        <BsArrowRightCircleFill className="text-success" />
                      </p>
                      <p className="ms-2 mb-0">Item 1</p>
                    </div>
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action6">
                    <div
                      style={{ fontSize: "16px" }}
                      className="d-flex justify-items-center"
                    >
                      <p className="mb-0">
                        <BsArrowRightCircleFill className="text-success" />
                      </p>
                      <p className="ms-2 mb-0">Item 2</p>
                    </div>
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action6">
                    <div
                      style={{ fontSize: "16px" }}
                      className="d-flex justify-items-center"
                    >
                      <p className="mb-0">
                        <BsArrowRightCircleFill className="text-success" />
                      </p>
                      <p className="ms-2 mb-0">Item 3</p>
                    </div>
                  </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Research" id="navbarScrollingDropdown">
                  <NavDropdown.Item href="#action6">
                    <div>
                      <div className="d-flex justify-content-between">
                        <p>Research</p>
                        <IoIosCreate style={{ fontSize: "28px" }} />
                      </div>
                    </div>
                  </NavDropdown.Item>
                </NavDropdown>
              </NavDropdown>
              {/* About US Dropdown */}
              <NavDropdown title="About us" id="navbarScrollingDropdown">
                <NavDropdown
                  title="Capital Profile"
                  id="navbarScrollingDropdown"
                >
                  <NavDropdown.Item href="#action6">
                    <div
                      style={{ fontSize: "16px" }}
                      className="d-flex justify-items-center"
                    >
                      <p className="mb-0">
                        <BsArrowRightCircleFill className="text-success" />
                      </p>
                      <p className="ms-2 mb-0">Item 1</p>
                    </div>
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action6">
                    <div
                      style={{ fontSize: "16px" }}
                      className="d-flex justify-items-center"
                    >
                      <p className="mb-0">
                        <BsArrowRightCircleFill className="text-success" />
                      </p>
                      <p className="ms-2 mb-0">Item 2</p>
                    </div>
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action6">
                    <div
                      style={{ fontSize: "16px" }}
                      className="d-flex justify-items-center"
                    >
                      <p className="mb-0">
                        <BsArrowRightCircleFill className="text-success" />
                      </p>
                      <p className="ms-2 mb-0">Item 3</p>
                    </div>
                  </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown
                  title="Mission & Vision"
                  id="navbarScrollingDropdown"
                >
                  <NavDropdown.Item href="#action6">
                    <div
                      style={{ fontSize: "16px" }}
                      className="d-flex justify-items-center"
                    >
                      <p className="mb-0">
                        <BsArrowRightCircleFill className="text-success" />
                      </p>
                      <p className="ms-2 mb-0">Item 1</p>
                    </div>
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action6">
                    <div
                      style={{ fontSize: "16px" }}
                      className="d-flex justify-items-center"
                    >
                      <p className="mb-0">
                        <BsArrowRightCircleFill className="text-success" />
                      </p>
                      <p className="ms-2 mb-0">Item 2</p>
                    </div>
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action6">
                    <div
                      style={{ fontSize: "16px" }}
                      className="d-flex justify-items-center"
                    >
                      <p className="mb-0">
                        <BsArrowRightCircleFill className="text-success" />
                      </p>
                      <p className="ms-2 mb-0">Item 3</p>
                    </div>
                  </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown
                  title="Board of Director"
                  id="navbarScrollingDropdown"
                >
                  <NavDropdown.Item href="#action6">
                    <div
                      style={{ fontSize: "16px" }}
                      className="d-flex justify-items-center"
                    >
                      <p className="mb-0">
                        <BsArrowRightCircleFill className="text-success" />
                      </p>
                      <p className="ms-2 mb-0">Item 1</p>
                    </div>
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action6">
                    <div
                      style={{ fontSize: "16px" }}
                      className="d-flex justify-items-center"
                    >
                      <p className="mb-0">
                        <BsArrowRightCircleFill className="text-success" />
                      </p>
                      <p className="ms-2 mb-0">Item 2</p>
                    </div>
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action6">
                    <div
                      style={{ fontSize: "16px" }}
                      className="d-flex justify-items-center"
                    >
                      <p className="mb-0">
                        <BsArrowRightCircleFill className="text-success" />
                      </p>
                      <p className="ms-2 mb-0">Item 3</p>
                    </div>
                  </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown
                  title="Management Executive"
                  id="navbarScrollingDropdown"
                >
                  <NavDropdown.Item href="#action6">
                    <div
                      style={{ fontSize: "16px" }}
                      className="d-flex justify-items-center"
                    >
                      <p className="mb-0">
                        <BsArrowRightCircleFill className="text-success" />
                      </p>
                      <p className="ms-2 mb-0">Item 1</p>
                    </div>
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action6">
                    <div
                      style={{ fontSize: "16px" }}
                      className="d-flex justify-items-center"
                    >
                      <p className="mb-0">
                        <BsArrowRightCircleFill className="text-success" />
                      </p>
                      <p className="ms-2 mb-0">Item 2</p>
                    </div>
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action6">
                    <div
                      style={{ fontSize: "16px" }}
                      className="d-flex justify-items-center"
                    >
                      <p className="mb-0">
                        <BsArrowRightCircleFill className="text-success" />
                      </p>
                      <p className="ms-2 mb-0">Item 3</p>
                    </div>
                  </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Circulation" id="navbarScrollingDropdown">
                  <NavDropdown.Item href="#action6">
                    <div
                      style={{ fontSize: "16px" }}
                      className="d-flex justify-items-center"
                    >
                      <p className="mb-0">
                        <BsArrowRightCircleFill className="text-success" />
                      </p>
                      <p className="ms-2 mb-0">Item 1</p>
                    </div>
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action6">
                    <div
                      style={{ fontSize: "16px" }}
                      className="d-flex justify-items-center"
                    >
                      <p className="mb-0">
                        <BsArrowRightCircleFill className="text-success" />
                      </p>
                      <p className="ms-2 mb-0">Item 2</p>
                    </div>
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action6">
                    <div
                      style={{ fontSize: "16px" }}
                      className="d-flex justify-items-center"
                    >
                      <p className="mb-0">
                        <BsArrowRightCircleFill className="text-success" />
                      </p>
                      <p className="ms-2 mb-0">Item 3</p>
                    </div>
                  </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown
                  title="Career Opportunity"
                  id="navbarScrollingDropdown"
                >
                  <NavDropdown.Item href="#action6">
                    <div
                      style={{ fontSize: "16px" }}
                      className="d-flex justify-items-center"
                    >
                      <p className="mb-0">
                        <BsArrowRightCircleFill className="text-success" />
                      </p>
                      <p className="ms-2 mb-0">Item 1</p>
                    </div>
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action6">
                    <div
                      style={{ fontSize: "16px" }}
                      className="d-flex justify-items-center"
                    >
                      <p className="mb-0">
                        <BsArrowRightCircleFill className="text-success" />
                      </p>
                      <p className="ms-2 mb-0">Item 2</p>
                    </div>
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action6">
                    <div
                      style={{ fontSize: "16px" }}
                      className="d-flex justify-items-center"
                    >
                      <p className="mb-0">
                        <BsArrowRightCircleFill className="text-success" />
                      </p>
                      <p className="ms-2 mb-0">Item 3</p>
                    </div>
                  </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Contacts" id="navbarScrollingDropdown">
                  <NavDropdown.Item href="#action6">
                    <div
                      style={{ fontSize: "16px" }}
                      className="d-flex justify-items-center"
                    >
                      <p className="mb-0">
                        <BsArrowRightCircleFill className="text-success" />
                      </p>
                      <p className="ms-2 mb-0">Item 1</p>
                    </div>
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action6">
                    <div
                      style={{ fontSize: "16px" }}
                      className="d-flex justify-items-center"
                    >
                      <p className="mb-0">
                        <BsArrowRightCircleFill className="text-success" />
                      </p>
                      <p className="ms-2 mb-0">Item 2</p>
                    </div>
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action6">
                    <div
                      style={{ fontSize: "16px" }}
                      className="d-flex justify-items-center"
                    >
                      <p className="mb-0">
                        <BsArrowRightCircleFill className="text-success" />
                      </p>
                      <p className="ms-2 mb-0">Item 3</p>
                    </div>
                  </NavDropdown.Item>
                </NavDropdown>
              </NavDropdown>
              <NavDropdown title="Downloads" id="navbarScrollingDropdown">
                <h6 className="px-2">Forms</h6>
                <NavDropdown.Item href="#action3">
                  <div
                    style={{ fontSize: "16px" }}
                    className="d-flex justify-items-center"
                  >
                    <p className="mb-0">
                      <BsArrowRightCircleFill className="text-success" />
                    </p>
                    <p className="ms-2 mb-0">All Forms</p>
                  </div>
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <h6 className="px-2">Notice / Circular</h6>
                <NavDropdown.Item href="#action3">
                  <div
                    style={{ fontSize: "16px" }}
                    className="d-flex justify-items-center"
                  >
                    <p className="mb-0">
                      <BsArrowRightCircleFill className="text-success" />
                    </p>
                    <p className="ms-2 mb-0">BSEC</p>
                  </div>
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <div className="link-hover mx-1">
              <button className="btn btn-primary ">Register</button>
            </div>
            <div className="link-hover mx-1">
              <button className="btn btn-success ">Login</button>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {/* Slider */}
      <Carousel variant="dark">
        <Carousel.Item>
          <div
            className="w-100"
            style={{
              minHeight: "88vh",
              maxHeight: "100vh",
              marginTop: "100px",
            }}
          >
            <div className="container mt-5">
              <div className="row pt-5">
                <div className="col-md-6">
                  <h3
                    data-aos="fade-right"
                    data-aos-delay="400"
                    data-aos-duration="1000"
                    className="display-2 fw-bold ms-md-5 text-center custom-primary"
                  >
                    "মুজিববর্ষের অঙ্গিকার
                    <br />
                    উন্নত অর্থয়ায়নে উৎসব হবে পুঁজিবাজার"
                  </h3>
                </div>
                <div
                  data-aos="fade-right"
                  data-aos-delay="200"
                  data-aos-duration="1000"
                  className="col-md-6"
                >
                  <div className="row">
                    <div className="col">
                      <Card className="bg-white text-white">
                        <Card.Img
                          style={{ height: "300px" }}
                          src="https://i.pinimg.com/originals/aa/73/bc/aa73bc3310982f1f7ba938a6cca2a199.png"
                          alt="Card image"
                        />
                      </Card>
                    </div>
                  </div>
                  <div className="row mt-3">
                    <div className="col-6">
                      <Card className="bg-dark text-white">
                        <Card.Img
                          style={{ height: "110px" }}
                          src="https://www.financialexpress.com/wp-content/uploads/2021/05/7-11-620x400.jpg"
                          alt="Card image"
                        />
                      </Card>
                    </div>
                    <div className="col-6">
                      <Card className="bg-dark text-white">
                        <Card.Img
                          style={{ height: "110px" }}
                          src="https://www.ismdelhi.in/wp-content/uploads/2019/02/slider1-1024x436.jpg"
                          alt="Card image"
                        />
                      </Card>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div
            className="w-100"
            style={{
              minHeight: "88vh",
              maxHeight: "100vh",
              marginTop: "100px",
            }}
          >
            <div className="container mt-5">
              <div className="row pt-5">
                <div className="col-md-6">
                  <h3
                    data-aos="fade-right"
                    data-aos-delay="400"
                    data-aos-duration="1000"
                    className="display-2 fw-bold ms-md-5 text-center custom-primary"
                  >
                    Capital Markets Products
                    <br />
                    Include Securities
                  </h3>
                </div>
                <div className="col-md-6">
                  <div className="row">
                    <div className="col">
                      <Card className="bg-white text-white">
                        <Card.Img
                          style={{ height: "300px" }}
                          src="https://img.etimg.com/thumb/msid-85574677,width-1200,height-900,imgsize-117743,overlay-etmarkets/photo.jpg"
                          alt="Card image"
                        />
                      </Card>
                    </div>
                  </div>
                  <div className="row mt-3">
                    <div className="col-6">
                      <Card className="bg-dark text-white">
                        <Card.Img
                          style={{ height: "110px" }}
                          src="https://www.financialexpress.com/wp-content/uploads/2021/05/7-11-620x400.jpg"
                          alt="Card image"
                        />
                      </Card>
                    </div>
                    <div className="col-6">
                      <Card className="bg-dark text-white">
                        <Card.Img
                          style={{ height: "110px" }}
                          src="https://www.ismdelhi.in/wp-content/uploads/2019/02/slider1-1024x436.jpg"
                          alt="Card image"
                        />
                      </Card>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div
            className="w-100"
            style={{
              minHeight: "88vh",
              maxHeight: "100vh",
              marginTop: "100px",
            }}
          >
            <div className="container mt-5">
              <div className="row pt-5">
                <div className="col-md-6">
                  <h3
                    data-aos="fade-right"
                    data-aos-delay="400"
                    data-aos-duration="1000"
                    className="display-2 fw-bold ms-md-5 text-center custom-primary"
                  >
                    Collective
                    <br />
                    Investment Scheme
                  </h3>
                </div>
                <div className="col-md-6">
                  <div className="row">
                    <div className="col">
                      <Card className="bg-white text-white">
                        <Card.Img
                          style={{ height: "300px" }}
                          src="https://certicom.in/wp-content/uploads/2018/07/1_J6G5AVDJl9T7QwWFlkdASQ.png"
                          alt="Card image"
                        />
                      </Card>
                    </div>
                  </div>
                  <div className="row mt-3">
                    <div className="col-6">
                      <Card className="bg-dark text-white">
                        <Card.Img
                          style={{ height: "110px" }}
                          src="https://s28126.pcdn.co/blogs/ask-experian/wp-content/uploads/Which-Type-of-Investment-Has-the-Highest-Risk.jpg"
                          alt="Card image"
                        />
                      </Card>
                    </div>
                    <div className="col-6">
                      <Card className="bg-dark text-white">
                        <Card.Img
                          style={{ height: "110px" }}
                          src="https://www.ismdelhi.in/wp-content/uploads/2019/02/slider1-1024x436.jpg"
                          alt="Card image"
                        />
                      </Card>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
    </header>
  );
};

export default Header;
