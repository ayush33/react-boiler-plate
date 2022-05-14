
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from './pages/Login';
import SecuredLayout from './pages/SecuredLayout';
function App() {
  return (
    <div >
      <Router>
        <Routes >

          <Route
            exact
            path="/login"
            element=
            {<Login />
            }
          />
          {false ? (
            <Route
              path="/"
              element={<Login />}
            />
          ) : (
            <Route
              path="/"
              element={<SecuredLayout />}
            />
          )}

        </Routes >
      </Router>
    </div>
  );
}

export default App;
