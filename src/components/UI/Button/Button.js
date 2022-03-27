import styles from "./Button.module.css";
const button = (props) => {
    return(
        <button className={(props.btnType === "Success")? styles.Success : styles.Cancel} type={props.btnType === "Success"? "submit":undefined} onClick={props.clicked} >{props.children}</button>
    );
}

export default button;