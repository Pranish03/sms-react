import { useState } from "react";
import { FiEdit, FiTrash2, FiEye } from "react-icons/fi";
import Button from "../../components/Button";

const ManageStudent = () => {
  const [search, setSearch] = useState("");

  const students = [
    {
      id: 1,
      name: "Ankit Sangroula",
      email: "ankit@gmail.com",
      department: "BSc CSIT",
      semester: "2nd",
      roll: 12,
    },
    {
      id: 2,
      name: "Sita Regmi",
      email: "sita@gmail.com",
      department: "BCA",
      semester: "4th",
      roll: 7,
    },
    {
      id: 3,
      name: "Rajesh Thapa",
      email: "rajesh@gmail.com",
      department: "BSc CSIT",
      semester: "2nd",
      roll: 9,
    },
  ];

  return (
    <div className="w-full min-h-screen p-6">
      <h2 className="text-3xl font-bold text-gray-800 mb-10">Students</h2>

      <div className="flex justify-between items-center mb-5">
        <input
          type="text"
          placeholder="Search"
          className="w-75 mb-4 px-4 py-2.5 text-base border border-black/20 rounded-lg focus:outline-none focus:ring-1 focus:ring-green-600 focus:border-green-600"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <Button>Add Student</Button>
      </div>

      <div className="bg-white w-full overflow-x-auto">
        <table className="w-full text-left text-gray-800">
          <thead className="border-y border-black/50">
            <tr>
              <th className="p-3">S.N.</th>
              <th className="p-3">Name</th>
              <th className="p-3">Roll No.</th>
              <th className="p-3">Email</th>
              <th className="p-3">Department</th>
              <th className="p-3">Semester</th>
              <th className="p-3 text-center">Actions</th>
            </tr>
          </thead>

          <tbody>
            {students.map((student, index) => (
              <tr key={student.id} className="border-b border-black/50">
                <td className="p-3">{index + 1}</td>
                <td className="p-3 font-medium">{student.name}</td>
                <td className="p-3">{student.roll}</td>
                <td className="p-3">{student.email}</td>
                <td className="p-3">{student.department}</td>
                <td className="p-3">{student.semester}</td>
                <td className="p-3 flex items-center justify-center gap-4">
                  <button className="cursor-pointer p-2 rounded-lg bg-green-600 text-white">
                    <FiEye />
                  </button>

                  <button className="cursor-pointer p-2 rounded-lg bg-green-600 text-white">
                    <FiEdit />
                  </button>

                  <button className="cursor-pointer p-2 rounded-lg bg-red-600 text-white">
                    <FiTrash2 />
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

export default ManageStudent;
