import React from 'react';
import FormCardHeader from "./FormCardHeader";
import FormCardDes from "./FormCardDes";
import FormCardFooter from "./FormCardFooter";
import "./FormCard.css";

 const FormCard = () => {
    return (
        <div className="formContainer">
           <FormCardHeader /> 
           <FormCardDes />
           <FormCardFooter />
        </div>
    )
}

export default FormCard;
