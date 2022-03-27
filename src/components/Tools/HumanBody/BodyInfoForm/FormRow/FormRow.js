import React from "react";
import styles from "./FormRow.module.css"

const FormRow = React.forwardRef((props, ref) => {
    const formInput = (props.inputType == "textarea")?
        <textarea rows={5} className={styles.formField}>

        </textarea>
        :
        <input className={styles.formField} ref={ref} type={(props.inputType === "date")? "text":props.inputType} 
                   name={props.name} placeholder={props.placeholder} 
                   onFocus={(props.inputType === "date") ? (e) =>{props.onfocus(e)}: null}/>
    return (
        <div className={styles.formRow}>
            <label htmlFor={props.bodyPart}>{props.Label}</label>
            
           
                   {formInput}

        </div>
    );
})
export default FormRow;