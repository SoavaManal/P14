import { useState } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faCaretUp } from "@fortawesome/free-solid-svg-icons";
const employeesTest = [
  {
    firstName: "Manal",
    lastName: "Jaber",
    birth: "1991-07-31",
    start: "2022-11-21",
    street: "abc",
    city: "X",
    state: "AL",
    code: "123",
    department: "Sales",
  },
  {
    firstName: "Ilyan",
    lastName: "Soava",
    birth: "2000-02-06",
    start: "2021-11-23",
    street: "abc",
    city: "Z",
    state: "BS",
    code: "111",
    department: "Marketing",
  },
  {
    firstName: "George",
    lastName: "Viorel",
    birth: "1983-10-14",
    start: "2018-09-01",
    street: "cfg",
    city: "Y",
    state: "LM",
    code: "456",
    department: "Legal",
  },
  {
    firstName: "Mathilde",
    lastName: "Chablom",
    birth: "1983-07-21",
    start: "2015-10-05",
    street: "abc",
    city: "U",
    state: "AL",
    code: "356",
    department: "Sales",
  },
  {
    firstName: "Laetitia",
    lastName: "Alex",
    birth: "1980-06-05",
    start: "2020-11-31",
    street: "mlc",
    city: "W",
    state: "BH",
    code: "165",
    department: "Sales",
  },
];

export default function Employee() {
  // const employees=useSelector((state) => state.employeeReducer.employee) || []
  const [employees, setEmployees] = useState(employeesTest);
  const [entries, setEntries] = useState(2);
  const [pagination, setPagination] = useState(1);

  const handlePage = () => {
    return employees.slice((pagination - 1) * entries, pagination * entries);
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

  const handleTryCrs = (entry) => {
    if (typeof "entry" == "string") {
      setEmployees([
        ...employees.sort((a, b) => a[entry].localeCompare(b[entry])),
      ]);
    }
    if (typeof "entry" == "number") {
      setEmployees([...employees.sort((a, b) => a[entry] - b[entry])]);
    }
  };
  const handleTryDesc = (entry) => {
    if (typeof "entry" == "string") {
      setEmployees([
        ...employees.sort((a, b) => b[entry].localeCompare(a[entry])),
      ]);
    }
    if (typeof "entry" == "number") {
      setEmployees([...employees.sort((a, b) => b[entry] - a[entry])]);
    }
  };
 

  const handleSearch = (e) => {
    if (
      handlePage().filter(
        (employee) =>
          employee.firstName.toLowerCase().includes(e) ||
          employee.lastName.toLowerCase().includes(e) ||
          new Date(employee.start).toLocaleDateString("fr-FR").includes(e) ||
          employee.department.toLowerCase().includes(e) ||
          new Date(employee.birth).toLocaleDateString("fr-FR").includes(e) ||
          employee.street.toLowerCase().includes(e) ||
          employee.city.toLowerCase().includes(e) ||
          employee.state.toLowerCase().includes(e) ||
          employee.code.toLowerCase().includes(e)
      )
    )
      return handlePage().filter(
        (employee) =>
          employee.firstName.toLowerCase().includes(e) ||
          employee.lastName.toLowerCase().includes(e) ||
          new Date(employee.start).toLocaleDateString("fr-FR").includes(e) ||
          employee.department.toLowerCase().includes(e) ||
          new Date(employee.birth).toLocaleDateString("fr-FR").includes(e) ||
          employee.street.toLowerCase().includes(e) ||
          employee.city.toLowerCase().includes(e) ||
          employee.state.toLowerCase().includes(e) ||
          employee.code.toLowerCase().includes(e)
      );
    else {
      return "aucun résultat";
    }
  };

  return (
    <div id="employee-div" className="container">
      <h1>Current Employees</h1>
      <div className="header">
        <div>
          <p>
            Show
            <select name="entries" onChange={(e) => setEntries(e.target.value)}>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="10">10</option>
            </select>
            entries
          </p>
        </div>
        <div>
          <p>
            Search:
            <input type="text" onChange={e=>console.log(handleSearch(e.target.value))}/>
          </p>
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
                  onClick={() => handleTryCrs("firstName")}
                />
                <FontAwesomeIcon
                  icon={faCaretDown}
                  onClick={() => handleTryDesc("firstName")}
                />
              </span>
            </th>
            <th>
              <span>Last Name</span>
              <span className="icons">
                <FontAwesomeIcon
                  icon={faCaretUp}
                  onClick={() => handleTryCrs("lastName")}
                />
                <FontAwesomeIcon
                  icon={faCaretDown}
                  onClick={() => handleTryDesc("lastName")}
                />
              </span>
            </th>
            <th>
              <span>Start Date</span>
              <span className="icons">
                <FontAwesomeIcon
                  icon={faCaretUp}
                  onClick={() => handleTryCrs("start")}
                />
                <FontAwesomeIcon
                  icon={faCaretDown}
                  onClick={() => handleTryDesc("start")}
                />
              </span>
            </th>
            <th>
              <span>Departement</span>
              <span className="icons">
                <FontAwesomeIcon
                  icon={faCaretUp}
                  onClick={() => handleTryCrs("department")}
                />
                <FontAwesomeIcon
                  icon={faCaretDown}
                  onClick={() => handleTryDesc("department")}
                />
              </span>
            </th>
            <th>
              <span>Date of Birth</span>
              <span className="icons">
                <FontAwesomeIcon
                  icon={faCaretUp}
                  onClick={() => handleTryCrs("birth")}
                />
                <FontAwesomeIcon
                  icon={faCaretDown}
                  onClick={() => handleTryDesc("birth")}
                />
              </span>
            </th>
            <th>
              <span>Street</span>
              <span className="icons">
                <FontAwesomeIcon
                  icon={faCaretUp}
                  onClick={() => handleTryCrs("street")}
                />
                <FontAwesomeIcon
                  icon={faCaretDown}
                  onClick={() => handleTryDesc("street")}
                />
              </span>
            </th>
            <th>
              <span>City</span>
              <span className="icons">
                <FontAwesomeIcon
                  icon={faCaretUp}
                  onClick={() => handleTryCrs("city")}
                />
                <FontAwesomeIcon
                  icon={faCaretDown}
                  onClick={() => handleTryDesc("city")}
                />
              </span>
            </th>
            <th>
              <span>State</span>
              <span className="icons">
                <FontAwesomeIcon
                  icon={faCaretUp}
                  onClick={() => handleTryCrs("state")}
                />
                <FontAwesomeIcon
                  icon={faCaretDown}
                  onClick={() => handleTryDesc("state")}
                />
              </span>
            </th>
            <th>
              <span>Zip Code</span>
              <span className="icons">
                <FontAwesomeIcon
                  icon={faCaretUp}
                  onClick={() => handleTryCrs("code")}
                />
                <FontAwesomeIcon
                  icon={faCaretDown}
                  onClick={() => handleTryDesc("code")}
                />
              </span>
            </th>
          </tr>
        </thead>
        <tbody>
          {handlePage().map((employee, index) => (
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
          ))}
        </tbody>
      </table>
      <div className="footer">
        <p className="color-dark">
          Showing {(pagination - 1) * entries + 1} to {employees.length} of{" "}
          {employees.length} entries
        </p>
        <NavLink to="/home">Home</NavLink>
        <p className="flex color-light">
          <span onClick={() => handlePrevious()}>Previous</span>
          <p className="pagination color-dark">{pagination} </p>
          <span onClick={() => handleNext()}>Next</span>
        </p>
      </div>
    </div>
  );
}
