import { Link } from "react-router-dom";

const Sidebar = ({ items }) => {
  return (
    <aside>
      <ul>
        {items.map((item) => (
          <li key={item.path}>
            <Link to={item.path}>{item.label}</Link>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
