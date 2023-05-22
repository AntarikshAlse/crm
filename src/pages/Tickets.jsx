import React, { useState, useEffect, useReducer } from "react";
import { useSelector } from "react-redux";
import { publicRequest } from "../requestMethods";
import Table from "../components/Table";
const Tickets = () => {
  const { currentUser } = useSelector((state) => state.user);
  const [tickets, setTickets] = useState([
    {
      subject: "Ticket 1",
      status: "Ticket 1 description",
      issueDate: "2021-01-01T00:00",
    },
    {
      subject: "Ticket 2",
      status: "Ticket 2 description",
      issueDate: "2021-01-01T00:00",
    },
    {
      subject: "Ticket 3",
      status: "Ticket 3 description",
      issueDate: "2021-01-01T00:00",
    },
    {
      subject: "Ticket 4",
      status: "Ticket 4 description",
      issueDate: "2021-01-01T00:00",
    },
  ]);
  const initialState = {
    subject: "",
    status: "Operator Pending",
    issueDate: new Date(),
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
  function getTickets() {
    publicRequest.get("/tickets").then((res) => {
      let data = res.data.map((val) => {
        return {
          subject: val.subject,
          status: val.status,
          issueDate: new Date(val.issueDate).toLocaleDateString(),
        };
      });
      setTickets(data);
    });
  }
  const handleSubmit = async (e) => {
    // Handle form submission here
    try {
      let response = await publicRequest.post("/tickets", formState);
      if (!response.error || response.status === 201) {
        getTickets();
      }
    } catch (error) {
      alert(error.message);
      console.log(error.message);
    }

    dispatch({ type: "RESET" });
  };
  useEffect(() => {
    getTickets();
  }, []);
  return (
    <>
      <div className="hero min-h-[90vh] bg-slate-200">
        <div className="hero-content flex-col text-center">
          {!currentUser?.isAdmin ? (
            <>
              <label htmlFor="my-modal" className="btn">
                Add Ticket
              </label>
              <input type="checkbox" id="my-modal" className="modal-toggle" />
              <div className="modal">
                <div className="modal-box">
                  <h3 className="font-bold text-lg text-left mb-2">
                    Add a new Ticket
                  </h3>
                  <label
                    htmlFor="my-modal"
                    className="btn btn-sm btn-circle absolute right-2 top-5"
                  >
                    ✕
                  </label>
                  <form className="flex flex-col">
                    <label className="label">
                      <span className="label-text">Subject</span>
                    </label>
                    <textarea
                      value={formState.subject}
                      name="subject"
                      onChange={handleChange}
                      className="textarea textarea-bordered"
                      placeholder="Subject"
                    ></textarea>
                    <label className="label">
                      <span className="label-text">Issue Date</span>
                    </label>
                    <input
                      onChange={handleChange}
                      value={formState.issueDate}
                      name="issueDate"
                      type="date"
                      placeholder="Issue Date"
                      required
                      className="input my-2 input-bordered w-full max-w-xs"
                    />
                    <label className="label">
                      <span className="label-text">Status</span>
                    </label>
                    <select
                      name="status"
                      onChange={handleChange}
                      value={formState.status}
                      className="select select-bordered w-full max-w-xs"
                    >
                      <option value="Operator Pending">Operator Pending</option>
                      <option value="Client Pending">Client Pending</option>
                    </select>
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
          <Table heads={["Subject", "Status", "Issue Date"]} rows={tickets} />
        </div>
      </div>
    </>
  );
};

export default Tickets;
