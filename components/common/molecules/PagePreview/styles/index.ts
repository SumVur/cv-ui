import styled from "styled-components";

interface BlurInterface {
    isHover: boolean
}

export const Blur = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  backdrop-filter: ${(p: BlurInterface) => p.isHover ? 'none' : 'blur(16px)'};
  -webkit-backdrop-filter: blur(50px);
  transition: all 0.5s;
`;