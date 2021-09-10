import React, { useEffect, useState } from "react";
import "../../css/Style.css";
import jsPDF from "jspdf";

let unit1 = 0;

function Bill() {
  const [valid, setValid] = useState(false);

  const [state, setState] = useState({
    name: "",
    month: "",
    iunit: "",
    funit: "",
  });

  const [res, setRes] = useState({
    unit: 0,
    cost: 0,
  });

  useEffect(() => {
    if (
      state.funit === "" ||
      state.iunit === "" ||
      state.month === "" ||
      state.name === ""
    )
      setValid(false);
    else setValid(true);

    if (state.funit !== "" && state.iunit !== "") {
      unit1 = state.funit - state.iunit;
      setRes({
        unit: unit1,
        cost: unit1 * 5.5,
      });
      console.log("valid", valid, state);
    }
  }, [state, valid]);

  function handleChange(e) {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  }

  const print = <button onClick={printres}> Print </button>;

  function printres() {
    var date = new Date().toLocaleString().split(",")[0];
    var doc = new jsPDF();
    doc.setFontSize(22);
    doc.text(70, 15, "Electric Bill");
    doc.setFontSize(16);
    doc.text(150, 15, date);
    doc.text(
      20,
      20,
      "------------------------------------------------------------------------------------"
    );
    doc.text(
      20,
      90,
      "------------------------------------------------------------------------------------"
    );
    doc.text(60, 30, "Name  :  " + state.name);
    doc.text(59, 40, "Month  :  " + state.month);
    doc.text(50, 50, "Initial Unit  :  " + state.iunit);
    doc.text(49, 60, "Final Unit   :  " + state.funit);
    doc.text(49, 70, "Total Unit   :  " + res.unit);
    doc.text(61, 80, "Cost   :  " + res.cost);
    doc.save(`${state.name}_${state.month}.pdf`);
  }

  return (
    <div className="content">
      <div className="input">
        <h2> Enter Details</h2>
        <label>
          Name :
          <select
            id="name"
            name="name"
            value={state.name}
            onChange={handleChange}
            required
          >
            <option value="">Select</option>
            <option value="Jitendra Sah">Jitendra Sah</option>
            <option value="Chunnu singh">Chunnu Singh</option>
          </select>
        </label>
        <label>
          Month :
          <select
            id="month"
            name="month"
            value={state.month}
            onChange={handleChange}
            required
          >
            <option value="">Select</option>
            <option value="Jan">Jan</option>
            <option value="Feb">Feb</option>
            <option value="March">March</option>
            <option value="April">April</option>
            <option value="May">May</option>
            <option value="June">June</option>
            <option value="July">July</option>
            <option value="Aug">Aug</option>
            <option value="Sept">Sept</option>
            <option value="Oct">JOct</option>
            <option value="Nov">Nov</option>
            <option value="Dec">Dec</option>
          </select>
        </label>
        <label>
          {" "}
          Initial Unit :
          <input
            type="number"
            id="iunit"
            name="iunit"
            value={state.iunit}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          {" "}
          Final Unit :
          <input
            type="number"
            id="funit"
            name="funit"
            value={state.funit}
            onChange={handleChange}
            required
          />
        </label>
      </div>
      <div className="display">
        <label>
          <span className="left">Name :</span>
          <span className="right">{state.name}</span>
        </label>
        <label>
          <span className="left">Month :</span>
          <span className="right">{state.month}</span>
        </label>
        <label>
          <span className="left">Initial Unit :</span>
          <span className="right">{state.iunit}</span>
        </label>
        <label>
          <span className="left">Final Unit :</span>
          <span className="right">{state.funit}</span>
        </label>
        <label>
          <span className="left">Unit :</span>
          <span className="right">{res.unit}</span>
        </label>
        <label>
          <span className="left">Cost :</span>
          <span className="right">{res.cost}</span>
        </label>
        {valid && print}
      </div>
    </div>
  );
}

export default Bill;
