import Link from "next/link";

const Country = ({ country }) => {
  return (
    <Link href={`/details/${country.name.toLowerCase().replace(" ", "-")}`}>
      {country.name}
    </Link>
  );
};

export default Country;
