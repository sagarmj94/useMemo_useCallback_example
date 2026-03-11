import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home-container">
      <h1 className="main-heading">React Hooks Learning</h1>

      <p className="sub-heading">
        Explore important React Hooks with examples and explanations.
      </p>

      <div className="hooks-list">
        <Link to="/usememo" className="hook-card">
          <h3>useMemo</h3>
          <p>Optimize expensive calculations using memoization.</p>
        </Link>

        <Link to="/usecallback" className="hook-card">
          <h3>useCallback</h3>
          <p>Memoize functions to prevent unnecessary re-renders.</p>
        </Link>

        {/* <Link to="/usestate" className="hook-card">
          <h3>useState</h3>
          <p>Manage component state easily in functional components.</p>
        </Link>  */}
      </div>
    </div>
  );
}

export default Home;
