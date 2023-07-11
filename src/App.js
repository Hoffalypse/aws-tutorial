import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import SiteFooter from "./components/common/SiteFooter";
import SiteNav from "./components/common/SiteNav";
import HomePage from "./components/home/HomePage";
import LoginPage from "./components/auth/LoginPage";
import RegisterPage from "./components/auth/RegisterPage";

function App() {
  console.log("app comp");
  return (
    <div>
      <SiteNav />
      <Routes>
        <Route path="*" element={<HomePage />} />
        <Route path="/" exact={true} element={<HomePage />} />
        <Route path="/login" exact={true} element={<LoginPage />} />
        <Route path="/register" exact={true} element={<RegisterPage />} />
        {/* <Route path='/contacts' element={<Contacts />} /> */}
      </Routes>
      <SiteFooter />
    </div>
  );
}

export default App;
