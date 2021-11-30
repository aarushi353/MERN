import React from "react";
import MyParagraph from "./MyParagraph";
const DemoOutput = (props) => {
  return <MyParagraph>{props.show ? "This is it" : ""}</MyParagraph>;
};

export default React.memo(DemoOutput);
//If props value doesn'y change, component evaluation skips. Hence, save time :)
