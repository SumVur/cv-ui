import styled from "styled-components";

interface FlexDivInterface {
    width?: string
}

export const FlexDiv = styled.div`
  display: flex;
  ${(props: FlexDivInterface) => props.width? `width:${props.width};`:""};
`;