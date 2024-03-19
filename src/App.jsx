import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./page/Home";
import Employee from "./page/EmployeeList";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<Home />} />
        <Route path="/employee-list" element={<Employee />} />
      </Routes>
    </BrowserRouter>
  );
}
