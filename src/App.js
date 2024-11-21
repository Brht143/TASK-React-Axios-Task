import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Home from "./components/Home";
import Modal from "./components/Modal";
import Navbar from "./components/Navbar";
import PetDetail from "./components/PetDetail";
import PetItem from "./components/PetItem";
import PetList from "./components/PetList";

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client ={queryClient}>
    <div className="font-mono">
      <Navbar />
      <Home />
      <PetList />
      <PetDetail />
    </div>
    </QueryClientProvider>
  );
}

export default App;
