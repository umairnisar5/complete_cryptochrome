import React from "react";
import FormCardHeader from "./FormCardHeader";
import FormCardDes from "./FormCardDes";
import FormCardFooter from "./FormCardFooter";
import FooterTabsView from "./FooterTabsView";
import "./FormCard.css";

const FormCard = () => {
  const [value, setValue] = React.useState(false);
  const clickHandler = () => {
    setValue(!value);
    console.log(!value);
  };
  return (
    <div className="formContainer">
      <div onClick={clickHandler}>
        <FormCardHeader />
        <FormCardDes />
        <FormCardFooter />
      </div>
      {value && <FooterTabsView />}
    </div>
  );
};

export default FormCard;
