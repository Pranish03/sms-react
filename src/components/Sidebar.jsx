import { Link } from "react-router-dom";

const Sidebar = ({ items }) => {
  return (
    <aside className="min-w-80 h-screen bg-white text-gray-800 p-4 border-r border-gray-200">
      <div className="mb-6">
        <h1 className="text-4xl text-green-600 font-black tracking-wide pl-4">
          S.M.S.
        </h1>
      </div>

      <ul className="space-y-2">
        {items.map((item) => (
          <li key={item.path}>
            <Link
              to={item.path}
              className="block text-lg px-4 py-3 rounded-md hover:bg-green-600/10 hover:text-green-600 transition"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
