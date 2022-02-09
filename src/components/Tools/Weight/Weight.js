import {React, Component} from "react"
import styles from "./Weight.module.css"
import FormRow from "../HumanBody/BodyInfoForm/FormRow/FormRow"
import Button from "../../UI/Button/Button"
import {changeType} from "../HumanBody/BodyInfoForm/BodyInfoForm"
class Weight extends Component {
    render(){
        return (
            <div className={styles.Container}>
               
                    <form className={styles.FormContainer}>
                        
                            <FormRow inputType="number" name="weight" Label="Votre poids: " placeholder="Votre poids en kg"/> 
                            <FormRow inputType="date"  name="measureDate" Label="Date : " placeholder="Date de mesure" onfocus={changeType}/> 
                            <FormRow inputType="textarea"  name="Notes" Label="Notes : " placeholder="Date de mesure" />
                        <div className={styles.Buttons}>
                            
                            <Button btnType="Success" >Continue</Button>
                        </div>    
                    </form>
              
            </div>
        );
    }
}
export default Weight;