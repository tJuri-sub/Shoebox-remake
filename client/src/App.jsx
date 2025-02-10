import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/landingPage";
import Header from "./components/header";

function App() {
  return (
    <div className="bg-primary font-roboto  h-dvh  text-white">
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
      </Routes>
    </div>
  );
}

export default App;
