import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/home/Home';
import NotFound from '../pages/404/NotFound';
import ManageGroups from '../pages/manage-groups/ManageGroups';
import Tutorial from '../pages/tutorial/Tutorial';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Home />} />
        <Route path="/manage-groups" element={<ManageGroups />} />
        <Route path="/how-it-works" element={<Tutorial />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
