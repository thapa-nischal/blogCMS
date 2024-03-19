import { Route, Routes } from "react-router-dom";
import { Login, Signup, Home, CreateBlog, LandingPage } from "./pages";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/createblog" element={<CreateBlog />} />
      </Routes>
    </div>
  );
}

export default App;