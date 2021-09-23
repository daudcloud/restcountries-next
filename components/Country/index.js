import Link from "next/link";
import Image from "next/image";
import StyledCountry from "./styles";
import { useTheme } from "../../context/ThemeContext";

const Country = ({ country }) => {
  const [dark, setDark] = useTheme();
  return (
    <StyledCountry dark={dark}>
      <div className="flag">
        <Image
          src={country.flags[0]}
          layout="fill"
          alt={country.name.common}
          objectFit="cover"
        />
      </div>
      <div className="info">
        <Link
          href={`/details/${country.name.common
            .toLowerCase()
            .replace(" ", "-")}`}
        >
          <a>{country.name.common}</a>
        </Link>
      </div>
    </StyledCountry>
  );
};

export default Country;
