import React from 'react';

const Stat = () => {
    return (
        <div className='container mx-auto lg:px-0 px-5 my-10'>
            <div className="stats stats-vertical lg:stats-horizontal shadow w-full">

                <div className="stat place-items-center">
                    <div className="stat-title">Downloads</div>
                    <div className="stat-value p-5 text-blue-600">31K</div>
                    <div className="stat-desc">Jan 1st - Feb 1st</div>
                </div>

                <div className="stat place-items-center">
                    <div className="stat-title">New Users</div>
                    <div className="stat-value p-5 text-blue-600">4,200</div>
                    <div className="stat-desc">↗︎ 400 (22%)</div>
                </div>

                <div className="stat place-items-center">
                    <div className="stat-title">New Registers</div>
                    <div className="stat-value p-5 text-blue-600">1,200</div>
                    <div className="stat-desc">↘︎ 90 (14%)</div>
                </div>
                <div className="stat place-items-center">
                    <div className="stat-title">Reviews</div>
                    <div className="stat-value p-5 text-blue-600">3,200</div>
                    <div className="stat-desc">↘︎ 90 (14%)</div>
                </div>

            </div>
        </div>
    );
};

export default Stat;