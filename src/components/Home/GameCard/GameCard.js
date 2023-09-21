import {Link} from "react-router-dom";

export const GameCard = ({title}) => {
    return (
        <>
            <div className="game">
                <div className="image-wrap">
                    <img src="./images/CoverFire.png"/>
                </div>
                <h3>{title}</h3>
                <div className="rating">
                    <span>☆</span><span>☆</span><span>☆</span><span>☆</span><span>☆</span>
                </div>
                <div className="data-buttons">
                    <Link to="/details" className="btn details-btn">Details</Link>
                </div>
            </div>
        </>

    )
}