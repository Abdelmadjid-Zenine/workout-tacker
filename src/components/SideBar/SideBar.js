import { NavLink } from "react-router-dom";

import styles from "./SideBar.module.css"
const Sidebar = () => {
    
    return (
        
        <div className={styles.SideBar}>
                
                <NavLink to="/outils/bodyMesures" className={({ isActive }) => isActive ?styles.active:undefined}>Mesures</NavLink>
                <NavLink to="/outils/weight" className={({ isActive }) => isActive ?styles.active:undefined}>Poids</NavLink>
                <NavLink to="/outils/IMC" className={({ isActive }) => isActive ?styles.active:undefined}>IMC</NavLink>
 
        </div>
    );
}
export default Sidebar;