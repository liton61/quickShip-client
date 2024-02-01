"use client";
import { useState } from "react";
import { TiTick } from "react-icons/ti";
import "./state.css";

function Status() {
  const status = ["Booking", "Payment", "One the way", "Delivered"];
  const [currentStatus, setCurrenStatus] = useState(1);
  const [complete, setComplete] = useState(false);
  return (
    <div className="h-screen container m-auto justify-center items-center">
      <div className="flex justify-center text-center pt-64">
        {status?.map((state, i) => (
          <div
            key={i}
            className={`state-item ${currentStatus === i + 1 && "active"} ${
              (i + 1 < currentStatus || complete) && "complete"
            }`}
          >
            <div className="state">
              {i + 1 < currentStatus || complete ? <TiTick size={24} /> : i + 1}
            </div>
            <p className="pt-2">{state}</p>
          </div>
        ))}
      </div>
      <div className="flex justify-center items-center mt-24">
        {!complete && (
          <button
            className="btn"
            onClick={() => {
              currentStatus === status.length
                ? setComplete(true)
                : setCurrenStatus((prev) => prev + 1);
            }}
          >
            {currentStatus === status.length ? "Finish" : "Next"}
          </button>
        )}
      </div>
    </div>
  );
}

export default Status;
