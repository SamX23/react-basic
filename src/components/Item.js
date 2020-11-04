import React from "react";
import styled from "@emotion/styled";

export default function Item({ item }) {
  const LiItem = styled.li`
    text-decoration: none;
  `;
  return <LiItem>{item}</LiItem>;
}
