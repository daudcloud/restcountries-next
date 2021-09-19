import styled from "styled-components";

const StyledRegion = styled.div`
  background: ${(props) =>
    props.dark ? "var(--elem-dark)" : "var(--elem-light)"};
  align-self: stretch;
  display: flex;
  align-items: center;
  border-radius: 0.3rem;
  cursor: pointer;
  position: relative;
  box-shadow: 0 0 1em hsla(0, 0%, 0%, 0.2);

  .select {
    padding: 0 1.7em;
  }

  span {
    margin-left: 3rem;
  }

  .option {
    position: absolute;
    bottom: -5px;
    left: 0;
    right: 0;
    transform: translateY(100%);
    background-color: ${(props) =>
      props.dark ? "var(--elem-dark)" : "var(--elem-light)"};
    border-radius: 0.3rem;
    padding: 1em 0;

    li {
      list-style: none;
      padding: 0.2em 1.7em;
      &:hover {
        background-color: ${(props) =>
          props.dark ? "var(--hover-dark)" : "var(--hover-light)"};
      }

      &.active {
        background-color: ${(props) =>
          props.dark ? "var(--active-dark)" : "var(--active-light)"};
      }
    }
  }
`;

export default StyledRegion;
