import {React, Component} from "react"
import styles from "./Imc.module.css"
import FormRow from "../HumanBody/BodyInfoForm/FormRow/FormRow";
import Button from "../../UI/Button/Button";
class Imc extends Component {
    render(){
        return (
            <div className={styles.Container}>
               
                    <form className={styles.FormContainer}>
                        
                            <FormRow inputType="number" name="weight" Label="Votre poids: " placeholder="Votre poids en kg"/> 
                        <div className={styles.Buttons}>
                            
                            <Button btnType="Success" >Calculer IMC</Button>
                        </div>    
                    </form>
              
            </div>
        );  
    }
}
export default Imc;