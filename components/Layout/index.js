import Image from "next/image";
import { useTheme } from "../../context/ThemeContext";
import Container from "../../pages/styles";
import StyledLayout from "./styles";
import Link from "next/link";

export default function Layout({ children }) {
  const [dark, setDark] = useTheme();
  return (
    <StyledLayout dark={dark ? true : false}>
      <header>
        <Container>
          <div className="header">
            <Link href="/">
              <a className="title">Where in the world?</a>
            </Link>
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
