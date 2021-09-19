import Image from "next/image";
import { useTheme } from "../../context/ThemeContext";
import Container from "../../pages/styles";
import StyledLayout from "./styles";

export default function Layout({ children }) {
  const [dark, setDark] = useTheme();
  return (
    <StyledLayout dark={dark ? true : false}>
      <header>
        <Container>
          <div className="header">
            <h1 className="title">Where in the world</h1>
            <div
              className="toggle-dark"
              onClick={() => setDark((prevDark) => !prevDark)}
            >
              {dark ? (
                <i className="fas fa-moon"></i>
              ) : (
                <i className="far fa-moon"></i>
              )}
              Dark Mode
            </div>
          </div>
        </Container>
      </header>
      <main>
        <Container>{children}</Container>
      </main>
    </StyledLayout>
  );
}
