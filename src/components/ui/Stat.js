

const Stat = () => {
  return (
    <div className="bg-base-200 pt-16 pb-10">
      <div className="container mx-auto lg:px-20 px-5 my-10 mt-14">
        <div className="stats stats-vertical lg:stats-horizontal shadow w-full">
          <div className="stat place-items-center">
            <div className="stat-title">Visitors</div>
            <div className="stat-value p-5 text-blue-600">16</div>
          </div>

          <div className="stat place-items-center">
            <div className="stat-title">New Users</div>
            <div className="stat-value p-5 text-blue-600">12</div>
          </div>

          <div className="stat place-items-center">
            <div className="stat-title">New Registers</div>
            <div className="stat-value p-5 text-blue-600">6</div>
          </div>
          <div className="stat place-items-center">
            <div className="stat-title">Reviews</div>
            <div className="stat-value p-5 text-blue-600">12</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stat;