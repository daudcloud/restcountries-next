import styled from "styled-components";

const StyledInput = styled.div`
  background-color: ${(props) =>
    props.dark ? "var(--elem-dark)" : "var(--elem-light)"};
  color: ${(props) => (props.dark ? "var(--input-dark)" : "var(--text-light)")};
  display: flex;
  align-items: center;
  padding: 1.2em 2.2em;
  border-radius: 0.3rem;
  width: 45%;
  box-shadow: 0 0 1em hsla(0, 0%, 0%, 0.2);
  gap: 1.3rem;
  form {
    width: 100%;
  }
  input {
    width: 100%;
    background: transparent;
    border: none;
    outline: none;
    color: inherit;
    font-family: inherit;
    font-size: inherit;
  }
`;

export default StyledInput;
