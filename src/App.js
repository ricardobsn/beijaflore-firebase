import React from "react";
import "./App.css";
import Header from "./Header";
import Feed from "./Feed";
import Login from "./Login";
import { useStateValue } from "./StateProvider";

function App() {
  const [{ user }, dispatch] = useStateValue();
  return (
    <div className='App'>
      {!user ? (
        <Login />
      ) : (
        <>
          {" "}
          <Header />
          <div className='app__body'>
            <Feed />
          </div>
        </>
      )}
    </div>
  );
}

export default App;