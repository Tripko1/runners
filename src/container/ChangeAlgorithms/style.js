import styled from "styled-components";

export const StyledDiv = styled.div`
    width: 80%;
    margin: 0 auto;
`;

export const StyledH1 = styled.h1`
    text-align: center;
    color: #05386b;
`;

export const StyledDivCenter = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Top = styled.div`
    margin-top: 85px;
`;

export const StyledI = styled.i`
    position: absolute;
    top: 20px;
    right: 20px;
    color: #944317;
    cursor: pointer;

    &:hover{
        color: tomato;
    }
`;

export const StyledButton = styled.button`
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

export const Field = styled.div`
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