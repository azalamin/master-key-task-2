import React from "react";
import {
  Button,
  Card,
  Carousel,
  Container,
  Form,
  FormControl,
  Nav,
  Navbar
} from "react-bootstrap";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <Navbar expand="lg" className="py-3 sticky-top">
        <Container container="true">
          <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "150px" }}
              navbarScroll
            >
              <Nav.Link href="#action1">Home</Nav.Link>
              <Nav.Link href="#product">Product</Nav.Link>
              <Nav.Link href="#service">Service</Nav.Link>
              <Nav.Link href="#client">Become a Client</Nav.Link>
              <Nav.Link href="#about">About us</Nav.Link>
            </Nav>
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
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
                  <h3 className="display-2 fw-bold ms-md-5">
                    Where creative process happens
                  </h3>
                </div>
                <div className="col-6">
                  <div className="row">
                    <div className="col">
                      <Card className="bg-dark text-white">
                        <Card.Img
                          src="https://jssors8.azureedge.net/demos/image-slider/img/faded-monaco-scenery-evening-dark-picjumbo-com-image.jpg"
                          alt="Card image"
                        />
                      </Card>
                    </div>
                  </div>
                  <div className="row mt-3">
                    <div className="col-6">
                      <Card className="bg-dark text-white">
                        <Card.Img
                          src="https://jssors8.azureedge.net/demos/image-slider/img/faded-monaco-scenery-evening-dark-picjumbo-com-image.jpg"
                          alt="Card image"
                        />
                      </Card>
                    </div>
                    <div className="col-6">
                      <Card className="bg-dark text-white">
                        <Card.Img
                          src="https://jssors8.azureedge.net/demos/image-slider/img/faded-monaco-scenery-evening-dark-picjumbo-com-image.jpg"
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
                  <h3 className="display-2 fw-bold ms-md-5">
                    Get something never forget
                  </h3>
                </div>
                <div className="col-6">
                  <div className="row">
                    <div className="col">
                      <Card className="bg-dark text-white">
                        <Card.Img
                          src="https://jssors8.azureedge.net/demos/image-slider/img/faded-monaco-scenery-evening-dark-picjumbo-com-image.jpg"
                          alt="Card image"
                        />
                      </Card>
                    </div>
                  </div>
                  <div className="row mt-3">
                    <div className="col-6">
                      <Card className="bg-dark text-white">
                        <Card.Img
                          src="https://jssors8.azureedge.net/demos/image-slider/img/faded-monaco-scenery-evening-dark-picjumbo-com-image.jpg"
                          alt="Card image"
                        />
                      </Card>
                    </div>
                    <div className="col-6">
                      <Card className="bg-dark text-white">
                        <Card.Img
                          src="https://jssors8.azureedge.net/demos/image-slider/img/faded-monaco-scenery-evening-dark-picjumbo-com-image.jpg"
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
                  <h3 className="display-2 fw-bold ms-md-5">
                    Where you get the best support
                  </h3>
                </div>
                <div className="col-6">
                  <div className="row">
                    <div className="col">
                      <Card className="bg-dark text-white">
                        <Card.Img
                          src="https://jssors8.azureedge.net/demos/image-slider/img/faded-monaco-scenery-evening-dark-picjumbo-com-image.jpg"
                          alt="Card image"
                        />
                      </Card>
                    </div>
                  </div>
                  <div className="row mt-3">
                    <div className="col-6">
                      <Card className="bg-dark text-white">
                        <Card.Img
                          src="https://jssors8.azureedge.net/demos/image-slider/img/faded-monaco-scenery-evening-dark-picjumbo-com-image.jpg"
                          alt="Card image"
                        />
                      </Card>
                    </div>
                    <div className="col-6">
                      <Card className="bg-dark text-white">
                        <Card.Img
                          src="https://jssors8.azureedge.net/demos/image-slider/img/faded-monaco-scenery-evening-dark-picjumbo-com-image.jpg"
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
