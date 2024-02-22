/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import { useState, useEffect } from "react";
import { TiTick } from "react-icons/ti";
import "./state.css";
import { useParams } from "next/navigation";
import useOrder from "@/components/hooks/useOrder";


const Status = () => {
  const status = ["Booking", "Payment", "One the way", "Delivered"];
  const [data, setData] = useState(null);
  const [currentStatus, setCurrentStatus] = useState(1);
  const [complete, setComplete] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [order] = useOrder()
  const { trackingId } = useParams()
console.log(trackingId)
  const newStatus = order.find((ord) => ord._id === trackingId);

  console.log(newStatus)

  useEffect(() => {

    try {
      setLoading(true);
      setData(newStatus);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setError(error);
      setLoading(false);
    }
  }, []);


  useEffect(() => {
    if (data) {

      const index = status.findIndex((s) => s === data.status);
      if (index !== -1) {

        setCurrentStatus(index + 1);
        setComplete(index === status.length - 1);
      }
    }
  }, [data]);

  return (
    <div className="">
      {loading ? (
        <div className="flex justify-center text-center pt-64">
          <p>Loading...</p>
        </div>
      ) : error ? (
        <div className="flex justify-center text-center pt-64">
          <p>Something went wrong: {error.message}</p>
        </div>
      ) : (

        <div className="flex justify-center text-center pt-64">
          {status?.map((state, i) => (
            <div
              key={i}
              className={`state-item ${currentStatus === i + 1 && "active"} ${(i + 1 < currentStatus || complete) && "complete"
                }`}
            >
              <div className="state">
                {i + 1 < currentStatus || complete ? (
                  <TiTick size={24} />
                ) : (
                  i + 1
                )}
              </div>
              <p className="pt-2">{state}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Status;
