import React from 'react';

import { Link } from 'react-router-dom';
import styles from './Home.module.scss';

function Home() {
  return (
    <div className={styles.home}>
      <h1>RANDOMIZE</h1>
      <Link to="/group-lottery">Random Groups</Link>
      <Link to="/name-lottery">Random Name</Link>
      <Link to="/add-names">Manage Groups</Link>
      <Link to="/how-it-works">How it works</Link>
    </div>
  );
}

export default Home;
