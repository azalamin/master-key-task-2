import React from 'react';
import { FcBusinessman } from "react-icons/fc";
import { MdSupport } from "react-icons/md";
import { SiSymantec } from "react-icons/si";
import SectionTitle from '../components/SectionTitle';

const Choose = () => {
    return (
      <div className="custom-bg">
        <SectionTitle>Why Choose Us</SectionTitle>
        <div className="row container pb-5 mt-5 mx-auto">
          <div
            data-aos="fade-right"
            data-aos-delay="400"
            data-aos-duration="1000"
            className="col-md-4 text-center"
          >
            <div
              className="shadow-lg d-flex justify-items-center justify-content-center mx-auto"
              style={{ borderRadius: "50%", height: "50px", width: "50px" }}
            >
              <SiSymantec
                className="custom-primary"
                style={{ fontSize: "50px", padding: "5px" }}
              />
            </div>
            <div className="mt-5">
              <h4>Professional Capital Expert</h4>
              <p>Your creativity, our inspiration. Whatever your</p>
            </div>
          </div>
          <div
            data-aos="zoom-in-down"
            data-aos-delay="400"
            data-aos-duration="1000"
            className="col-md-4 mt-5 mt-md-0 text-center"
          >
            <div
              className="shadow-lg d-flex justify-items-center justify-content-center mx-auto"
              style={{ borderRadius: "50%", height: "50px", width: "50px" }}
            >
              <MdSupport
                className="custom-primary"
                style={{ fontSize: "50px", padding: "8px" }}
              />
            </div>
            <div className="mt-5">
              <h4>Extensive Support</h4>
              <p>Your creativity, our inspiration. Whatever your</p>
            </div>
          </div>
          <div
            data-aos="fade-right"
            data-aos-delay="400"
            data-aos-duration="1000"
            className="col-md-4 mt-5 mt-md-0 text-center"
          >
            <div
              className="shadow-lg d-flex justify-items-center justify-content-center mx-auto"
              style={{ borderRadius: "50%", height: "50px", width: "50px" }}
            >
              <FcBusinessman
                className="custom-primary"
                style={{ fontSize: "50px", padding: "8px" }}
              />
            </div>
            <div className="mt-5">
              <h4>Career Opportunity</h4>
              <p>Your creativity, our inspiration. Whatever your</p>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Choose;