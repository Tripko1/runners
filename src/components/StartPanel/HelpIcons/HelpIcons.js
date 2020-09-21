import React from "react";
import styled from "styled-components";
import MatrixField from "../../Matrix/MatrixRow/MatrixField/MatrixField";

const StyledDiv = styled.div`
    width: 100%;
    padding: 10px;
`;

const First = styled.div`
    position: absolute;
    top: 10px;
    left: 10px;
    height: 27px;
`;

const Second = styled.div`
    position: absolute;
    top: 37px;
    left: 10px;
    height: 27px;
`;

const Third = styled.div`
    position: absolute;
    top: 64px;
    left: 10px;
    height: 27px;
`;

const Text = styled.span`
    margin: 10px 0 0 10px;
    color: #05386B;
    font-weight: bold;
    font-size: 20px;
    text-align: left;
`;


const helpIcons = () => {
    return(
        <StyledDiv>
            <First>
                <MatrixField 
                    value={1}
                    height={25}
                    color="#edf5e1"
                />
                <Text>Start</Text>
            </First>
            <Second>
                <MatrixField 
                    value={2}
                    height={25}
                    color="black"
                />
                <Text>Finish</Text>
            </Second>
            <Third>
                <MatrixField 
                    value={3}
                    height={25}
                    color="#379683"
                />
                <Text>Barrier</Text>
            </Third>
        </StyledDiv>
    )
}

export default helpIcons;