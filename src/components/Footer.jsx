import { Link } from "react-router-dom";
import Button from "./Button";

export default function Footer() {
  return (
    <footer className="w-full bg-black/95 text-gray-300 py-10">
      <div className="w-300 mx-auto flex flex-col md:flex-row justify-between gap-8 px-2 border-b border-white/10 pb-10">
        <div>
          <h2 className="text-xl font-bold text-white mb-2">S.M.S.</h2>
          <p className="text-gray-300">
            Manage students, teachers, attendance, and more all in one place.
            <br />
            Simplify your school management with ease and efficiency.
          </p>
        </div>

        <div className="text-right">
          <h3 className="text-white font-semibold mb-2">Quick Links</h3>
          <ul className="space-y-1">
            <li>
              <Link
                to="/"
                className="hover:text-green-500 text-gray-300 transition"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/"
                className="hover:text-green-500 text-gray-300 transition"
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                to="/"
                className="hover:text-green-500 text-gray-300 transition"
              >
                About Us
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-2">Newsletter</h3>
          <div className="flex gap-2">
            <input
              className="bg-white px-4 py-2.5 text-base rounded-lg placeholder:text-gray-500 text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-600"
              type="text"
              placeholder="Enter email address"
            />
            <Button>Subscribe</Button>
          </div>
        </div>
      </div>

      <div className=" mt-6 pt-4 text-center text-gray-300 text-sm">
        © 2026 S.M.S. All rights reserved.
      </div>
    </footer>
  );
}
