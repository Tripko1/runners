import React,{Component} from "react";
import styled from "styled-components";
import MainContainer from "./container/MainContainer/MainContainer";

const StyledDiv = styled.div`
  height: 100%;
  z-index: 1;
  overflow: hidden;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: #EDF5E1;
`;

class App extends Component{
	render(){
		return(
			<StyledDiv>
				<MainContainer/>
			</StyledDiv>
		);
	}
}

export default App;
