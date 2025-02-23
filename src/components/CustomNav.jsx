import { useDispatch } from "react-redux";
import { useState } from "react";
import { searchReducerAction, setArtistSongAction } from "../redux/actions";

const CustomNav = () => {
  const dispatch = useDispatch();
  const [localSearch, setLocalSearch] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(setArtistSongAction(localSearch)); //Qui chiamo la fetch dal submit
    dispatch(searchReducerAction(localSearch));
  };

  return (
    <nav className="navbar navbar-expand-md fixed-left justify-content-between" id="sidebar">
      <div className="container flex-column align-items-start">
        <a className="navbar-brand" href="index.html">
          <img src="../src/assets/logo/logo.png" alt="Spotify Logo" width="131" height="40" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <ul className="ps-0">
              <li>
                <a className="nav-item nav-link d-flex align-items-center" href="#">
                  <i className="bi bi-house-door-fill"></i>&nbsp; Home
                </a>
              </li>
              <li>
                <a className="nav-item nav-link d-flex align-items-center" href="#">
                  <i className="bi bi-book-fill"></i>&nbsp; Your Library
                </a>
              </li>
              <li>
                <form onSubmit={handleSubmit}>
                  <div className="input-group mt-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Search"
                      aria-label="Search"
                      value={localSearch}
                      onChange={(e) => setLocalSearch(e.target.value)}
                    />
                    <div className="input-group-append">
                      <button type="submit" className="btn btn-outline-secondary btn-sm h-100">
                        GO
                      </button>
                    </div>
                  </div>
                </form>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="nav-btn">
        <button className="btn signup-btn" type="button">
          Sign Up
        </button>
        <button className="btn login-btn" type="button">
          Login
        </button>
        <a href="#">Cookie Policy</a> |<a href="#"> Privacy</a>
      </div>
    </nav>
  );
};

export default CustomNav;
