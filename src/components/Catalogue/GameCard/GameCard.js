import {Link} from "react-router-dom";

export const GameCard = ({title, imageUrl, category}) => {
    return (
        <>
            <div className="allGames">
                <div className="allGames-info">
                    <img src={imageUrl} alt={'image'}/>
                    <h6>{title}</h6>
                    <h2>{category}</h2>
                    <Link to="/details" className="details-button">Details</Link>
                </div>
            </div>
        </>

    )
}