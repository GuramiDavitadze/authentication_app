import { BrowserRouter as Router } from "react-router-dom";
import Routers from "./Routers/Routers";

function App() {
  return (
    <Router basename="">
      <Routers />
    </Router>
  );
}

export default App;
