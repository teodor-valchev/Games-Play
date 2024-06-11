import { useContext } from "react";
import { Link } from "react-router-dom";

import AuthContext from "../../context/authContext";

const Header = () => {
    const { isAuth, username } = useContext(AuthContext);
    return (
        <header>
            <h1>
                <Link className="home" to="/">
                    GamesPlay
                </Link>
            </h1>
            <nav>
                <Link to="/all-games">All games</Link>
                {isAuth && (
                    <div id="user">
                        <Link to="/create">Create Game</Link>
                        <Link to="/logout">Logout</Link>
                    </div>
                )}
                {!isAuth && (
                    <div id="guest">
                        <Link to="/login">Login</Link>
                        <Link to="/register">Register</Link>
                    </div>
                )}
                <span>Welcome, {username}</span>
            </nav>
        </header>
    );
};

export default Header;
