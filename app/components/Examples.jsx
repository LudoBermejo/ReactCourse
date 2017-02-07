import React from 'react';
import { Link } from 'react-router';

const Examples = () => (
  <div>
    <h1 className="text-center">Examples component</h1>
    <p>Here are a few example locations to try out:</p>
    <ol>
      <li>
        <Link to="/?location=Madrid">Madrid</Link>
      </li>
      <li>
        <Link to="/?location=Barcelona">Barcelona</Link>
      </li>
    </ol>
  </div>
);

module.exports = Examples;
