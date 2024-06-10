import "./App.css";
import SearchBar from "./components/SearchBar";
import SinglePost from "./components/SinglePost";

function App() {
  return (
    <div className="flex justify-center items-center w-full flex-col gap-24">
      <SearchBar />
      <SinglePost />
    </div>
  );
}

export default App;
