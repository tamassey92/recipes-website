import React, { useState } from "react";

function Login({ setCurrentUser }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState([]);

  function login(e) {
    e.preventDefault();
    const user = {
      username: username,
      password,
    };

    fetch(`/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    }).then((res) => {
      if (res.ok) {
        res.json().then((user) => {
          setCurrentUser(user);
        });
      } else {
        res.json().then((json) => setError(json.error));
      }
    });
  }

  return (
    <>
      <h1>Recipe Finder</h1>
      <h1>Login</h1>
      <form onSubmit={login}>
        <label>
          Username
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <label>
          Password
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>

        <input type="submit" value="Login!" />
      </form>
      {error ? <div>{error}</div> : null}
    </>
  );
}

export default Login;
