import React from "react";

interface FlexContainerProps {
  children?: JSX.Element[] | JSX.Element;
  className?: string;
}

const FlexContainer = (props: FlexContainerProps) => {
  return (
    <div className={`flex flex-col lg:flex-row ${props.className}`}>
      {props.children}
    </div>
  );
};

export default FlexContainer;
