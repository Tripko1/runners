import styled from "styled-components";

export const StyledDiv = styled.div`
	position: absolute;
	top: 10px;
	right: 10px;
	width: 30px;
	height: 30px;
	background-color: #379683;
	border-radius: 50%;
	padding: 5px;
	display: flex;
  	align-items: center;
  	justify-content: center;
  	transition: filter 300ms;
    cursor: pointer;
    
    &:hover{
        background-color: #5CDB95;
      }
`;

export const StyledI = styled.i`
	color: #EDF5E1;
`; 