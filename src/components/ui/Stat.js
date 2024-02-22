

const Stat = () => {
  return (
    <div className="bg-base-200 py-20">
      <div className="container mx-auto lg:px-20 px-5 my-10 mt-14">
        <div className="stats stats-vertical lg:stats-horizontal shadow w-full">
          <div className="stat place-items-center">
            <div className="stat-title">Downloads</div>
            <div className="stat-value p-5 text-blue-600">31K</div>
          </div>

          <div className="stat place-items-center">
            <div className="stat-title">New Users</div>
            <div className="stat-value p-5 text-blue-600">4,200</div>
          </div>

          <div className="stat place-items-center">
            <div className="stat-title">New Registers</div>
            <div className="stat-value p-5 text-blue-600">1,200</div>
          </div>
          <div className="stat place-items-center">
            <div className="stat-title">Reviews</div>
            <div className="stat-value p-5 text-blue-600">3,200</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stat;