import React, { useEffect, useState } from "react";
import Table from "../components/Table";
import { useSelector } from "react-redux";
const Clients = () => {
  const { currentUser } = useSelector((state) => state.user);
  const clientData = [
    { name: "John", age: 20, service_Start: "2020-01-01" },
    { name: "Jane", age: 30, service_Start: "2020-01-01" },
  ];
  const [clients, setClients] = useState(clientData);
  useEffect(() => {
    /*      fetch("http://localhost:8080/api/clients")
        .then(res=>res.json())
        .then(data=>{
            setClients(data);
        }) */
  }, []);

  return (
    <div className="hero min-h-[90vh] bg-slate-200">
      <div className="hero-content flex-col text-center">
        {currentUser?.isAdmin ? (
          <>
            <label htmlFor="my-modal" className="btn">
              Add Client
            </label>
            <input type="checkbox" id="my-modal" className="modal-toggle" />
            <div className="modal">
              <div className="modal-box">
                <h3 className="font-bold text-lg text-left mb-2">
                  Add a new Client
                </h3>
                <label
                  htmlFor="my-modal"
                  className="btn btn-sm btn-circle absolute right-2 top-5"
                >
                  ✕
                </label>
                <form className="flex flex-col">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Name"
                    required
                    className="input  input-bordered w-full max-w-xs"
                  />
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="Email"
                    required
                    className="input  input-bordered w-full max-w-xs"
                  />
                  <label className="label">
                    <span className="label-text">Phone</span>
                  </label>
                  <input
                    type="tel"
                    placeholder="Phone"
                    maxLength={10}
                    required
                    className="input  input-bordered w-full max-w-xs"
                  />
                  <label className="label">
                    <span className="label-text">Service Type</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Service Type"
                    required
                    className="input  input-bordered w-full max-w-xs"
                  />
                  <label className="label">
                    <span className="label-text">Service Start</span>
                  </label>
                  <input
                    type="date"
                    placeholder="Service Start"
                    required
                    className="input  input-bordered w-full max-w-xs"
                  />
                  <label className="label">
                    <span className="label-text">Address</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Address"
                    required
                    className="input  input-bordered w-full max-w-xs"
                  />
                </form>

                <div className="modal-action">
                  <label htmlFor="my-modal" className="btn">
                    Submit
                  </label>
                </div>
              </div>
            </div>
          </>
        ) : null}
        <Table
          heads={["Name", "Service Status", "Service Started"]}
          rows={clients}
        />
      </div>
    </div>
  );
};

export default Clients;
