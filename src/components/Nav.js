import React from "react"
import { Link } from "react-router-dom"
import { useState, useEffect } from "react"
import { auth } from "../firebase"
import { onAuthStateChanged, signOut } from "firebase/auth"
import { useNavigate } from "react-router-dom"
import { Button } from "@mui/material"

export default function Nav() {
  const [authUser, setAuthUser] = useState("")
  const navigate = useNavigate()

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user)
      } else {
        setAuthUser("")
      }
    })
  }, [authUser])

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/signin")
      })
      .catch((error) => {})
  }

  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-dark">
        <Link class="navbar-brand" to="/">
          <img
            class="animelogo"
            src="https://wcoclubs.weebly.com/uploads/1/2/5/8/125836467/published/png.png?1603082982"
          ></img>
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <Link className="nav-link" to="/animesearch">
              Anime Search
            </Link>
            <Link className="nav-link" to="/animemusic">
              Anime Music
            </Link>
            <li class="nav-item dropdown">
              <Link
                class="nav-link dropdown-toggle"
                to="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Anime Shop
              </Link>
              <ul class="dropdown-menu">
                <Link class="dropdown-item" to="/animebooks">
                  Light Novels/ Mangas/ Manwhas
                </Link>
                <Link class="dropdown-item" to="/animevideos">
                  DVDs/ Blu-Rays
                </Link>
                <Link class="dropdown-item" to="/animealbums">
                  Albums
                </Link>
                <Link class="dropdown-item" to="/animegames">
                  Games
                </Link>
                <Link class="dropdown-item" to="/animemerchandise">
                  Merchandise
                </Link>
                <Link class="dropdown-item" to="/animefigures">
                  Figures
                </Link>
              </ul>
            </li>
            {!authUser ? (
              <>
                <Link className="nav-link" to="/signin">
                  Sign In
                </Link>
                <Link className="nav-link" to="/signup">
                  Sign Up
                </Link>
              </>
            ) : (
              <p></p>
            )}
            <Link
              className="nav-link"
              color="error"
              onClick={handleSignOut}
              to="/signup"
            >
              <div className="welcome-user">
                {authUser ? (
                  <>
                    {" "}
                    <p>Hello, {authUser.displayName} Sign Out</p>
                  </>
                ) : (
                  <p></p>
                )}
              </div>
            </Link>
          </ul>
        </div>
        <Link className="nav-link" to="/animecart">
          <Button class="btn btn-outline-dark" type="submit">
            <i class="bi bi-cart">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-cart"
                viewBox="0 0 16 16"
              >
                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
              </svg>{" "}
              Cart
            </i>
          </Button>
        </Link>
      </nav>
    </div>
  )
}
