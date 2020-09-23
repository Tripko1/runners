import React from "react";
import MatrixField from "../../Matrix/MatrixRow/MatrixField/MatrixField";
import * as style from "./style";

const helpIcons = () => {
    return(
        <style.StyledDiv>
            <style.First>
                <MatrixField 
                    value={1}
                    height={25}
                    color="#edf5e1"
                />
                <style.Text>Start</style.Text>
            </style.First>
            <style.Second>
                <MatrixField 
                    value={2}
                    height={25}
                    color="black"
                />
                <style.Text>Finish</style.Text>
            </style.Second>
            <style.Third>
                <MatrixField 
                    value={3}
                    height={25}
                    color="#379683"
                />
                <style.Text>Barrier</style.Text>
            </style.Third>
        </style.StyledDiv>
    )
}

export default helpIcons;