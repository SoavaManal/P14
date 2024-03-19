import { useState } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import EmployeeTable from "../composant/EmployeeTable";
import employeesMock from "../data/Employees";

export default function Employee() {
  let employeesTest = useSelector((state) => state.employeeReducer.employee);

  if (employeesTest.length === 0) {
    employeesTest = employeesMock;
  }
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
      employeesFiltred = employees.filter((employee) =>
        [
          employee.firstName,
          employee.lastName,
          new Date(employee.start).toLocaleDateString("fr-FR"),
          employee.department,
          new Date(employee.birth).toLocaleDateString("fr-FR"),
          employee.street,
          employee.city,
          employee.state,
          employee.code,
        ].some((value) => value.toLowerCase().includes(search.toLowerCase()))
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

  // Sort function
  const handleSortElement = (fieldName, type, sortType) => {
    if (type == "string") {
      setEmployees(
        [...employees].sort((a, b) =>
          sortType == "desc"
            ? b[fieldName].localeCompare(a[fieldName])
            : a[fieldName].localeCompare(b[fieldName])
        )
      );
    }
    if (type == "number") {
      setEmployees(
        [...employees].sort((a, b) =>
          sortType == "desc"
            ? b[fieldName] - a[fieldName]
            : a[fieldName] - b[fieldName]
        )
      );
    }
    if (type == "date") {
      setEmployees(
        [...employees].sort((a, b) =>
          sortType == "desc"
            ? new Date(b[fieldName]).getTime() -
              new Date(a[fieldName]).getTime()
            : new Date(a[fieldName]).getTime() -
              new Date(b[fieldName]).getTime()
        )
      );
    }
  };
  return (
    <div id="employee-div" className="container">
      <h1>Current Employees</h1>
      <div className="header">
        <div className="flex">
          <p>Show</p>
          <div>
            <label htmlFor="entries" style={{ display: "none" }}>
              Number of Entries:
            </label>
            <select
              name="entries"
              id="entries"
              onChange={(e) => setEntries(e.target.value)}
            >
              <option value="4">4</option>
              <option value="6">6</option>
              <option value="8">8</option>
              <option value="10">10</option>
            </select>
          </div>
          <p>entries</p>
        </div>
        <div className="flex">
          <label htmlFor="searchInut">Search:</label>
          <input
            type="text"
            id="searchInput"
            onChange={(e) => handleSearchValue(e)}
          />
        </div>
      </div>

      {/* Utilisation du composant enfant EmployeeTable */}
      <EmployeeTable
        employees={handlePage()}
        handleSortElement={handleSortElement}
      />
      <div className="footer">
        <p className="color-dark">
          Showing {(pagination - 1) * entries + 1} to{" "}
          {Math.min(pagination * entries, employees.length)} of{" "}
          {employees.length} entries
        </p>
        <NavLink to="/home">Home</NavLink>
        <div className="flex color-light">
          <span style={{ cursor: "pointer" }} onClick={() => handlePrevious()}>
            Previous
          </span>
          <p className="pagination color-dark">{pagination} </p>
          <span style={{ cursor: "pointer" }} onClick={() => handleNext()}>
            Next
          </span>
        </div>
      </div>
    </div>
  );
}
