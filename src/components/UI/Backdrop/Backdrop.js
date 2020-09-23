import React from "react";
import * as style from "./style";

const backdrop = (props) =>
  props.show ? (
    <style.StyledDiv onClick={props.clicked} />
  ) : null;

export default backdrop;
