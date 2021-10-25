import styled from "styled-components";

import * as colors from "../../theme/colors";
import { P_B } from "../../theme/typography";

export const InputControl = styled.div`
  border: .1rem solid ${colors.cloud0};
  border-radius: .3rem;
  height: 4rem;
  display: flex;
  max-width: 60rem;
  align-items: center;
  background-color: ${colors.white};
`;

export const InputBeforeIcon = styled.div`
  padding: 0 1rem;
  border-right: .1rem solid ${colors.cloud0};
  svg{
    fill: ${colors.cloud1}
  }
`;

export const StyledInput = styled.input`
  border:none;
  margin: 1rem;
  ${P_B};
  flex:1;
  outline: none;
  width: 100%;
  height: 100%;
  padding: 0;
`;