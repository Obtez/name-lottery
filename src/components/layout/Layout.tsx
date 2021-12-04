import React from 'react';
import { Link } from 'react-router-dom';
import { ReactNode } from 'react-router/node_modules/@types/react';

interface IProps {
  children: ReactNode;
}

const Layout = function ({ children }: IProps) {
  return <div>{children}</div>;
};

export default Layout;
