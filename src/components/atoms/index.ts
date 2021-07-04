import styled from "styled-components";

export const Gap = styled.div<{
  height?: number | string,
  width?: number | string,
}>`
  height: ${({height}) => height || "0.25rem"};
  width: ${({width}) => width || "0.25rem"};
`;