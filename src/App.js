import "./App.css";
import Navbar from "./components/nav/Navbar";
import ToDoList from "./components/body/ToDoList";

function App() {
  return (
    <div className="App">
      <Navbar />

      <ToDoList />
    </div>
  );
}

export default App;
