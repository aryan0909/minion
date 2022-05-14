import "./App.css";
import ItemView from "./components/screens/ItemView";
import { courseData } from "./data";

const data = courseData[2];
function App() {
  return (
    <>
      <div className="App">
        <ItemView
          heading={data.Heading}
          dis50={data.dis50}
          discription={data.discription}
        />
      </div>
    </>
  );
}

export default App;
