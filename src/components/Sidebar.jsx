import { Link } from "react-router-dom";

const Sidebar = ({ items }) => {
  return (
    <aside className="w-64 h-screen bg-blue-950 text-white p-4">
      <ul className="space-y-2">
        {items.map((item) => (
          <li key={item.path}>
            <Link
              to={item.path}
              className="block px-4 py-2 rounded-md hover:bg-gray-700 transition"
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
