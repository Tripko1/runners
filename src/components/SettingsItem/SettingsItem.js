import React from 'react';
import * as style from "./style";

const settingsItem = (props) => {
    return(
        <style.StyledDiv onClick={() => props.setOpen()}>
            <style.StyledI className="fa fa-cog"/>
            {props.open ? props.children : null}
        </style.StyledDiv>
    )
}
export default settingsItem;