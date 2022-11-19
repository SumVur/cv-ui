import styled from "styled-components";
import {TextInterface} from "@components/styles/api";

export const H1 = styled.h1`
  color: ${(props: TextInterface) => props.color};
`;
export const H2 = styled.h2`
  color: ${(props: TextInterface) => props.color};
`;
export const H3 = styled.h3`
  color: ${(props: TextInterface) => props.color};
`;