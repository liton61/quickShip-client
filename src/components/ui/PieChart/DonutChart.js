
"use client"


import useApplication from '../../hooks/useApplication';
import useOrder from '../../hooks/useOrder';
import usePayment from '../../hooks/usePayment';
import ApexCharts from 'react-apexcharts';


const DonutChart =  () => {

  const [order] = useOrder();
  const [payment] = usePayment()
  const [application] = useApplication()


  const chartOptions = {
    series: [order.length, application.length, payment.length],
    chart: {
      type: 'donut',
      width: '100%' // Ensure full-width responsiveness
    },
    // responsive: [{
    //   breakpoint: 480, // Adjust breakpoint as needed
    //   options: {
    //     chart: {
    //       width: '100%', // Consider a wider width for smaller screens
    //     },
    //     legend: {
    //       position: 'bottom',
    //       offsetX: 0, // Center legend horizontally
    //       offsetY: 0, // Position legend at the bottom edge
    //     },
    //   },
    // }],
    labels: ['Order', 'Apply', 'Payment'],
    legend: {
      show: true, // Optionally display legend
      position: 'right', // Adjust position as desired
      offsetX: 0, // Optionally center legend horizontally
      offsetY: 0, // Optionally position legend vertically
    },
    colors: ['#3e8ef7', '#36c5b4', '#ff0000']
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