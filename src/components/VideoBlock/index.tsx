import { withTranslation } from "react-i18next";
import { Slide } from "react-awesome-reveal";
import VideoPlayer from "../../common/VideoPlayer";

interface VideoBlockI {
  url: string;
  title: string;
}

const VideoBlock = ({ url }: VideoBlockI) => {
  return (
    <Slide direction="up">
      <VideoPlayer url={url}></VideoPlayer>
    </Slide>
  );
};

export default withTranslation()(VideoBlock);
