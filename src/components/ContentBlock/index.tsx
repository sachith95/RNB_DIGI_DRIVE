import LeftContentBlock from "./LeftContentBlock";
import RightContentBlock from "./RightContentBlock";
import RightContentCardBlock from "./RightContentCardBlock";
import { ContentBlockProps } from "./types";

const ContentBlock = (props: ContentBlockProps) => {
  if (props.type === "left") return <LeftContentBlock {...props} />;
  if (props.type === "right") return <RightContentBlock {...props} />;
  if (props.type === "rightc") return <RightContentCardBlock {...props} />;
  return null;
};

export default ContentBlock;
