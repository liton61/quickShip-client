"use client"

import usePublicAxios from '@/components/hooks/usePublicAxios';
import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';


const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const SimplePieChart = () => {

    const publicAxios = usePublicAxios();
  const { refetch, data: stats = [] } = useQuery({
    queryKey: ["admin-stats"],
    queryFn: async () => {
      const res = await publicAxios.get(`/admin-stats`, {
      });
      return res.data;
    },
  });

console.log(stats)

    const data = [
        { name: 'Orders', value: stats?.orders },
        { name: 'Payment', value: stats?.payment },
        { name: 'Users', value: stats?.users },
        { name: 'Application', value: stats?.application },
      ];

      const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];


  return (
    <ResponsiveContainer width="50%" height={400}>
      <PieChart width={400} height={400}>
        <Pie
         data={data}
         cx="50%"
         cy="50%"
         labelLine={false} // Disables default labels
         label={renderCustomizedLabel} // Uses the custom label function
         outerRadius={80}
         fill="#8884d8"
         dataKey="value"

        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
};

export default SimplePieChart;
