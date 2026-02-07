import React, { useState } from "react";

const ManageUser = () => {
  const [search, setSearch] = useState("");
  const students = [
    { id: 1, name: "Ankit Sangroula", email: "ankit@gmail.com", className: "BSc CSIT", roll: 12 },
    { id: 2, name: "Sita Regmi", email: "sita@gmail.com", className: "BCA", roll: 7 },
    { id: 3, name: "Rajesh Thapa", email: "rajesh@gmail.com", className: "BSc CSIT", roll: 9 },
  ];

  return (
    <div className="w-full min-h-screen bg-gray-100 p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-5">
        <h2 className="text-2xl font-semibold text-gray-800">
          Student Management
        </h2>
        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          Add Student
        </button>
      </div>

      {/* Search */}
      <input
        type="text"
        placeholder="Search student..."
        className="w-full mb-4 px-4 py-2 border rounded focus:outline-none focus:ring focus:ring-blue-300"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* Table */}
      <div className="bg-white w-full rounded shadow overflow-x-auto">
        <table className="w-full text-left">
          <thead className="bg-gray-800 text-white">
            <tr>
              <th className="p-3">#</th>
              <th className="p-3">Name</th>
              <th className="p-3">Email</th>
              <th className="p-3">Class</th>
              <th className="p-3">Roll</th>
              <th className="p-3 text-center">Action</th>
            </tr>
          </thead>

          <tbody>
            {students.map((student, index) => (
              <tr key={student.id} className="border-b hover:bg-gray-50">
                <td className="p-3">{index + 1}</td>
                <td className="p-3 font-medium">{student.name}</td>
                <td className="p-3">{student.email}</td>
                <td className="p-3">{student.className}</td>
                <td className="p-3">{student.roll}</td>
                <td className="p-3 text-center space-x-2">
                  <button className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600">
                    Edit
                  </button>
                  <button className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageUser;
