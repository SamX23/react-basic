import React from "react";
import { Spinner } from "react-bootstrap";
import styled from "@emotion/styled";

function Loading() {
  const LoadingSpinner = styled(Spinner)`
    position: fixed;
    left: 50%;
    top: 50%;
    z-index: 9999;
  `;
  return (
    <LoadingSpinner animation="border" variant="primary" role="status">
      <span className="sr-only">Loading...</span>
    </LoadingSpinner>
  );
}

export default Loading;
