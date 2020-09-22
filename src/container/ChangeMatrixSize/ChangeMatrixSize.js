import React,{Component, Fragment} from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
    width: 80%;
    margin: 0 auto;
`;

const StyledH1 = styled.h1`
    text-align: center;
    color: #05386b;
`;

const StyledDivCenter = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

const StyledButton = styled.button`
    background-color: ${props => props.btnType === "Success" ? "#5cdb95" : "tomato"};
    color: white;
    border: ${props => props.btnType === "Success" ? "1px solid #379683" : "1px solid #944317"};
    outline: none;
    cursor: pointer;
    font: inherit;
    padding: 10px;
    margin: 10px;
    font-weight: bold;
    border-radius: 5px;

    &:hover{
        background-color: ${props => props.btnType === "Success" ? "#379683" : "#944317"};
    }
    &:disabled {
        background-color: #484a4d;
        cursor: not-allowed;
    }
`;

const StyledI = styled.i`
    position: absolute;
    top: 20px;
    right: 20px;
    color: #944317;
    cursor: pointer;

    &:hover{
        color: tomato;
    }
`;

class ChangeMatrixSize extends Component{
    state={
        rows: "",
        columns: "",
        validRows: false,
        validColumns: false,
        touchedRows: false,
        touchedColumns: false
    }

    checkValidity = (value) => {
        let isValid = true;

        isValid = value.trim() !== "" && isValid;

        if(value <3 || value>20){
            isValid = false
        }
        return isValid;
    }

    handleRowsChange = (event) => {
        this.setState({
            rows: parseInt(event.target.value),
            validRows: this.checkValidity(event.target.value),
            touchedRows: true
        })
    }

    handleColumnsChange = (event) => {
        this.setState({
            columns: parseInt(event.target.value),
            validColumns: this.checkValidity(event.target.value),
            touchedColumns: true
        })
    }

    submitHandler = (event) => {
        event.preventDefault();
        this.props.onChangeMatrixDimension(this.state.rows, this.state.columns);
        const Xstart = this.props.getRandomInt(this.state.columns);
        const Ystart = this.props.getRandomInt(this.state.rows);
        let Xend,Yend;
        while(1){
            Xend = this.props.getRandomInt(this.state.columns);
            Yend = this.props.getRandomInt(this.state.rows);
            if(Xstart === Xend){
                if(Ystart > Yend+1){
                    break;
                }
                else if(Yend > Ystart+1){
                    break;
                }
            }

            if(Ystart === Yend){
                if(Xstart > Xend+1){
                    break;
                }
                else if(Xend > Xstart+1){
                    break;
                }
            }
            
            if(Xstart !== Xend && Ystart !== Yend){
                break;
            }
        }
        this.props.onGetRandomPositions(Xstart,Ystart,Xend,Yend);
        this.props.onCreateConnectivityMatrix();
        setTimeout(() => {
            this.setState({
                rows: "",
                columns: "",
                validRows: false,
                validColumns: false,
                touchedRows: false,
                touchedColumns: false
            })
            this.props.modalClosed();
        }, 1100);
    }

    render(){
        let disabled = false;
        if(this.state.validRows && 
            this.state.validColumns && 
            this.state.touchedRows && 
            this.state.touchedColumns){
                disabled = true;
        }
        return(
            <Fragment>
                <StyledI className="fa fa-window-close" onClick={() => this.props.modalClosed()}/>
                <StyledDiv>
                    <StyledH1>Change Matrix size</StyledH1>
                    <form onSubmit={this.submitHandler}>
                        <StyledDivCenter>
                            <div>
                                <label htmlFor="x">Number of rows (between 3 and 20):</label>
                                <input 
                                    id="x"
                                    type="number"
                                    min="3"
                                    max="20"
                                    value={this.state.rows}
                                    onChange={this.handleRowsChange}
                                />
                            </div><br /><br />
                        </StyledDivCenter>
                        <StyledDivCenter>
                            <div>
                                <label htmlFor="y">Number of columns (between 3 and 20):</label>
                                <input 
                                    id="y"
                                    type="number"
                                    min="3"
                                    max="20"
                                    value={this.state.columns}
                                    onChange={this.handleColumnsChange}
                                />
                            </div><br /><br />
                        </StyledDivCenter>
                        <StyledDivCenter>
                            <StyledButton btnType="Success" disabled={!disabled}>Submit</StyledButton>
                        </StyledDivCenter>
                    </form>
                </StyledDiv>
            </Fragment>
        )
    }
}

export default ChangeMatrixSize;