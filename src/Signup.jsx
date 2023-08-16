import React from 'react';
import {Link}from 'react-route-dom';

function Signup() {
  return (
    <div>
      <h2>Signup</h2>
      <form>
        <label>
          Username:
          <input type="text" />
        </label>
        <label>
          Password:
          <input type="password" />
        </label>
        <button type="submit">Signup</button>
      </form>
    </div>
  );
}

export default Signup;
