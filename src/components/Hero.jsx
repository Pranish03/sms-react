import { Link } from "react-router-dom";
import Button from "./Button";

export default function Hero() {
  return (
    <main className="w-300 mx-auto px-2 py-20 text-center h-[calc(100vh-369px)]">
      <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 text-center">
        Welcome to S.M.S
      </h2>

      <p className="text-gray-600 text-lg mb-6">
        Manage students, teachers, attendance, and more all in one place.
        <br />
        Simplify your school management with ease and efficiency.
      </p>

      <Link to="/login">
        <Button>Get started</Button>
      </Link>
    </main>
  );
}
