import { useState } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import EmployeeTable from "../composant/EmployeeTable";
import employeesTest from "../data/Employees";

export default function Employee() {
  // const employeesTest =
  //   useSelector((state) => state.employeeReducer.employee) || [];
  const [employees, setEmployees] = useState(employeesTest);
  const [entries, setEntries] = useState(4);
  const [pagination, setPagination] = useState(1);
  const [search, setSearch] = useState("");

  // Search function
  const handleSearchValue = (e) => {
    setSearch(e.target.value);
  };

  // Pagination function
  const handlePage = () => {
    let employeesFiltred = employees;
    if (search != "") {
      employeesFiltred = employees.filter(
        (employee) =>
          employee.firstName.toLowerCase().includes(search) ||
          employee.lastName.toLowerCase().includes(search) ||
          new Date(employee.start)
            .toLocaleDateString("fr-FR")
            .includes(search) ||
          employee.department.toLowerCase().includes(search) ||
          new Date(employee.birth)
            .toLocaleDateString("fr-FR")
            .includes(search) ||
          employee.street.toLowerCase().includes(search) ||
          employee.city.toLowerCase().includes(search) ||
          employee.state.toLowerCase().includes(search) ||
          employee.code.toLowerCase().includes(search)
      );
    }
    return employeesFiltred.slice(
      (pagination - 1) * entries,
      pagination * entries
    );
  };

  // Previous page
  const handlePrevious = () => {
    if (pagination > 1) {
      setPagination(pagination - 1);
    }
  };

  // Next page
  const handleNext = () => {
    if (employees.length > entries * pagination) {
      setPagination(pagination + 1);
    }
  };

  // Try in ascending order
  const handleAsc = (entry, type) => {
    if (type == "string") {
      console.log("1");
      setEmployees(
        [...employees].sort((a, b) => a[entry].localeCompare(b[entry]))
      );
    }
    if (type == "number") {
      setEmployees([...employees].sort((a, b) => a[entry] - b[entry]));
    }
    if (type == "date") {
      setEmployees(
        [...employees].sort(
          (a, b) => new Date(a[entry]).getTime() - new Date(b[entry]).getTime()
        )
      );
    }
  };

  // Try in descending order
  const handleDesc = (entry, type) => {
    if (type == "string") {
      setEmployees(
        [...employees].sort((a, b) => b[entry].localeCompare(a[entry]))
      );
    }
    if (type == "number") {
      setEmployees([...employees].sort((a, b) => b[entry] - a[entry]));
    }
    if (type == "date") {
      setEmployees(
        [...employees].sort(
          (a, b) => new Date(b[entry]).getTime() - new Date(a[entry]).getTime()
        )
      );
    }
  };

  return (
    <div id="employee-div" className="container">
      <h1>Current Employees</h1>
      <div className="header">
        <div>
          Show
          <select name="entries" onChange={(e) => setEntries(e.target.value)}>
            <option value="4">4</option>
            <option value="6">6</option>
            <option value="8">8</option>
            <option value="10">10</option>
          </select>
          entries
        </div>
        <div>
          Search:
          <input type="text" onChange={(e) => handleSearchValue(e)} />
        </div>
      </div>

      {/* Utilisation du composant enfant EmployeeTable */}
      <EmployeeTable
        employees={handlePage()}
        handleAsc={handleAsc}
        handleDesc={handleDesc}
      />
      <div className="footer">
        <p className="color-dark">
          Showing {(pagination - 1) * entries + 1} to {employees.length} of{" "}
          {employees.length} entries
        </p>
        <NavLink to="/home">Home</NavLink>
        <div className="flex color-light">
          <span onClick={() => handlePrevious()}>Previous</span>
          <p className="pagination color-dark">{pagination} </p>
          <span onClick={() => handleNext()}>Next</span>
        </div>
      </div>
    </div>
  );
}
