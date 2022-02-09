import {React, Component}from "react";
import { Route, Routes} from "react-router-dom";


import HumanBody from "./HumanBody/HumanBody";
import Sidebar from "../SideBar/SideBar";
import Weight from "./Weight/Weight";
import Imc from "./IMC/Imc";
class Tools extends Component {
    
    render(){
        return(
            <div>
                <Sidebar/>
                <Routes>   
                    <Route path={"/bodyMesures"}  element={<HumanBody/>}/>
                    <Route path={"/weight"} element={<Weight/>}/>
                    <Route path={"/imc"} element={<Imc/>}/>
                </Routes>

            </div>
        );
    }
}
export default Tools;