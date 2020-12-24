import React from 'react';
import "./FormCardFooter.css";
import FooterTabsView from "./FooterTabsView";

const FormCardFooter = () => {
    return (
        <div className="cardFormFooter">
            <div className="fa_logos">
                <i className="fa fa-tree" aria-hidden="true"></i>
                <i className="fa fa-tree" aria-hidden="true">100k</i>
                <i className="fa fa-tree" aria-hidden="true">100k</i>
                <i className="fa fa-tree" aria-hidden="true">100k</i>
            </div>
            <FooterTabsView />
        </div>
    )
}

export default FormCardFooter;