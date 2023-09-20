import {Header} from "./components/Header/Header";
import {Home} from "./components/Home/Home";
import {CreatePage} from "./components/CreatePage/CreatePage";
import {EditPage} from "./components/EditPage/EditPage";
import {DetailsPage} from "./components/DetailsPage/DetailsPage";
import {Catalogue} from "./components/Catalogue/Catalogue";

function App() {
    return (
        <div id="box">
            <Header/>
            <Home/>
            <CreatePage/>
            <EditPage/>
            <DetailsPage/>
            <Catalogue/>
        </div>
    );
}

export default App;
