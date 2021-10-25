import styled from "styled-components";
import Input from "../../conponents/input";

export const PageWrapper = styled.div`
    width: 100%;
    max-width: 120rem;
    margin: 4rem auto;
`;

export const StyledInput = styled(Input)`
 position: relative;
  width: 40rem;
`;

export const PageContent = styled.div`
  margin: 2rem;
  position: relative;
`;

export const PageLoading = styled.div`
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  
`;
export const NotFounded = styled.div`
  margin: 3rem auto;
  width: 100%;
  text-align: center;
  
`;

export const SearchWrapper = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  margin: auto;
`;