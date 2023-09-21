import {Link} from "react-router-dom";
import {GameCard} from "./GameCard/GameCard";

export const Catalogue = ({
                              games
                          }) => {
    return (
        <section id="catalog-page">
            <h1>All Games</h1>

            {games.length === 0 ?

                <h3 className="no-articles">No articles yet</h3>

                :
                   games.map(game => <GameCard {...game}/>)

            }


        </section>

    )
}