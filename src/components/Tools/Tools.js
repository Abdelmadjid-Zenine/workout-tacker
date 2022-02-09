import {React, Component}from "react";
import { Route, Routes} from "react-router-dom";


import HumanBody from "./HumanBody/HumanBody";
import Sidebar from "../SideBar/SideBar";
import Weight from "./Weight/Weight";
class Tools extends Component {
    
    render(){
        return(
            <div>
                <Sidebar/>
                <Routes>   
                    <Route path={"/bodyMesures"}  element={<HumanBody/>}/>
                    <Route path={"/weight"} element={<Weight/>}/>
                </Routes>

            </div>
        );
    }
}
export default Tools;