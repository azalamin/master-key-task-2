import React from "react";
import { BsArrowRightCircleFill } from "react-icons/bs";
import SectionTitle from "../SectionTitle";

const Services = () => {
  return (
    <div className="bg-white pb-5">
      <SectionTitle>Product & Services</SectionTitle>
      <div className="container row gap-5 justify-content-center mb-5 mx-auto mt-5">
        <div className="col-md-5 bg-primary p-3 cursor">
          <div>
            <h3 className="text-white">Copper teach industry LTD.</h3>
            <div className="ms-3">
              <div
                style={{ fontSize: "20px" }}
                className="d-flex justify-items-center"
              >
                <p className="mb-0">
                  <BsArrowRightCircleFill className="text-warning" />
                </p>
                <p className="ms-1 text-white mb-0 item">Prospectus</p>
              </div>
              <div
                style={{ fontSize: "20px" }}
                className="d-flex justify-items-center"
              >
                <p className="mb-0">
                  <BsArrowRightCircleFill className="text-warning" />
                </p>
                <p className="ms-1 text-white mb-0 item">Abridged</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-5 bg-primary p-3 cursor">
          <div>
            <h3 className="text-white">Olmex Electrode Limited</h3>
            <div className="ms-3">
              <div
                style={{ fontSize: "20px" }}
                className="d-flex justify-items-center"
              >
                <p className="mb-0">
                  <BsArrowRightCircleFill className="text-warning" />
                </p>
                <p className="ms-1 text-white mb-0 item">Prospectus</p>
              </div>
              <div
                style={{ fontSize: "20px" }}
                className="d-flex justify-items-center"
              >
                <p className="mb-0">
                  <BsArrowRightCircleFill className="text-warning" />
                </p>
                <p className="ms-1 text-white mb-0 item">
                  IPO Application Process
                </p>
              </div>
              <div
                style={{ fontSize: "20px" }}
                className="d-flex justify-items-center"
              >
                <p className="mb-0">
                  <BsArrowRightCircleFill className="text-warning" />
                </p>
                <p className="ms-1 text-white mb-0 item">
                  List of IPO Applicants
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-5 bg-primary p-3 cursor">
          <div>
            <h3 className="text-white">Zaheen Spinning LTD.</h3>
            <div className="ms-3">
              <div
                style={{ fontSize: "20px" }}
                className="d-flex justify-items-center"
              >
                <p className="mb-0">
                  <BsArrowRightCircleFill className="text-warning" />
                </p>
                <p className="ms-1 text-white mb-0 item">Prospectus</p>
              </div>
              <div
                style={{ fontSize: "20px" }}
                className="d-flex justify-items-center"
              >
                <p className="mb-0">
                  <BsArrowRightCircleFill className="text-warning" />
                </p>
                <p className="ms-1 text-white mb-0 item">Abridged</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
