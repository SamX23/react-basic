import React from "react";
import styled from "@emotion/styled";

const Container = ({ children }) => {
  const ComponentContainer = styled.div`
    margin: 5vh;
  `;
  return (
    <ComponentContainer className="Register container">
      {children}
    </ComponentContainer>
  );
};

export default Container;
