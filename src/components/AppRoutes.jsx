import {Routes, Route, Navigate} from "react-router-dom";
import LandingPage from "../../pages/LandingPage.jsx";
import ErrorPage from "../../pages/ErrorPage.jsx";
import ResultsPage from "../../pages/ResultsPage.jsx";


export default function AppRoutes () {

    return(
        <Routes>
            <Route path="/" element={<Navigate to="/landing"/>}/>
            <Route path ={"/landing"} element={<LandingPage/>}/>
            <Route path ={"/error"} element={<ErrorPage/>}/>
            <Route path ={"/results"} element={<ResultsPage/>}/>
        </Routes>
    )
}

