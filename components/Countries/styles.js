import styled from "styled-components";

const StyledCountries = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 4.5rem;

  @media (max-width: 900px) {
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media (max-width: 650px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 450px) {
    grid-template-columns: 1fr;
  }
`;

export default StyledCountries;
