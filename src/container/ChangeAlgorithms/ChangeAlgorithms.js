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

const Field = styled.div`
    position: absolute;
    top: ${props => props.top}px;
    left: calc(50% - 55px);
    display: inline-block;
    > input {
      opacity: 0;
    }
    > input + label {
      position: relative;
      padding-left: 25px;
      cursor: pointer;
      &:before {
        content: '';
        position: absolute;
        left:0; top: 1px;
        width: 17px; height: 17px;
        border: 1px solid #aaa;
        background: #f8f8f8;
        border-radius: 3px;
        box-shadow: inset 0 1px 3px rgba(0,0,0,.3)
      }
      &:after {
        content: '✔';
        position: absolute;
        top: -1px; left: 2px;
        font-size: 16px;
        color: #09ad7e;
        transition: all .2s;
      }
    }
    > input:not(:checked) + label {
        &:after {
          opacity: 0;
          transform: scale(0);
        }
    }
    > input:disabled:not(:checked) + label {
        &:before {
          box-shadow: none;
          border-color: #bbb;
          background-color: #ddd;
        }
    }
    > input:checked + label {
      &:after {
        opacity: 1;
        transform: scale(1);
      }
    }
    > input:disabled:checked + label {
      &:after {
        color: #999;
      }
    }
    > input:disabled + label {
      color: #aaa;
    }
    > input:checked:focus + label, input:not(:checked):focus + label {
      &:before {
        border: 1px dotted blue;
      }
    }

    @media(max-width: 444px){
        top: calc(${props => props.top}px + 40px);
    }

    @media(max-width: 329px){
        top: calc(${props => props.top}px + 80px);
    }
`;

const Top = styled.div`
    margin-top: 85px;
`;

class ChangeAlgorithms extends Component{
    state={
        algorithms: this.props.algorithms   
    }

    changedHandler = (id,e) => {
        let alg = this.state.algorithms;
        alg[id].checked = e.target.checked;
        this.setState({algorithms: alg});
    }

    submitHandler = (event) => {
        event.preventDefault();
        this.props.onSelectAlgorithms(this.state.algorithms);
        setTimeout(() => {
            this.props.modalClosed();
        }, 1100);
    }

    render(){
        let disabled = false;
        let counter = 0;
        const n = this.state.algorithms.length;
        for(let i=0; i<n; i++){
            if(this.state.algorithms[i].checked){
                counter++;
            }
        }
        if(counter >= 3){
            disabled = true;
        }

        let top = 100;
        const content = this.state.algorithms.map(item => {
            top +=20;
            return (
                <div key={item.id}>
                    <Field top={top}>
                        <input 
                            id={item.id} 
                            type="checkbox"
                            checked={item.checked}
                            onChange={(e) => this.changedHandler(item.id,e)}
                        />
                        <label htmlFor={item.id}>{item.name}</label>
                    </Field>
                </div>
            )
        })
        return(
            <Fragment>
                <StyledI className="fa fa-window-close" onClick={() => this.props.modalClosed()}/>
                <StyledDiv>
                    <StyledH1>Select minimum 3 algorithms</StyledH1>
                    <form onSubmit={this.submitHandler}>
                        <StyledDivCenter>
                            {content}
                        </StyledDivCenter>
                        <StyledDivCenter>
                            <Top>
                                <StyledButton btnType="Success" disabled={!disabled}>Submit</StyledButton>
                            </Top>
                        </StyledDivCenter>
                    </form>
                </StyledDiv>
            </Fragment>
        )
    }
}

export default ChangeAlgorithms;