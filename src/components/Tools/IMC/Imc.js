import {React, Component, useState, useRef, useEffect} from "react"
import styles from "./Imc.module.css"
import FormRow from "../HumanBody/BodyInfoForm/FormRow/FormRow";
import Button from "../../UI/Button/Button";

function Imc () {
    const inputWeight = useRef(0)
    const inputHeight = useRef(0)
    const [weight, setWeight] = useState(0)
    const [height, setHeight] = useState(0)
    const [bmi, setBmi] = useState(0)

    function handleSubmit(event){
        
        event.preventDefault()
        setHeight(() => inputHeight.current.value)
        setWeight(() => inputWeight.current.value)
        
        
    }    
    useEffect(function(){
        setBmi((weight) / Math.pow(height, 2))
        
    }, [weight, height])
    return (
            <div className={styles.Container}>
               
                    <form className={styles.FormContainer} onSubmit={handleSubmit}>
                        
                            <FormRow ref={inputWeight} inputType="number" name="weight" Label="Votre poids: " placeholder="Votre poids en kg"/> 
                            <FormRow ref={inputHeight} inputType="number" name="height" Label="Votre taille: " placeholder="Votre taille en cm"/> 
                        <div className={styles.Buttons}>
                            
                            <Button btnType="Success">Calculer IMC</Button>
                        </div>    
                    </form>
              
            </div>
        );  
    }

export default Imc;