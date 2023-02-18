import "./App.css";
import AllRoutes from "./components/Routes/AllRoutes";
import Navbar from "./components/Home/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <AllRoutes />
    </div>
  );
}

export default App;
