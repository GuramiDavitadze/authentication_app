import { BrowserRouter as Router } from "react-router-dom";
import Routers from "./Routers/Routers";
import AuthProvider from "./context/AuthContext/AuthContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <Router basename="">
        <AuthProvider>
          <Routers />
        </AuthProvider>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
