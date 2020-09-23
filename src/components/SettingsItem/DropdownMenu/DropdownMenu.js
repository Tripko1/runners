import React from "react";
import DropdownItem from "./DropdownItem/DropdownItem";
import * as style from "./style";

const dropdownMenu = (props) => {
    return(
        <style.StyledDiv>
            <DropdownItem 
                icon="fa fa-map-marker"
                click={props.openModalForLocation}
            >
                Change positions
            </DropdownItem>
            <DropdownItem 
                icon="fa fa-arrows-alt"
                click={props.openModalForSize}
            >
                Change map size
            </DropdownItem>
            <DropdownItem 
                icon="fa fa-sitemap"
                click={props.openModalForAlgorithms}
            >
                Algorithms
            </DropdownItem>
        </style.StyledDiv>
    )
}

export default dropdownMenu;