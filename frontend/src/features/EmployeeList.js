import React, { useState } from "react";

const EmployeeList = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredEmployeeList, setFilteredEmployeeList] = useState([]); // Replace with actual data
  const [role, setRole] = useState("SuperAdmin");
  const [showModal, setShowModal] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [selectedRole, setSelectedRole] = useState("User");

  const searchEmployee = () => {
    // Add filtering logic here
    console.log("Searching for:", searchTerm);
  };

  const gotoEmployeeDetail = (employee, e) => {
    e.preventDefault();
    console.log("Viewing:", employee);
  };

  const openAdminModal = (employee) => {
    setSelectedEmployee(employee);
    setSelectedRole(employee.role || "User");
    setShowModal(true);
  };

  const closeAdminModal = () => {
    setShowModal(false);
    setSelectedEmployee(null);
  };

  const saveAdminRole = (id, role) => {
    console.log("Save role:", role, "for ID:", id);
    closeAdminModal();
  };

  return (
    <div className="px-4 md:px-10 lg:px-20 mt-6">
      <h2 className="text-2xl font-bold text-center text-green-700 mb-6">Employee Data</h2>

      {/* Search Bar */}
      <div className="bg-white p-6 rounded-lg border border-green-500 shadow-md">
        <label htmlFor="searchItem" className="block font-semibold mb-2">
          Search by First Name
        </label>
        <div className="flex gap-2 max-w-md">
          <input
            type="text"
            id="searchItem"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search First Name"
            className="w-full px-4 py-2 border border-green-400 rounded focus:outline-none focus:ring-2 focus:ring-green-300"
          />
          <button
            onClick={searchEmployee}
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
          >
            Search
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto mt-8">
        <table className="min-w-full text-sm border border-green-500 text-left mx-auto">
          <thead className="bg-green-100 text-green-700">
            <tr>
              <th className="p-3 border border-green-500">ID</th>
              <th className="p-3 border border-green-500">Name</th>
              <th className="p-3 border border-green-500">DOJ</th>
              <th className="p-3 border border-green-500">USDT (Own)</th>
              <th className="p-3 border border-green-500">USDT (Referral)</th>
              <th className="p-3 border border-green-500">Total Business</th>
              <th className="p-3 border border-green-500">Details</th>
              {role === "SuperAdmin" && (
                <th className="p-3 border border-green-500">Admin Access</th>
              )}
            </tr>
          </thead>
          <tbody>
            {filteredEmployeeList.length === 0 ? (
              <tr>
                <td colSpan={role === "SuperAdmin" ? 8 : 7} className="p-4 text-center text-gray-500">
                  No employees found.
                </td>
              </tr>
            ) : (
              filteredEmployeeList.map((employee) => (
                <tr key={employee.employee_id} className="hover:bg-green-50">
                  <td className="p-3 border border-green-300">{employee.employee_id}</td>
                  <td className="p-3 border border-green-300">{employee.first_name}</td>
                  <td className="p-3 border border-green-300">{employee.date_of_joining}</td>
                  <td className="p-3 border border-green-300">{employee.total_own_usdt}</td>
                  <td className="p-3 border border-green-300">{employee.total_ref_usdt}</td>
                  <td className="p-3 border border-green-300">{employee.investment_through_referral}</td>
                  <td className="p-3 border border-green-300 text-center">
                    <a
                      href="#"
                      className="text-green-700 font-medium underline"
                      onClick={(e) => gotoEmployeeDetail(employee, e)}
                    >
                      View
                    </a>
                  </td>
                  {role === "SuperAdmin" && (
                    <td className="p-3 border border-green-300 text-center">
                      <button
                        onClick={() => openAdminModal(employee)}
                        className="bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700"
                      >
                        Set Role
                      </button>
                    </td>
                  )}
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Modal */}
      {showModal && (
        <>
          <div
            className="fixed inset-0 bg-black bg-opacity-40 z-40"
            onClick={closeAdminModal}
          ></div>

          <div className="fixed inset-0 z-50 flex items-center justify-center">
            <div className="bg-white rounded shadow-lg max-w-md w-full border border-green-600">
              <div className="flex justify-between items-center p-4 border-b border-green-300">
                <h6 className="text-lg font-semibold text-green-700">Set Admin Role</h6>
                <button onClick={closeAdminModal} className="text-xl">&times;</button>
              </div>
              <div className="p-4 space-y-3">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="role"
                    value="Admin"
                    checked={selectedRole === "Admin"}
                    onChange={(e) => setSelectedRole(e.target.value)}
                    className="mr-2"
                  />
                  Admin
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="role"
                    value="User"
                    checked={selectedRole === "User"}
                    onChange={(e) => setSelectedRole(e.target.value)}
                    className="mr-2"
                  />
                  User
                </label>
              </div>
              <div className="flex justify-end gap-2 p-4 border-t border-green-300">
                <button
                  onClick={closeAdminModal}
                  className="bg-gray-300 text-gray-800 px-3 py-1 rounded"
                >
                  Close
                </button>
                <button
                  onClick={() => saveAdminRole(selectedEmployee?.employee_id, selectedRole)}
                  className="bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700"
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default EmployeeList;
