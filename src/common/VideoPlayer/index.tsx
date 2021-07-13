import { StyledContainer, Stlyediframe } from "./styles";
import { VideoProps } from "../types";

const VideoPlayer = ({ url }: VideoProps) => (
  <StyledContainer>
    <Stlyediframe
      src={url}
    ></Stlyediframe>
  </StyledContainer>
);

export default VideoPlayer;
