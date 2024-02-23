"use client"


import useOrder from '@/components/hooks/useOrder';
import ApexCharts from 'react-apexcharts';
const DonutChart = () => {
  const [order] = useOrder();

  const chartOptions = {
    series: [44, 55, 41, 17, 15],
    chart: {
      type: 'donut',
      width: '100%' // Ensure full-width responsiveness
    },
    responsive: [{
      breakpoint: 480, // Adjust breakpoint as needed
      options: {
        chart: {
          width: '100%', // Consider a wider width for smaller screens
        },
        legend: {
          position: 'bottom',
          offsetX: 0, // Center legend horizontally
          offsetY: 0, // Position legend at the bottom edge
        },
      },
    }],
    labels: ['Apples', 'Bananas', 'Oranges', 'Grapes', 'Other'],
    legend: {
      show: true, // Optionally display legend
      position: 'right', // Adjust position as desired
      offsetX: 0, // Optionally center legend horizontally
      offsetY: 0, // Optionally position legend vertically
    },
  };

  return (
    <div className='w-full md:w-2/4 2xl:w-1/2 lg:drop-shadow-xl'>
      <ApexCharts
        options={chartOptions}
        series={chartOptions.series}
        type="donut"
        height={350} // Adjust height as needed
      />
    </div>
  );
};

export default DonutChart;