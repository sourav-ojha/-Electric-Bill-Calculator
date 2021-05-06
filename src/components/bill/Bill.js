import React, { useState } from "react";
import "../../css/Style.css";
// import Input from './Input'
import jsPDF from 'jspdf'

let unit1 = 0;

function Bill() {
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

  function calculate(e) {
    unit1 = state.funit - state.iunit;
    setRes({
      ...res,
      unit: unit1,
      cost: unit1 * 5.5,
    });
    console.log(unit1, e);
  }

  function handleChange(e) {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  }

  const print = <button onClick={printres}> Print </button>;

  function printres() {
    var doc = new jsPDF();
    doc.setFontSize(22);
    doc.text(70, 15, "Electric Bill")
    doc.setFontSize(16);
    doc.text(20, 20, "------------------------------------------------------------------------------------")
    doc.text(20, 90, "------------------------------------------------------------------------------------")
    doc.text(60, 30, "Name  :  " + state.name );
    doc.text(59, 40, "Month  :  " + state.month );
    doc.text(50, 50, "Initial Unit  :  " + state.iunit );
    doc.text(49, 60, "Final Unit   :  " + state.funit );
    doc.text(49, 70, "Total Unit   :  " + res.unit );
    doc.text(61, 80, "Cost   :  " + res.cost );
    doc.save("a4.pdf");
  }

  return (
    <div className="content">
      <div className="input">
          <h2> Enter Details</h2>
        <label>
          Name :
          <input
            type="text"
            id="name"
            name="name"
            value={state.name}
            onChange={handleChange}
          />
        </label>
        <label>
          Month :
          <input
            type="text"
            id="month"
            name="month"
            value={state.month}
            onChange={handleChange}
          />
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
          />
        </label>
        <button name="calculate" onClick={calculate}>
          calculate
        </button>
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
        {print}
      </div>
    </div>
  );
}

export default Bill;
