import { useState } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";
const employeesTest = [
  {
    firstName: "Manal",
    lastName: "Jaber",
    birth: "31/07/1991",
    start: "31/11/2022",
    street: "abc",
    city: "X",
    state: "AL",
    code: "123",
    department: "Sales",
  },
  {
    firstName: "Ilyan",
    lastName: "Soava",
    birth: "06/02/2000",
    start: "31/12/2021",
    street: "abc",
    city: "Z",
    state: "BS",
    code: "111",
    department: "Marketing",
  },
  {
    firstName: "George",
    lastName: "Viorel",
    birth: "14/10/1983",
    start: "01/09/2018",
    street: "cfg",
    city: "Y",
    state: "LM",
    code: "456",
    department: "Legal",
  },
  {
    firstName: "Mathilde",
    lastName: "Chablom",
    birth: "21/07/1985",
    start: "31/11/2015",
    street: "abc",
    city: "U",
    state: "AL",
    code: "356",
    department: "Sales",
  },
  {
    firstName: "Laetitia",
    lastName: "Alex",
    birth: "05/06/1980",
    start: "31/11/2020",
    street: "mlc",
    city: "W",
    state: "BH",
    code: "165",
    department: "Sales",
  },
];

export default function Employee() {
  // const employees=useSelector((state) => state.employeeReducer.employee) || []
  const employees = employeesTest;
  console.log(employees);
  const [entries, setEntries] = useState(2);
  const [pagination, setPagination] = useState(1);

  const handlePage = () => {
    console.log(employees.slice((pagination-1)*entries,pagination*entries))
    console.log((pagination-1)*entries,pagination*entries)
    return employees.slice((pagination-1)*entries,pagination*entries)
  };
  const handlePrevious=()=>{
    if(pagination>1){
      setPagination(pagination-1)
    }
  }
  const handleNext=()=>{
    if(employees.length>(entries*pagination)){
      setPagination(pagination+1)
    }
  }
  return (
    <div id="employee-div" className="container">
      <h1>Current Employees</h1>
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
      <table className="display">
        <thead>
          <tr>
            <th>
              First Name
              <span>
                <FontAwesomeIcon icon={faChevronUp} />
                <FontAwesomeIcon icon={faChevronDown} />
              </span>
            </th>
            <th>
              Last Name
              <span>
                <FontAwesomeIcon icon={faChevronUp} />
                <FontAwesomeIcon icon={faChevronDown} />
              </span>
            </th>
            <th>
              Start Date
              <span>
                <FontAwesomeIcon icon={faChevronUp} />
                <FontAwesomeIcon icon={faChevronDown} />
              </span>
            </th>
            <th>
              Departement
              <span>
                <FontAwesomeIcon icon={faChevronUp} />
                <FontAwesomeIcon icon={faChevronDown} />
              </span>
            </th>
            <th>
              Date of Birth
              <span>
                <FontAwesomeIcon icon={faChevronUp} />
                <FontAwesomeIcon icon={faChevronDown} />
              </span>
            </th>
            <th>
              Street
              <span>
                <FontAwesomeIcon icon={faChevronUp} />
                <FontAwesomeIcon icon={faChevronDown} />
              </span>
            </th>
            <th>
              City
              <span>
                <FontAwesomeIcon icon={faChevronUp} />
                <FontAwesomeIcon icon={faChevronDown} />
              </span>
            </th>
            <th>
              State
              <span>
                <FontAwesomeIcon icon={faChevronUp} />
                <FontAwesomeIcon icon={faChevronDown} />
              </span>
            </th>
            <th>
              Zip Code
              <span>
                <FontAwesomeIcon icon={faChevronUp} />
                <FontAwesomeIcon icon={faChevronDown} />
              </span>
            </th>
          </tr>
        </thead>
        <tbody>
          {handlePage().map((employee, index) => (
            <tr key={index}>
              <td>{employee.firstName}</td>
              <td>{employee.lastName}</td>
              <td>{employee.start}</td>
              <td>{employee.department}</td>
              <td>{employee.birth}</td>
              <td>{employee.street}</td>
              <td>{employee.city}</td>
              <td>{employee.state}</td>
              <td>{employee.code}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="footer">
        <p>
          Showing {employees.indexOf(employees[0]) + 1} to {employees.length} of
          {employees.length} entries
        </p>
        <NavLink to="/home">Home</NavLink>
        <p>
          <span onClick={()=>handlePrevious()}>Previous</span>
          {pagination} 
          <span onClick={()=>handleNext()}>Next</span>
        </p>
      </div>
    </div>
  );
}
