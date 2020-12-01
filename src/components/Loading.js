import React from "react";
import styled from "@emotion/styled";
import reactLogo from "../assets/reactLogo.svg";

// import { Spinner } from "react-bootstrap";
//   const LoadingSpinner = styled(Spinner)`
//     position: fixed;
//     left: 50%;
//     top: 50%;
//     z-index: 9999;
//   `;
//   return (
//     <LoadingSpinner animation="border" variant="primary" role="status">
//       <span className="sr-only">Loading...</span>
//     </LoadingSpinner>
//   );
// }

function Loading() {
  const ReactLoading = styled("div")`
    background-color: #282c34;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
  `;

  const ReactLogo = styled("img")`
    height: 40vmin;
    pointer-events: none;

    @media (prefers-reduced-motion: no-preference) {
      animation: logo__spin infinite 2s linear;
    }

    @keyframes logo__spin {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    }
  `;

  return (
    <ReactLoading>
      <ReactLogo src={reactLogo} alt="logo" />
    </ReactLoading>
  );
}

export default Loading;
