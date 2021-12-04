import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/home/Home';
import GroupLottery from '../pages/group-lottery/GroupLottery';
import NameLottery from '../pages/name-lottery/NameLottery';
import NotFound from '../pages/404/NotFound';
import AddNames from '../pages/add-names/AddNames';
import Tutorial from '../pages/tutorial/Tutorial';

const Router = function () {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Home />} />
        <Route path="/group-lottery" element={<GroupLottery />} />
        <Route path="/name-lottery" element={<NameLottery />} />
        <Route path="/add-names" element={<AddNames />} />
        <Route path="/how-it-works" element={<Tutorial />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
