import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretUp, faCaretDown } from "@fortawesome/free-solid-svg-icons";

// Component table display
export default function EmployeeTable({ employees, handleSortElement }) {
  return (
    <table className="display">
      <thead>
        <tr>
          <th id="firstName">
            <span>First Name</span>
            <span className="icons">
              <FontAwesomeIcon
                icon={faCaretUp}
                onClick={() => handleSortElement("firstName", "string","asc")}
              />
              <FontAwesomeIcon
                icon={faCaretDown}
                onClick={() => handleSortElement("firstName", "string","desc")}
              />
            </span>
          </th>
          <th id="lastName">
            <span>Last Name</span>
            <span className="icons">
              <FontAwesomeIcon
                icon={faCaretUp}
                onClick={() => handleSortElement("lastName", "string","asc")}
              />
              <FontAwesomeIcon
                icon={faCaretDown}
                onClick={() => handleSortElement("lastName", "string","desc")}
              />
            </span>
          </th>
          <th id="start">
            <span>Start Date</span>
            <span className="icons">
              <FontAwesomeIcon
                icon={faCaretUp}
                onClick={() => handleSortElement("start", "date","asc")}
              />
              <FontAwesomeIcon
                icon={faCaretDown}
                onClick={() => handleSortElement("start", "date","desc")}
              />
            </span>
          </th>
          <th id="department">
            <span>Departement</span>
            <span className="icons">
              <FontAwesomeIcon
                icon={faCaretUp}
                onClick={() => handleSortElement("department", "string","asc")}
              />
              <FontAwesomeIcon
                icon={faCaretDown}
                onClick={() => handleSortElement("department", "string","desc")}
              />
            </span>
          </th>
          <th id="birth">
            <span>Date of Birth</span>
            <span className="icons">
              <FontAwesomeIcon
                icon={faCaretUp}
                onClick={() => handleSortElement("birth", "date","asc")}
              />
              <FontAwesomeIcon
                icon={faCaretDown}
                onClick={() => handleSortElement("birth", "date","desc")}
              />
            </span>
          </th>
          <th id="street">
            <span>Street</span>
            <span className="icons">
              <FontAwesomeIcon
                icon={faCaretUp}
                onClick={() => handleSortElement("street", "string","asc")}
              />
              <FontAwesomeIcon
                icon={faCaretDown}
                onClick={() => handleSortElement("street", "string","desc")}
              />
            </span>
          </th>
          <th id="city">
            <span>City</span>
            <span className="icons">
              <FontAwesomeIcon
                icon={faCaretUp}
                onClick={() => handleSortElement("city", "string","asc")}
              />
              <FontAwesomeIcon
                icon={faCaretDown}
                onClick={() => handleSortElement("city", "string","desc")}
              />
            </span>
          </th>
          <th id="state">
            <span>State</span>
            <span className="icons">
              <FontAwesomeIcon
                icon={faCaretUp}
                onClick={() => handleSortElement("state", "string","asc")}
              />
              <FontAwesomeIcon
                icon={faCaretDown}
                onClick={() => handleSortElement("state", "string","desc")}
              />
            </span>
          </th>
          <th id="code">
            <span>Zip Code</span>
            <span className="icons">
              <FontAwesomeIcon
                icon={faCaretUp}
                onClick={() => handleSortElement("code", "number","asc")}
              />
              <FontAwesomeIcon
                icon={faCaretDown}
                onClick={() => handleSortElement("code", "number","desc")}
              />
            </span>
          </th>
        </tr>
      </thead>

      <tbody>
        {employees.length == 0 ? (
          <tr className="noData">
            <td colSpan="9" style={{ textAlign: "center" }}>
              No data available in table
            </td>
          </tr>
        ) : (
          employees.map((employee, index) => (
            <tr key={index}>
              <td headers="firstName">{employee.firstName}</td>
              <td headers="lastName">{employee.lastName}</td>
              <td headers="start">
                {new Date(employee.start).toLocaleDateString("fr-FR")}
              </td>
              <td headers="department">{employee.department}</td>
              <td headers="birth">
                {new Date(employee.birth).toLocaleDateString("fr-FR")}
              </td>
              <td headers="steet">{employee.street}</td>
              <td headers="city">{employee.city}</td>
              <td headers="state">{employee.state}</td>
              <td headers="code">{employee.code}</td>
            </tr>
          ))
        )}
      </tbody>
    </table>
  );
}
