import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
  <ul>
    <li>
      <Link
        to={`${process.env.PUBLIC_URL}/suspense-list-no-keys`}
      >
        SuspenseList Without Keys
      </Link>
    </li>
    <li>
      <Link
        to={`${process.env.PUBLIC_URL}/suspense-list-with-keys`}
      >
        SuspenseList With Keys
      </Link>
    </li>
    <li>
      <Link to={`${process.env.PUBLIC_URL}/suspense-list-with-keys-and-transition`}>
        SuspenseList With Keys and Transition
      </Link>
    </li>
    <li>
      <Link to={`${process.env.PUBLIC_URL}/suspense-list-nested-in-suspense`}>
        SuspenseList Nested in Suspense
      </Link>
    </li>
    <li>
      <Link to={`${process.env.PUBLIC_URL}/suspense-list-hacky`}>
        Hacky Solution to SuspenseList Issues
      </Link>
    </li>
  </ul>
)


export default Home;