import { Row } from "antd";
import { withTranslation } from "react-i18next";
import { Card, Avatar } from "antd";
import { CardContentBlockImageProps } from "./types";
import { Fade } from "react-awesome-reveal";
import { CardBlockContainer, CenterH1 } from "./styles";

const CardContentBlockImage = ({ title, content, id }: CardContentBlockImageProps) => {
  const card = (): any => {
    let myArray = [];
    const { Meta } = Card;
    for (let i = 0; i < content.length; i++) {
      myArray.push(
          <Card
            style={{ width: "45%", margin: 5 }}
          >
            <p>{content[i].quote}</p>
            <Meta
              avatar={
                <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
              }
              title={content[i].name}
              description={content[i].title+'('+ content[i].about+')'}
            />
          </Card>
      );
    }
    return myArray;
  };

  return (
    <CardBlockContainer>
      <Fade direction="right">
        <CenterH1>Our Leadership</CenterH1>
        <Row justify="center" align="middle" id={id}>
          {card()}
        </Row>
      </Fade>
    </CardBlockContainer>
  );
};

export default withTranslation()(CardContentBlockImage);
