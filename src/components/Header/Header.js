import React from "react";
import { Card, Carousel, Container, Nav, Navbar } from "react-bootstrap";
import { AiOutlineYoutube } from "react-icons/ai";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <Navbar expand="lg" className="py-3 sticky-top">
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
              <Nav.Link className="mx-lg-2" href="#action1">
                Home
              </Nav.Link>
              <Nav.Link className="mx-lg-2" href="#product">
                Product
              </Nav.Link>
              <Nav.Link className="mx-lg-2" href="#service">
                Service
              </Nav.Link>
              <Nav.Link className="mx-lg-2" href="#client">
                Become a Client
              </Nav.Link>
              <Nav.Link className="mx-lg-2" href="#about">
                About us
              </Nav.Link>
            </Nav>
            <div className="link-hover">
              <span className="me-1">Youtube</span>
              <AiOutlineYoutube className="fs-2" />
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {/* Slider */}
      <Carousel variant="dark">
        <Carousel.Item>
          <div
            className="w-100"
            style={{ minHeight: "83vh", maxHeight: "90vh" }}
          >
            <div className="container mt-5">
              <div className="row pt-5">
                <div className="col-6">
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
                  className="col-6"
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
            style={{ minHeight: "83vh", maxHeight: "90vh" }}
          >
            <div className="container mt-5">
              <div className="row pt-5">
                <div className="col-6">
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
                <div className="col-6">
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
            style={{ minHeight: "83vh", maxHeight: "90vh" }}
          >
            <div className="container mt-5">
              <div className="row pt-5">
                <div className="col-6">
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
                <div className="col-6">
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
