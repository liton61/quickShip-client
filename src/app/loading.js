import React from "react";
import loadding from "../asstes/loadding.gif";
import Image from "next/image";

const Loading = () => {
  return (
    <div
      className="text-center flex justify-center items-center"
      style={{ height: "100vh" }}
    >
      <Image
        src={loadding}
        width={600}
        height={200}
        className="img-fluid inline"
        alt=""
      />
    </div>
  );
};

export default Loading;
