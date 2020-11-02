import React,{ Fragment, useState} from "react";
import * as style from "./style";

const ChangeMatrixSize = props => {
    const [rows, setRows] = useState("");
    const [columns, setColumns] = useState("");
    const [validRows, setValidRows] = useState(false);
    const [validColumns, setValidColumns] = useState(false);
    const [touchedRows, setTouchedRows] = useState(false);
    const [touchedColumns, setTouchedColumns] = useState(false);

    const checkValidity = (value) => {
        let isValid = true;

        isValid = value.trim() !== "" && isValid;

        if(value <3 || value>20){
            isValid = false
        }
        return isValid;
    }

    const handleRowsChange = (event) => {
        setRows(parseInt(event.target.value));
        setValidRows(checkValidity(event.target.value));
        setTouchedRows(true);
    }

    const handleColumnsChange = (event) => {
        setColumns(parseInt(event.target.value));
        setValidColumns(checkValidity(event.target.value));
        setTouchedColumns(true);
    }

    const submitHandler = (event) => {
        event.preventDefault();
        props.onChangeMatrixDimension(rows, columns);
        const Xstart = props.getRandomInt(columns);
        const Ystart = props.getRandomInt(rows);
        let Xend,Yend;
        while(1){
            Xend = props.getRandomInt(columns);
            Yend = props.getRandomInt(rows);
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
        props.onGetRandomPositions(Xstart,Ystart,Xend,Yend);
        props.onCreateConnectivityMatrix();
        
        setTimeout(() => {
            setRows("");
            setColumns("");
            setValidRows(false);
            setValidColumns(false);
            setTouchedRows(false);
            setTouchedColumns(false);
            props.modalClosed();
        }, 1100);
    }

    let disabled = false;
    if(validRows && 
        validColumns && 
        touchedRows && 
        touchedColumns){
            disabled = true;
    }
    return(
        <Fragment>
            <style.StyledI className="fa fa-window-close" onClick={() => props.modalClosed()}/>
            <style.StyledDiv>
                <style.StyledH1>Change Matrix size</style.StyledH1>
                <form onSubmit={submitHandler}>
                    <style.StyledDivCenter>
                        <div>
                            <label htmlFor="x">Number of rows (between 3 and 20):</label>
                            <input 
                                id="x"
                                type="number"
                                min="3"
                                max="20"
                                value={rows}
                                onChange={handleRowsChange}
                            />
                        </div><br /><br />
                    </style.StyledDivCenter>
                    <style.StyledDivCenter>
                        <div>
                            <label htmlFor="y">Number of columns (between 3 and 20):</label>
                            <input 
                                id="y"
                                type="number"
                                min="3"
                                max="20"
                                value={columns}
                                onChange={handleColumnsChange}
                            />
                        </div><br /><br />
                    </style.StyledDivCenter>
                    <style.StyledDivCenter>
                        <style.StyledButton btnType="Success" disabled={!disabled}>Submit</style.StyledButton>
                    </style.StyledDivCenter>
                </form>
            </style.StyledDiv>
        </Fragment>
    )
}

export default ChangeMatrixSize;