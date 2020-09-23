import React from "react";
import * as style from "./style";

const dropdownItem = (props) => {
    return (
        <style.StyledDiv onClick={() => props.click()}>
            {props.icon ? <style.StyledI className={props.icon} />  : null}
            {props.children}
        </style.StyledDiv>
    )
}

export default dropdownItem;