import React from "react";
import FormCardHeader from "./FormCardHeader";
import FormCardDes from "./FormCardDes";
import FormCardFooter from "./FormCardFooter";
import FooterTabsView from "./FooterTabsView";
import "./FormCard.css";

const FormCard = ({ data }) => {
  console.log(data)
  const {lpToken} = data;
  const [value, setValue] = React.useState(false);
  const clickHandler = () => {
    setValue(!value);
    console.log(!value);
  };
  return (
    <div className="formContainer">
      <div onClick={clickHandler}>
        <FormCardHeader />
        <FormCardDes  />
        <FormCardFooter />
      </div>
      {value && <FooterTabsView data={data}/>}
    </div>
  );
};

export default FormCard;
