import { BrowserRouter as Router } from "react-router-dom";
import Routers from "./Routers/Routers";
import AuthProvider from "./context/AuthContext/AuthContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <Router basename="">
          <Routers />
        </Router>
      </AuthProvider>
    </QueryClientProvider>
  );
}

export default App;
