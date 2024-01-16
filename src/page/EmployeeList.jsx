import { useState } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faCaretUp } from "@fortawesome/free-solid-svg-icons";

// const employeesTest = [
//   {
//     firstName: "Manal",
//     lastName: "Jaber",
//     birth: "1991-07-31",
//     start: "2022-11-21",
//     street: "abc",
//     city: "X",
//     state: "AL",
//     code: "123",
//     department: "Sales",
//   },
//   {
//     firstName: "Ilyan",
//     lastName: "Soava",
//     birth: "2000-02-06",
//     start: "2021-11-23",
//     street: "abc",
//     city: "Z",
//     state: "BS",
//     code: "111",
//     department: "Marketing",
//   },
//   {
//     firstName: "George",
//     lastName: "Viorel",
//     birth: "1983-10-14",
//     start: "2018-09-01",
//     street: "cfg",
//     city: "Y",
//     state: "LM",
//     code: "456",
//     department: "Legal",
//   },
//   {
//     firstName: "Mathilde",
//     lastName: "Chablom",
//     birth: "1983-07-21",
//     start: "2015-10-05",
//     street: "abc",
//     city: "U",
//     state: "AL",
//     code: "356",
//     department: "Sales",
//   },
//   {
//     firstName: "Laetitia",
//     lastName: "Alex",
//     birth: "1980-06-05",
//     start: "2020-11-31",
//     street: "mlc",
//     city: "W",
//     state: "BH",
//     code: "165",
//     department: "Sales",
//   },
// ];

export default function Employee() {
  const employeesTest =
    useSelector((state) => state.employeeReducer.employee) || [];
  const [employees, setEmployees] = useState(employeesTest);
  const [entries, setEntries] = useState(2);
  const [pagination, setPagination] = useState(1);
  const [search, setSearch] = useState("");

  const handleSearchValue = (e) => {
    setSearch(e.target.value);
  };

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

  const handlePrevious = () => {
    if (pagination > 1) {
      setPagination(pagination - 1);
    }
  };

  const handleNext = () => {
    if (employees.length > entries * pagination) {
      setPagination(pagination + 1);
    }
  };

  console.log([...employees]);
  const handleTryCrs = (entry, type) => {
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
  const handleTryDesc = (entry, type) => {
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
      <table className="display">
        <thead>
          <tr>
            <th>
              <span>First Name</span>
              <span className="icons">
                <FontAwesomeIcon
                  icon={faCaretUp}
                  onClick={() => handleTryCrs("firstName", "string")}
                />
                <FontAwesomeIcon
                  icon={faCaretDown}
                  onClick={() => handleTryDesc("firstName", "string")}
                />
              </span>
            </th>
            <th>
              <span>Last Name</span>
              <span className="icons">
                <FontAwesomeIcon
                  icon={faCaretUp}
                  onClick={() => handleTryCrs("lastName", "string")}
                />
                <FontAwesomeIcon
                  icon={faCaretDown}
                  onClick={() => handleTryDesc("lastName", "string")}
                />
              </span>
            </th>
            <th>
              <span>Start Date</span>
              <span className="icons">
                <FontAwesomeIcon
                  icon={faCaretUp}
                  onClick={() => handleTryCrs("start", "date")}
                />
                <FontAwesomeIcon
                  icon={faCaretDown}
                  onClick={() => handleTryDesc("start", "date")}
                />
              </span>
            </th>
            <th>
              <span>Departement</span>
              <span className="icons">
                <FontAwesomeIcon
                  icon={faCaretUp}
                  onClick={() => handleTryCrs("department", "string")}
                />
                <FontAwesomeIcon
                  icon={faCaretDown}
                  onClick={() => handleTryDesc("department", "string")}
                />
              </span>
            </th>
            <th>
              <span>Date of Birth</span>
              <span className="icons">
                <FontAwesomeIcon
                  icon={faCaretUp}
                  onClick={() => handleTryCrs("birth", "date")}
                />
                <FontAwesomeIcon
                  icon={faCaretDown}
                  onClick={() => handleTryDesc("birth", "date")}
                />
              </span>
            </th>
            <th>
              <span>Street</span>
              <span className="icons">
                <FontAwesomeIcon
                  icon={faCaretUp}
                  onClick={() => handleTryCrs("street", "string")}
                />
                <FontAwesomeIcon
                  icon={faCaretDown}
                  onClick={() => handleTryDesc("street", "string")}
                />
              </span>
            </th>
            <th>
              <span>City</span>
              <span className="icons">
                <FontAwesomeIcon
                  icon={faCaretUp}
                  onClick={() => handleTryCrs("city", "string")}
                />
                <FontAwesomeIcon
                  icon={faCaretDown}
                  onClick={() => handleTryDesc("city", "string")}
                />
              </span>
            </th>
            <th>
              <span>State</span>
              <span className="icons">
                <FontAwesomeIcon
                  icon={faCaretUp}
                  onClick={() => handleTryCrs("state", "string")}
                />
                <FontAwesomeIcon
                  icon={faCaretDown}
                  onClick={() => handleTryDesc("state", "string")}
                />
              </span>
            </th>
            <th>
              <span>Zip Code</span>
              <span className="icons">
                <FontAwesomeIcon
                  icon={faCaretUp}
                  onClick={() => handleTryCrs("code", "number")}
                />
                <FontAwesomeIcon
                  icon={faCaretDown}
                  onClick={() => handleTryDesc("code", "number")}
                />
              </span>
            </th>
          </tr>
        </thead>

        {handlePage().length == 0 ? (
          <tbody className="noData">No data available in table</tbody>
        ) : (
          handlePage().map((employee, index) => (
            <tbody>
              <tr key={index}>
                <td>{employee.firstName}</td>
                <td>{employee.lastName}</td>
                <td>{new Date(employee.start).toLocaleDateString("fr-FR")}</td>
                <td>{employee.department}</td>
                <td>{new Date(employee.birth).toLocaleDateString("fr-FR")}</td>
                <td>{employee.street}</td>
                <td>{employee.city}</td>
                <td>{employee.state}</td>
                <td>{employee.code}</td>
              </tr>
            </tbody>
          ))
        )}
      </table>
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
