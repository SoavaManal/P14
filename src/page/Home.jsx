import { useState } from "react";
import { NavLink } from "react-router-dom";
import states from "../data/States.js";
import "../index.css";
import Modal from "../composant/Modal.jsx";
import { useDispatch, useSelector } from "react-redux";
import { setEmployee } from "../reducers/employee.reducer.js";

export default function Home() {
  // état pour gérer les champs du formulaire
  const [firstName, SetFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [birth, setBirth] = useState("");
  const [start, setStart] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [code, setCode] = useState("");
  const [department, setDepartment] = useState("");
  
  // état pour gérer l'ouverture de la modale
  const [openModal, setOpenModal] = useState(false);
  
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    const employee = {
      firstName,
      lastName,
      birth,
      start,
      street,
      city,
      state,
      code,
      department,
    };
    dispatch(setEmployee(employee));
    setOpenModal(true);
  };
  const handleCloseModale = () => {
    setOpenModal(false);
  };
  return (
    <div className="main">
      <div className="title">
        <h1>HRnet</h1>
      </div>
      <div className="container">
        <NavLink to="/employee-list">View Current Employees</NavLink>
        <h2>Create Employee</h2>
        <form id="create-employee" onSubmit={handleSubmit}>
          <label htmlFor="first-name">First Name</label>
          <input
            type="text"
            id="first-name"
            onChange={(e) => SetFirstName(e.target.value)}
          />

          <label htmlFor="last-name">Last Name</label>
          <input
            type="text"
            id="last-name"
            onChange={(e) => setLastName(e.target.value)}
          />

          <label htmlFor="date-of-birth">Date of Birth</label>
          <input
            id="date-of-birth"
            type="date"
            onChange={(e) => setBirth(e.target.value)}
          />

          <label htmlFor="start-date">Start Date</label>
          <input
            id="start-date"
            type="date"
            onChange={(e) => setStart(e.target.value)}
          />

          <fieldset className="address">
            <legend>Address</legend>

            <label htmlFor="street">Street</label>
            <input
              id="street"
              type="text"
              onChange={(e) => setStreet(e.target.value)}
            />

            <label htmlFor="city">City</label>
            <input
              id="city"
              type="text"
              onChange={(e) => setCity(e.target.value)}
            />

            <label htmlFor="state">State</label>
            <select
              name="state"
              id="state"
              onChange={(e) => setState(e.target.value)}
            >
              {states.map((state) => (
                <option key={state.abbreviation} value={state.abbreviation}>
                  {state.name}
                </option>
              ))}
            </select>

            <label htmlFor="zip-code">Zip Code</label>
            <input
              id="zip-code"
              type="number"
              onChange={(e) => setCode(e.target.value)}
            />
          </fieldset>

          <label
            htmlFor="department"
            onChange={(e) => setDepartment(e.target.value)}
          >
            Department
          </label>
          <select name="department" id="department" onChange={e=> setDepartment(e.target.value)}>
            <option value="Sales">Sales</option>
            <option value="Marketing">Marketing</option>
            <option value="Engineering">Engineering</option>
            <option value="human Ressources">Human Resources</option>
            <option>Legal</option>
          </select>
          <button type="submit">Save</button>
        </form>
      </div>
      {openModal ? <Modal handleCloseModale={handleCloseModale} /> : ""}
    </div>
  );
}
