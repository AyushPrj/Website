import LeftContentBlock from "./LeftContentBlock";
import LeftVideoBlock from "./LeftVideoBlock";
import RightContentBlock from "./RightContentBlock";
import { ContentBlockProps } from "./types";

const ContentBlock = (props: ContentBlockProps) => {
  if (props.type === "left") return <LeftContentBlock {...props} />;
  if (props.type === "right") return <RightContentBlock {...props} />;
  if (props.type === "leftvideo") return <LeftVideoBlock {...props} />;
  return null;
};

export default ContentBlock;
