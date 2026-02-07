import { Link } from "react-router-dom";

const Sidebar = ({ items }) => {
  return (
    <aside className="w-64 h-screen bg-blue-950 text-white p-4">
      
       {/* Logo */}
      <div className="mb-6 text-center">
        <h1 className="text-2xl font-bold tracking-wide">S.M.S</h1>
        
      </div>

      <ul className="space-y-2">
        {items.map((item) => (
          <li key={item.path}>
            <Link
              to={item.path}
              className="block px-4 py-6 rounded-md hover:bg-gray-700 transition"
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
