import styled from "styled-components";

const StyledCountry = styled.div`
  background-color: ${(props) =>
    props.dark ? "var(--elem-dark)" : "var(--elem-light)"};
  border-radius: 0.2rem;

  .flag {
    position: relative;
    height: 20vh;
    width: 100%;
    background: white;
  }
`;

export default StyledCountry;
