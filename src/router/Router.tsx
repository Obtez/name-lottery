import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/home/Home";
import GroupLottery from "../pages/group-lottery/GroupLottery";
import NameLottery from "../pages/name-lottery/NameLottery";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/group-lottery" element={<GroupLottery />} />
        <Route path= "/name-lottery" element={<NameLottery />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router;