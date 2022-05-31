import React from 'react';
import career from '../assets/career.png';

const Create = () => {
    return (
      <div className="container py-5">
        <div className="row mx-auto mt-5 justify-content-center align-items-center">
          <div className="col-md-6">
            <div className="">
              <h3 className="display-4 fw-bold">
                Your hard work & dedication reach you
              </h3>
              <p>
                It’s an honor for our organization….To have someone like you.
                With your hard work you have taken us to the top. No matter how
                big a crowd may be, a person like you always stands out! There’s
                no one who has worked as hard as you have in the last years.
              </p>
            </div>
          </div>
          <div className="col-md-6 d-flex justify-content-center align-items-center">
            <img
              className="img-fluid"
              style={{ height: "500px" }}
              src={career}
              alt=""
            />
          </div>
        </div>
      </div>
    );
};

export default Create;