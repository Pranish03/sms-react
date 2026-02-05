import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <title>SMS</title>

      <div>Home</div>
      <button>
        <Link to="/dashboard">Go to dashboard</Link>

      </button>
    </>
  );
};

export default Home;
