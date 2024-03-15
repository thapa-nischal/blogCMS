import { Route, Routes } from "react-router-dom";
import { Login, Signup } from "./pages";
import Home from "./pages/Home";
import CreateBlog from "./pages/CreateBlog";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/createblog" element={<CreateBlog />} />
        {/* <Route path="/quill" element={<Quill />} /> */}
      </Routes>
    </div>
  );
}

export default App;