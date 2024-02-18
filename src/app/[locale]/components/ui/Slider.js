import React from "react";

const Slider = () => {
  return (
    <div>
      <div
        className="hero h-[80vh]"
        style={{
          backgroundImage:
            "url(https://i.ibb.co/gt3psmz/rsz-best-delivery-management-software.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-50"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-4xl font-bold">
              AWESOME DELIVERY SERVICES{" "}
            </h1>
            <p className="mb-5">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
