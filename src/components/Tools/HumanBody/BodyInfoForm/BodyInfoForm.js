//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
import React, {Component} from "react"
import styles from "./BodyInForm.module.css"
import FormRow from "./FormRow/FormRow";
import Button from "../../../UI/Button/Button";
const BODYPARTS = {
    Head: "HumanBody_Head",
    Arms:"HumanBody_arm",
    waist:"HumanBody_stomach",
    Legs:"HumanBody_legs",
    Shoulder:"HumanBody_shoulder"
}
export const changeType = (e) => {
        
    e.target.type="date";
}
class BodyData extends Component {
    constructor(props) {
        super(props)
        this.submitFormHandler = this.submitFormHandler.bind(this)
    }
    state = {
        neckSize:0,
        shoulderSize:0,
        waistSize:0,
        leftArmSize:0,
        rightArmSize:0,
        leftThighSize:0,
        rightThighSize:0,
        mesureDate:""
    }
    
    submitFormHandler(e){
        alert(JSON.stringify(this.state));
        e.preventDefault()
    }
    renderInputs = (part) => {
        let formContent = null
        
        
            if(part.includes(BODYPARTS['Head'])){
                
                formContent =  
                        <div className="Infos">
                            
                            <FormRow inputType="number" name="neckSize" Label="Tour du cou : " placeholder="Mesure en (cm)"/>
                            <FormRow inputType="date"  name="measureDate" Label="Date : " placeholder="Date de mesure" onfocus={changeType}/>
                        </div>
                   
            
            }
            else if (part.includes(BODYPARTS['Shoulde)r'])){
                
                formContent =  
                    <div className="Infos">
                        <FormRow inputType="number" name="shoulderDate" Label="Mesure : " placeholder="Mesure en (cm)"/>
                        <FormRow inputType="date"  name="measureDate" Label="Date : " placeholder="Date de mesure" onfocus={changeType}/>
                    </div>
                
            }        
            else if(part.includes(BODYPARTS['Arms'])){
                
                formContent = 
                    <div className="Infos">
                        
                        <FormRow inputType="number" name="leftArmSize" Label="Bras gauche : " placeholder="Mesure en (cm)"/>
                        <FormRow inputType="number" name="rightArmSize" Label="Bras droit : " placeholder="Mesure en (cm)"/>
                        <FormRow inputType="date"  name="measureDate" Label="Date : " placeholder="Date de mesure" onfocus={this.changeType}/>
                    </div>
                    
            }  
            else if(part.includes(BODYPARTS['waist'])){
                 
                formContent = 
                <div className="Infos">
                    <FormRow inputType="number" name="waistSize" Label="Tour de taille : " placeholder="Mesure en (cm)"/>
                    <FormRow inputType="date"  name="measureDate" Label="Date : " placeholder="Date de mesure" onfocus={this.changeType}/>                    
                </div>
            }    
            else if(part.includes(BODYPARTS['Legs'])){
                    
                formContent = 
                    <div className="Infos">
                       <FormRow inputType="number" name="leftThighSize" Label="Cuisse gauche : " placeholder="Mesure en (cm)"/>
                        <FormRow inputType="number" name="rightThighSize" Label="Cuisse droite : " placeholder="Mesure en (cm)"/>
                        <FormRow inputType="date"  name="measureDate" Label="Date : " placeholder="Date de mesure" onfocus={this.changeType}/>
                    </div>
            }
            else
                return null;       
        
        return formContent;
    }
    render() {
        
        return (
            
            <div className={!(this.props.isformShown)?[styles.BodyData, styles.Hide].join(" "):styles.BodyData}>
                <form className={styles.FormContainer} onSubmit={this.submitFormHandler}>
                    
                    {this.renderInputs(this.props.selectedBodyPart)}
                    
                    <div className={styles.Buttons}>
                        <Button clicked={this.props.hideFrom}>Cancel</Button>
                        <Button btnType="Success" >Continue</Button>
                    </div>    
                </form>
                
            </div>
        );
    }


}

export default BodyData;
