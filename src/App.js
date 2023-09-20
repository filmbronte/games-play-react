import {Header} from "./components/Header/Header";
import {Home} from "./components/Home/Home";
import {CreatePage} from "./components/CreatePage/CreatePage";
import {EditPage} from "./components/EditPage/EditPage";
import {DetailsPage} from "./components/DetailsPage/DetailsPage";
import {Catalogue} from "./components/Catalogue/Catalogue";
import {Routes, Route} from "react-router-dom"
import {Login} from "./components/Login/Login";
import {Register} from "./components/Register/Register";

function App() {
    return (
        <div id="box">
            <Header/>
            <Routes>
                <Route path={'/'} element={<Home/>}/>
                <Route path={'/create'} element={<CreatePage/>}/>
                <Route path={'/edit'} element={<EditPage/>}/>
                <Route path={'/details'} element={<DetailsPage/>}/>
                <Route path={'/catalogue'} element={<Catalogue/>}/>
                <Route path={'/login'} element={<Login/>}/>
                <Route path={'/register'} element={<Register/>}/>
            </Routes>
        </div>
    );
}

export default App;
