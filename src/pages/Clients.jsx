import React, { useEffect, useState, useReducer } from "react";
import Table from "../components/Table";
import { useSelector } from "react-redux";
import { publicRequest } from "../requestMethods";
const Clients = () => {
  const { currentUser } = useSelector((state) => state.user);
  const clientData = [
    { name: "John", age: 20, service_Start: "2020-01-01" },
    { name: "Jane", age: 30, service_Start: "2020-01-01" },
  ];
  const [clients, setClients] = useState(clientData);
  const heads = ["Name", "Email", "Phone", "Service Type"];
  const initialState = {
    name: "",
    email: "",
    phone: "",
    serviceType: "",
    address: "",
  };

  function reducer(state, action) {
    switch (action.type) {
      case "CHANGE":
        return {
          ...state,
          [action.field]: action.value,
        };
      case "RESET":
        return initialState;
      default:
        throw new Error();
    }
  }
  const [formState, dispatch] = useReducer(reducer, initialState);
  const handleChange = (e) => {
    dispatch({
      type: "CHANGE",
      field: e.target.name,
      value: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    // Handle form submission here
    dispatch({ type: "RESET" });
  };
  useEffect(() => {
    function getClients() {
      publicRequest.get("/clients").then((res) => {
        let data = res.data.map((val) => {
          return {
            name: val.name,
            email: val.email,
            phone: val.phone,
            serviceType: val.serviceType,
          };
        });
        setClients(data);
      });
    }
    getClients();
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
                  onClick={handleSubmit}
                >
                  ✕
                </label>
                <form className="flex flex-col">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    onChange={handleChange}
                    name="name"
                    value={formState.name}
                    type="text"
                    placeholder="Name"
                    required
                    className="input  input-bordered w-full max-w-xs"
                  />
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    onChange={handleChange}
                    name="email"
                    value={formState.email}
                    type="email"
                    placeholder="Email"
                    required
                    className="input  input-bordered w-full max-w-xs"
                  />
                  <label className="label">
                    <span className="label-text">Phone</span>
                  </label>
                  <input
                    onChange={handleChange}
                    name="phone"
                    value={formState.phone}
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
                    onChange={handleChange}
                    name="serviceType"
                    value={formState.serviceType}
                    type="text"
                    placeholder="Service Type"
                    required
                    className="input  input-bordered w-full max-w-xs"
                  />
                  <label className="label">
                    <span className="label-text">Address</span>
                  </label>
                  <input
                    onChange={handleChange}
                    name="address"
                    value={formState.address}
                    type="text"
                    placeholder="Address"
                    required
                    className="input  input-bordered w-full max-w-xs"
                  />
                </form>

                <div className="modal-action">
                  <label
                    htmlFor="my-modal"
                    className="btn"
                    onClick={handleSubmit}
                  >
                    Submit
                  </label>
                </div>
              </div>
            </div>
          </>
        ) : null}
        <Table heads={heads} rows={clients} />
      </div>
    </div>
  );
};

export default Clients;
