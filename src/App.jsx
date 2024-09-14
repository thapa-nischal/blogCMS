import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import {
  Login,
  Signup,
  Home,
  CreateBlog,
  LandingPage,
  FullBlogView,
  UserProfile,
} from "./pages";
import { Navbar, Footer } from "./components";
import { Toaster } from "react-hot-toast";

function AppContent() {
  const location = useLocation();
  const hideNavbar = location.pathname === "/createblog";

  return (
    <>
      <Toaster position="bottom-center" reverseOrder={false} />
      {!hideNavbar && <Navbar />}
      <div className="pages">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/createblog" element={<CreateBlog />} />
          <Route path="/blog/:id" element={<FullBlogView />} />
          <Route path="/user/:username" element={<UserProfile />} />
        </Routes>
      </div>
      {!hideNavbar && <Footer />}
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
