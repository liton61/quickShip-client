"use client"

import useAllPayment from '@/components/hooks/useAllPayment';
import useParcel from '@/components/hooks/useParcel';
import useReturn from '@/components/hooks/useReturn';
import { Legend, Tooltip } from 'chart.js';
import React, { useState } from 'react';
import { Bar, BarChart, CartesianGrid, Cell, XAxis, YAxis } from 'recharts';

const NewBarChart = () => {

    const [hoveredBar, setHoveredBar] = useState(null);

    const [parcel] = useParcel();
    const successParcel = parcel?.filter(item => item?.status === "success")
    const pendingParcel = parcel?.filter(item => item?.status === "pending")

    const [paymentAll] = useAllPayment()
    const [returnProduct] = useReturn()


   // Calculate total parcel amount
    // const totalParcelAmount = parcel.reduce((total, current) => total + parseFloat(current.amount), 0);
    // console.log(totalParcelAmount);


    // Sample data structure for the bar chart
    const data = [
      { name: "Payment", value: paymentAll?.length },
      { name: "Order", value: parcel?.length },
      { name: "Delivered", value: successParcel?.length },
      { name: "Return", value: returnProduct?.length },
      { name: "Delivery", value: pendingParcel?.length }
    ];


    return (
        <BarChart className = " py-5 pr-5 rounded-md shadow-xl"
          width = {
            500
          }
          height = {
            400
          }
          data = {
            data
          } >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="value" fill="#6B25AC">
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={index === hoveredBar ? "#00000" : "#6B25AC"} // Change color on hover
                  onMouseEnter={() => setHoveredBar(index)}
                  onMouseLeave={() => setHoveredBar(null)}
                />
              ))}
            </Bar>
          </BarChart>
    );
};

export default NewBarChart;