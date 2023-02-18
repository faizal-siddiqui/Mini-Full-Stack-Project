import "./App.css";
import AllRoutes from "./components/Routes/AllRoutes";
import Navbar from "./components/Home/Navbar";

function App() {
  // https://sore-yak-school-uniform.cyclic.app/users
  return (
    <div className="App">
      <Navbar />
      <AllRoutes />
    </div>
  );
}

export default App;
