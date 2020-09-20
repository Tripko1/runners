import React from 'react';
import styled from "styled-components";

const StyledDiv = styled.div`
	position: absolute;
	top: 10px;
	right: 10px;
	width: 30px;
	height: 30px;
	background-color: #5CDB95;
	border-radius: 50%;
	padding: 5px;
	display: flex;
  	align-items: center;
  	justify-content: center;
  	transition: filter 300ms;
    cursor: pointer;
    
    &:hover{
        background-color: #379683;
      }
`;

const StyledI = styled.i`
	color: #EDF5E1;
`; 

const settingsItem = (props) => {
    return(
        <StyledDiv onClick={() => props.setOpen()}>
            <StyledI className="fa fa-cog"/>
            {props.open ? props.children : null}
        </StyledDiv>
    )
}
export default settingsItem;