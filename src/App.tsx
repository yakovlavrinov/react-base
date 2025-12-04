import { Link } from "./native/components/Router/Link";
import { Route } from "./native/components/Router/Route";
import { Router } from "./native/components/Router/Router";

function Home() {
  return <h2>Home page</h2>;
}

function About() {
  return <h2>About page</h2>;
}

function App() {
  return (
    <Router>
      <nav style={{ marginBottom: "16px" }}>
        <Link to="/">Home</Link> | <Link to="/about">About</Link>
      </nav>

      {/* Маршруты */}
      <Route path="/" component={<Home />} />
      <Route path="/about" component={<About />} />
    </Router>
  );
}

export default App

