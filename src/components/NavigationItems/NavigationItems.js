
import styles from "./NavigationItems.module.css";
import NavigationItem from "./NavigationItem/NavigationItem";
const NavigationItems = (props) => {
    return (
        
        <nav>
            <ul className={styles.NavigationItems}>
                
                <NavigationItem link="/" >Acceuil</NavigationItem>
                <NavigationItem link="/outils" >Outils</NavigationItem>
                <NavigationItem link="/visualize">Visualisation</NavigationItem>

            </ul>
        </nav>
    )
}
export default NavigationItems;