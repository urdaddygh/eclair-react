import { Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import Auth from "./pages/auth/Auth";

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={< Auth/>} />
        <Route path="/main/*" element={<MainPage />} />
      </Routes>
    </>
  );
}

export default App;
