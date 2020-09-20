import React from "react";
import styled from "styled-components";
import DropdownItem from "./DropdownItem/DropdownItem";

const StyledDiv = styled.div`
    position: absolute;
    right: 5px;
    top: 43px;
    width: 200px;
    background-color: #EDF5E1;
    border: 1px sold #379683;
    box-shadow: 0 0 5px #379683;
    border-radius: 8px;
    padding: 2px;
    overflow: hidden;
    z-index: 1;
`;

const dropdownMenu = (props) => {
    return(
        <StyledDiv>
            <DropdownItem icon="fa fa-map-marker">Change start location</DropdownItem>
            <DropdownItem icon="fa fa-arrows-alt">Change map size</DropdownItem>
            <DropdownItem icon="fa fa-sitemap">Algorithms</DropdownItem>
        </StyledDiv>
    )
}

export default dropdownMenu;