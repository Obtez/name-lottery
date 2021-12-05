import React from 'react';

import { Link } from 'react-router-dom';
import styles from './Home.module.scss';

function Home() {
  return (
    <div className={styles.home}>
      <h1>RANDOMIZE</h1>
      <ul>
        <Link to="/random-groups">
          <li>Random Groups</li>
        </Link>

        <Link to="/random-name">
          <li>Random Name</li>
        </Link>

        <Link to="/manage-groups">
          <li>Manage Groups</li>
        </Link>

        <Link to="/how-it-works">
          <li>How it works</li>
        </Link>
      </ul>
    </div>
  );
}

export default Home;
