import {Header} from "./components/Header/Header";
import {Home} from "./components/Home/Home";
import {CreatePage} from "./components/CreatePage/CreatePage";
import {EditPage} from "./components/EditPage/EditPage";
import {DetailsPage} from "./components/DetailsPage/DetailsPage";
import {Catalogue} from "./components/Catalogue/Catalogue";
import {Routes, Route} from "react-router-dom"

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
            </Routes>
        </div>
    );
}

export default App;
