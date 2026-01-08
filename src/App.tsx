import "./App.css";
import { Routes, Route, Outlet } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./components/Layout";
import UiUxService from "./pages/services/UiUxService";
import NoPage from "./pages/NoPage";
import MobileService from "./pages/services/MobileService";
import WebService from "./pages/services/WebService";

function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/services" element={<Outlet />}>
            <Route path="ui-ux" element={<UiUxService />} />
            <Route path="mobile-development" element={<MobileService />} />
            <Route path="web-development" element={<WebService />}  />
          </Route>
        </Route>
        <Route path="*" element={<NoPage />} />
      </Routes>
    </>
  );
}

export default App;
