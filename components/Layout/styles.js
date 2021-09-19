import styled from "styled-components";

const StyledLayout = styled.div`
  header {
    color: ${(props) =>
      props.dark ? "var(--text-dark)" : "var(--text-light)"};
    background: ${(props) =>
      props.dark ? "var(--elem-dark)" : "var(--elem-light)"};
    box-shadow: 0 0 0.5em
      ${(props) =>
        props.dark ? "hsla(0, 0%, 0%, 0.2)" : "hsla(0, 0%, 50%, 0.2)"};
    position: relative;
    z-index: 10;
    transition: all 0.1s linear;
  }
  main {
    background: ${(props) =>
      props.dark ? "var(--bg-dark)" : "var(--bg-light)"};
    color: ${(props) =>
      props.dark ? "var(--text-dark)" : "var(--text-light)"};
    min-height: 100vh;
    height: 100%;
    transition: all 0.1s linear;
  }
  .header {
    padding: 1.6em 0;
    display: flex;
    justify-content: space-between;
    align-items: center;

    h1 {
      font-size: 1.5rem;
    }
  }
  .toggle-dark {
    display: flex;
    gap: 1rem;
    align-items: center;
    cursor: pointer;
    font-weight: 600;
  }
`;

export default StyledLayout;
