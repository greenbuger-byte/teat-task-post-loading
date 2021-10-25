import styled from "styled-components";

import * as colors from "../../theme/colors";
import {P_R, H2, Label_L} from "../../theme/typography";

export const CardWrapper = styled.div`
  box-shadow: ${colors.white};
  border: .1rem solid ${colors.cloud0};
  background-color: ${colors.white};
  padding: 1.8rem;
  border-radius: .1rem;
  ${P_R};
  box-shadow: ${colors.shadow};
  margin: 1rem;
`;

export const CardTitle = styled.div`
  color: ${colors.sky};
  ${H2};
`;

export const CardBody = styled.div`
  ${P_R};
  margin-top: 1.2rem;
  color: ${colors.primary_text};
`;

export const CardAuthor = styled.div`
  ${Label_L};
  margin-top: 3rem;
  color: ${colors.secondary_text};
`;