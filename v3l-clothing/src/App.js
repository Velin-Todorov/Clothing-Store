import Home from "./routes/home/HomeComponent";
import { Routes, Route, Outlet } from "react-router-dom";
import Navigation from "./routes/navigation/Navigation";
import Authentication from "./routes/authentication/Auth";
import Shop from "./routes/shop/ShopComponent";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="auth" element={<Authentication />} />
      </Route>
    </Routes>
  );
};

export default App;
