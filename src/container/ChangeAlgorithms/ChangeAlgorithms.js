import React,{Component, Fragment} from "react";
import * as style from "./style";

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
                    <style.Field top={top}>
                        <input 
                            id={item.id} 
                            type="checkbox"
                            checked={item.checked}
                            onChange={(e) => this.changedHandler(item.id,e)}
                        />
                        <label htmlFor={item.id}>{item.name}</label>
                    </style.Field>
                </div>
            )
        })
        return(
            <Fragment>
                <style.StyledI className="fa fa-window-close" onClick={() => this.props.modalClosed()}/>
                <style.StyledDiv>
                    <style.StyledH1>Select minimum 3 algorithms</style.StyledH1>
                    <form onSubmit={this.submitHandler}>
                        <style.StyledDivCenter>
                            {content}
                        </style.StyledDivCenter>
                        <style.StyledDivCenter>
                            <style.Top>
                                <style.StyledButton btnType="Success" disabled={!disabled}>Submit</style.StyledButton>
                            </style.Top>
                        </style.StyledDivCenter>
                    </form>
                </style.StyledDiv>
            </Fragment>
        )
    }
}

export default ChangeAlgorithms;