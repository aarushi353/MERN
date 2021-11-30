import ToDo from "./components/ToDo";
import Heading from "./components/Heading";

function App() {
  return (
    <div>
           <Heading />
           <ToDo text="Learn React" />
           <ToDo text="Learn Python" />
           <ToDo text="Learn Django" />
    </div>
  );
}

export default App;
