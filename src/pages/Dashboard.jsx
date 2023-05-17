import React from "react";

const Dashboard = () => {
  const dashData = [
    { name: "Total Clients", value: 20 },
    { name: "Total Tickets", value: 50 },
    { name: "Pending Tickets", value: 25 },
  ];

  const [data, setData] = React.useState(dashData);
  // fetch data for dashboard
  React.useEffect(() => {
    /* fetch("/api/clients")
    .then((res) => res.json())
    .then((data) => setData(data)); */
  }, []);

  return (
    <div className="hero min-h-screen bg-slate-200">
      <div className="hero-content text-center">
        <div className="card bg-base-200 card-body max-w-lg px-20">
          <h1 className="text-4xl font-bold mb-2">Details</h1>
          {data.map((item, index) => (
            <p className="py-2 text-lg" key={index}>
              {item.name} : {item.value}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
