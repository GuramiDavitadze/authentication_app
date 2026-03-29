import { BrowserRouter as Router } from "react-router-dom";
import Routers from "./Routers/Routers";
import AuthProvider from "./context/AuthContext/AuthContext";

function App() {
  return (
    <AuthProvider>
      <Router basename="">
        <Routers />
      </Router>
    </AuthProvider>
  );
}

export default App;
