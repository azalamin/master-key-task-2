import React from "react";
import { BsFacebook, BsInstagram, BsTelegram, BsTwitter } from "react-icons/bs";
import { FiMail, FiMapPin, FiPhone } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="footer-section mt-5" style={{ background: "#f7f7f7" }}>
      <div className="container">
        <div className="footer-cta pt-5 pb-5">
          <div className="row">
            <div className="col-xl-4 col-md-4 mb-30">
              <div className="single-cta">
                <FiMapPin style={{ fontSize: "30px" }} />
                <div className="cta-text">
                  <h4>Find us</h4>
                  <span>1010 Avenue, sw 54321, chandigarh</span>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-4 mb-30">
              <div className="single-cta">
                <FiPhone style={{ fontSize: "30px" }} />
                <div className="cta-text">
                  <h4>Call us</h4>
                  <span>9876543210 0</span>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-4 mb-30">
              <div className="single-cta">
                <FiMail style={{ fontSize: "30px" }} />
                <div className="cta-text">
                  <h4>Mail us</h4>
                  <span>mail@info.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-content pt-5 pb-5">
          <div className="row">
            <div className="col-xl-4 col-lg-4 mb-50">
              <div className="footer-widget">
                <div className="footer-logo">
                  <h3 className="fw-bold">CAPITAL DOCTOR</h3>
                </div>
                <div className="footer-text">
                  <p>
                    Lorem ipsum dolor sit amet, consec tetur adipisicing elit,
                    sed do eiusmod tempor incididuntut consec tetur adipisicing
                    elit,Lorem ipsum dolor sit amet.
                  </p>
                </div>
                <div className="footer-social-icon">
                  <span>Follow us</span>
                  <a className="px-1" href="#home">
                    <BsFacebook style={{ fontSize: "23px" }} />
                  </a>
                  <a className="px-1" href="#home">
                    <BsTwitter style={{ fontSize: "23px" }} />
                  </a>
                  <a className="px-1" href="#home">
                    <BsInstagram style={{ fontSize: "23px" }} />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
              <div className="footer-widget">
                <div className="footer-widget-heading mt-5 mt-lg-0">
                  <h3>Useful Links</h3>
                  <p className="mb-0">
                    <a className="text-dark" href="#link">
                      Home
                    </a>
                  </p>
                  <p className="mb-0">
                    <a className="text-dark" href="#link">
                      Services
                    </a>
                  </p>
                  <p className="mb-0">
                    <a className="text-dark" href="#link">
                      Products
                    </a>
                  </p>
                  <p className="mb-0">
                    <a className="text-dark" href="#link">
                      Register
                    </a>
                  </p>
                  <p className="mb-0">
                    <a className="text-dark" href="#link">
                      Home
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 mb-50">
              <div className="footer-widget">
                <div className="footer-widget-heading">
                  <h3>Subscribe</h3>
                </div>
                <div className="footer-text mb-25">
                  <p>
                    Don’t miss to subscribe to our new feeds, kindly fill the
                    form below.
                  </p>
                </div>
                <div className="subscribe-form">
                  <form action="#" className="d-flex">
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Email Address"
                    />
                    <button className="btn">
                      <BsTelegram
                        className="text-primary"
                        style={{ fontSize: "33px" }}
                      />
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright-area">
        <div className="container">
          <div className="row">
            <div className="col text-center">
              <div className="copyright-text">
                <p>Copyright &copy; 2022, All Right Reserved, Alamin</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
