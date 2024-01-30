import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretUp, faCaretDown } from "@fortawesome/free-solid-svg-icons";

// Component table display
export default function EmployeeTable({
  employees,
  handleAsc,
  handleDesc})
 {
  return (
    <table className="display">
      <thead>
        <tr>
          <th>
            <span>First Name</span>
            <span className="icons">
              <FontAwesomeIcon
                icon={faCaretUp}
                onClick={() => handleAsc("firstName", "string")}
              />
              <FontAwesomeIcon
                icon={faCaretDown}
                onClick={() => handleDesc("firstName", "string")}
              />
            </span>
          </th>
          <th>
            <span>Last Name</span>
            <span className="icons">
              <FontAwesomeIcon
                icon={faCaretUp}
                onClick={() => handleAsc("lastName", "string")}
              />
              <FontAwesomeIcon
                icon={faCaretDown}
                onClick={() => handleDesc("lastName", "string")}
              />
            </span>
          </th>
          <th>
            <span>Start Date</span>
            <span className="icons">
              <FontAwesomeIcon
                icon={faCaretUp}
                onClick={() => handleAsc("start", "date")}
              />
              <FontAwesomeIcon
                icon={faCaretDown}
                onClick={() => handleDesc("start", "date")}
              />
            </span>
          </th>
          <th>
            <span>Departement</span>
            <span className="icons">
              <FontAwesomeIcon
                icon={faCaretUp}
                onClick={() => handleAsc("department", "string")}
              />
              <FontAwesomeIcon
                icon={faCaretDown}
                onClick={() => handleDesc("department", "string")}
              />
            </span>
          </th>
          <th>
            <span>Date of Birth</span>
            <span className="icons">
              <FontAwesomeIcon
                icon={faCaretUp}
                onClick={() => handleAsc("birth", "date")}
              />
              <FontAwesomeIcon
                icon={faCaretDown}
                onClick={() => handleDesc("birth", "date")}
              />
            </span>
          </th>
          <th>
            <span>Street</span>
            <span className="icons">
              <FontAwesomeIcon
                icon={faCaretUp}
                onClick={() => handleAsc("street", "string")}
              />
              <FontAwesomeIcon
                icon={faCaretDown}
                onClick={() => handleDesc("street", "string")}
              />
            </span>
          </th>
          <th>
            <span>City</span>
            <span className="icons">
              <FontAwesomeIcon
                icon={faCaretUp}
                onClick={() => handleAsc("city", "string")}
              />
              <FontAwesomeIcon
                icon={faCaretDown}
                onClick={() => handleDesc("city", "string")}
              />
            </span>
          </th>
          <th>
            <span>State</span>
            <span className="icons">
              <FontAwesomeIcon
                icon={faCaretUp}
                onClick={() => handleAsc("state", "string")}
              />
              <FontAwesomeIcon
                icon={faCaretDown}
                onClick={() => handleDesc("state", "string")}
              />
            </span>
          </th>
          <th>
            <span>Zip Code</span>
            <span className="icons">
              <FontAwesomeIcon
                icon={faCaretUp}
                onClick={() => handleAsc("code", "number")}
              />
              <FontAwesomeIcon
                icon={faCaretDown}
                onClick={() => handleDesc("code", "number")}
              />
            </span>
          </th>
        </tr>
      </thead>

      {employees.length == 0 ? (
        <tbody className="noData">No data available in table</tbody>
      ) : (
        employees.map((employee, index) => (
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
  );
}
