import styles from "./Toolbar.module.css";
import NavigationItems from "../NavigationItems/NavigationItems";
const Toolbar = () =>{
    return (
        <div className={styles.Toolbar}>
            <NavigationItems/>
        </div>
    );
}
export default Toolbar;