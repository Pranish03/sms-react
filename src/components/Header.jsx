import { Link, useNavigate } from "react-router-dom";
import Button from "./Button";

export default function Header({ user }) {
  const navigate = useNavigate();

  return (
    <header className="w-300 mx-auto flex justify-between items-center px-2 py-4">
      <h1
        className="text-4xl font-black text-green-600 cursor-pointer"
        onClick={() => navigate("")}
      >
        S.M.S.
      </h1>

      {user ? (
        <nav className="flex items-center gap-6 text-base">
          <Link to="/login">Login</Link>
          <Link to="/signup">
            <Button>Signup as admin</Button>
          </Link>
        </nav>
      ) : (
        <Link to="/signup">
          <Button>Signup as admin</Button>
        </Link>
      )}
    </header>
  );
}
