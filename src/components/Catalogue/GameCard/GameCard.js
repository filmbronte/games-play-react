import {Link} from "react-router-dom";

export const GameCard = ({}) => {
    return (
        <>

            <div className="allGames">
                <div className="allGames">
                    <img src="./images/avatar-1.jpg" alt={'image'}/>
                    <h6>Action</h6>
                    <h2>Cover Fire</h2>
                    <Link to="/details" className="details-button">Details</Link>
                </div>
            </div>
        </>

    )
}