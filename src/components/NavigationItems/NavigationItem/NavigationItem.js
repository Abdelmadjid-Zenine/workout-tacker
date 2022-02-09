import styles from "./NavigationItem.module.css";
import { NavLink } from "react-router-dom";
const NavigationItem = (props) => {
    return(
        <li className={styles.NavigationItem}>
            <NavLink  
            exact
            to={props.link}
            className={({ isActive }) => isActive ?styles.active:undefined}>{props.children}</NavLink>
        </li>
    )
}
export default NavigationItem;