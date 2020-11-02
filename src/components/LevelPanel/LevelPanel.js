import React from 'react';
import * as style from "./style";

const levelPanel = (props) => {
    const levels = props.levelsArray.map(item => (
        <style.StyleCenter key={item}>
            <style.StyleSpan>{"Level "+item}</style.StyleSpan>
            <style.StyledButton alt="aaa" onClick={() => props.openLevel(item)}>
                <style.StyledI className="fa fa-spinner"/>
            </style.StyledButton>
        </style.StyleCenter>
    ))
    return(
        <style.StyledDiv>
            <style.StyledDivContent>
                <style.StyleHeader>
                    <style.StyledH1>DATA SCREEN</style.StyledH1>
                </style.StyleHeader>
                <style.StyledDivLevels>
                    {levels}
                </style.StyledDivLevels>
            </style.StyledDivContent>
        </style.StyledDiv>
    )
}

export default levelPanel;