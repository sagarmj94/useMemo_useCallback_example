import "./App.css";
import Home from "./Home";
import UseCallbackPage from "./UseCallbackPage";
import UseMemoDetails from "./useMemoAnduseCallback";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/usememo" element={<UseMemoDetails />} />
        <Route path="/usecallback" element={<UseCallbackPage />} />
        {/* <Route path="/usestate" element={<UseStatePage />} />  */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
