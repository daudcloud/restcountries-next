import styled from "styled-components";

const StyledCountry = styled.div`
  background-color: ${(props) =>
    props.dark ? "var(--elem-dark)" : "var(--elem-light)"};
  border-radius: 0.2rem;
  box-shadow: 0 0 1em hsla(0, 0%, 0%, 0.2);
  border-radius: 0.3rem;
  overflow: hidden;

  .flag {
    position: relative;
    height: 23vh;
    width: 100%;
  }
`;

export default StyledCountry;
