import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import { Slide } from "react-awesome-reveal";
import VideoPlayer from "../../common/VideoPlayer";
import { MiddleBlockSection, Content, ContentWrapper } from "./styles";

interface VideoBlock {
  url: string;
  title: string;
}

const VideoBlock = ({ url }: VideoBlock) => {
  return (
    <Slide direction="up">
      <VideoPlayer url={url}></VideoPlayer>
    </Slide>
  );
};

export default withTranslation()(VideoBlock);
