import Link from "next/link";
import Image from "next/image";
import StyledCountry from "./styles";
import { useTheme } from "../../context/ThemeContext";

const Country = ({ country }) => {
  const [dark, setDark] = useTheme();
  return (
    <StyledCountry dark={dark}>
      <div className="flag">
        <Image src={country.flag} layout="fill" objectFit="cover" />
      </div>
      <div className="info">
        <Link href={`/details/${country.name.toLowerCase().replace(" ", "-")}`}>
          <a>{country.name}</a>
        </Link>
      </div>
    </StyledCountry>
  );
};

export default Country;
