import {useEffect, useState} from "react";
import {Routes, Route} from "react-router-dom";
import * as gameService from './services/gameService';

import {Header} from "./components/Header/Header";
import {Home} from "./components/Home/Home";
import {CreatePage} from "./components/CreatePage/CreatePage";
import {EditPage} from "./components/EditPage/EditPage";
import {DetailsPage} from "./components/DetailsPage/DetailsPage";
import {Catalogue} from "./components/Catalogue/Catalogue";
import {Login} from "./components/Login/Login";
import {Register} from "./components/Register/Register"

function App() {
    const [games, setGames] = useState([]);

    useEffect(() => {
        gameService.getAll()
            .then(data => {
                setGames(data);
            })
            .catch(err => console.log(err));
    }, [games]);

    return (
        <div id="box">
            <Header/>
            <main id="main-content">
            <Routes>
                <Route path={'/'} element={<Home games={games}/>}/>
                <Route path={'/create'} element={<CreatePage/>}/>
                <Route path={'/edit'} element={<EditPage/>}/>
                <Route path={'/details'} element={<DetailsPage/>}/>
                <Route path={'/catalogue'} element={<Catalogue games={games}/>}/>
                <Route path={'/login'} element={<Login/>}/>
                <Route path={'/register'} element={<Register/>}/>
            </Routes>
            </main>
        </div>
    );
}

export default App;
