import { StyledContainer } from "./styles";
import { ContainerProps } from "../types";

const Container = ({ border, children ,color }: ContainerProps) => (
  <StyledContainer style={{ backgroundColor: color }} border={border}>{children}</StyledContainer>
);

export default Container;
