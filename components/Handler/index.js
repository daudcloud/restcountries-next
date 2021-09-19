import { useTheme } from "../../context/ThemeContext";
import Input from "../Input";
import Region from "../Region";
import StyledHandler from "./styles";

const Handler = ({ region, setRegion }) => {
  const [dark, setDark] = useTheme();
  return (
    <StyledHandler dark={dark ? true : false}>
      <Input region={region} dark={dark} />
      <Region region={region} setRegion={setRegion} dark={dark} />
    </StyledHandler>
  );
};

export default Handler;
