import { Link } from "react-router-dom";

const GameListItem = ({ _id, category, image, title }) => {
    return (
        <div className="allGames">
            <div className="allGames-info">
                <img src={image} />
                <div className="description">
                    <h6>{title}</h6>
                    <h2>{category}</h2>
                </div>
                <Link to={`/details/${_id}`} className="details-button">
                    Details
                </Link>
            </div>
        </div>
    );
};

export default GameListItem;
