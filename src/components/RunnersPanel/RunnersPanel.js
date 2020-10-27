import React, {Component} from "react";
import * as style from "./style";
import Matrix from "../Matrix/Matrix";

class RunnersPanel extends Component{
    render(){
        return(
            <style.StyledDiv>
                <style.StyledDivContent>
                    <style.StyledTextDiv>
                        {this.props.algorithmName}
                    </style.StyledTextDiv>
                    {this.props.clickedRun ? 
                    <Matrix 
                        m={this.props.m}
                        n={this.props.n}
                        startX={this.props.startX}
                        startY={this.props.startY}
                        endX={this.props.endX}
                        endY={this.props.endY}
                        matrix={this.props.matrixBFS}
                        pathMATRIX={this.props.pathMATRIX}
                /> : null}
                </style.StyledDivContent>
            </style.StyledDiv>
        )
    }
}

export default RunnersPanel;