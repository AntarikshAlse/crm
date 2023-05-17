import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Table from "../components/Table";
const Tickets = () => {
  const { currentUser } = useSelector((state) => state.user);
  const [tickets, setTickets] = useState([
    {
      subject: "Ticket 1",
      status: "Ticket 1 description",
      last_updated: "2021-01-01T00:00",
    },
    {
      subject: "Ticket 2",
      status: "Ticket 2 description",
      last_updated: "2021-01-01T00:00",
    },
    {
      subject: "Ticket 3",
      status: "Ticket 3 description",
      last_updated: "2021-01-01T00:00",
    },
    {
      subject: "Ticket 4",
      status: "Ticket 4 description",
      last_updated: "2021-01-01T00:00",
    },
  ]);
  useEffect(() => {
    /*      fetch("http://localhost:8080/api/tickets")
        .then(res=>res.json())
        .then(data=>{
            setTickets(data);
        }) */
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
                      className="textarea textarea-bordered"
                      placeholder="Subject"
                    ></textarea>
                    <label className="label">
                      <span className="label-text">Issue Date</span>
                    </label>
                    <input
                      type="date"
                      placeholder="Issue Date"
                      required
                      className="input my-2 input-bordered w-full max-w-xs"
                    />
                    <label className="label">
                      <span className="label-text">Status</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Status"
                      required
                      className="input my-2 input-bordered w-full max-w-xs"
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
          <Table heads={["Subject", "Status", "Last Updated"]} rows={tickets} />
        </div>
      </div>
    </>
  );
};

export default Tickets;
