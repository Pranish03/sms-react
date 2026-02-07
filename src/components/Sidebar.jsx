import { Link } from "react-router-dom";
import axios from "axios";

const Sidebar = ({ items }) => {
  const handleLogout = async () => {
    try {
      await axios.post(
        `${import.meta.env.VITE_API_URL}/logout`,
        {},
        { withCredentials: true },
      );

      window.location.href = "/";
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <aside className="min-w-80 h-screen bg-white text-gray-800 p-4 border-r border-gray-200">
      <div className="mb-6">
        <h1 className="text-4xl text-green-600 font-black tracking-wide pl-4">
          S.M.S.
        </h1>
      </div>

      <div className="flex flex-col justify-between h-[93%]">
        <ul className="space-y-2">
          {items.map((item) => (
            <li key={item.path}>
              <Link
                to={item.path}
                className="block text-lg px-4 py-3 rounded-md hover:bg-green-600/10 hover:text-green-600 transition-colors ease-linear"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="cursor-pointer block font-semibold text-lg px-4 py-3">
          <span
            onClick={handleLogout}
            className="hover:text-green-600 transition-colors ease-linear"
          >
            Logout
          </span>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
