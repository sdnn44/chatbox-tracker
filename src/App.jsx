import "./App.css";
import { Navbar } from "./components/Navbar/Navbar";
import { Home } from "./pages/Home/Home";
function App() {
  return (
    <div className="flex justify-center items-center w-full flex-col gap-10">
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
