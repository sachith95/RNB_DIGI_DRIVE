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
            style={{ width: "45%", margin: 5, minHeight: "290px",  backgroundColor: "rgba(0, 0, 0, 0.85)", borderColor: "#cd9a2b" }}
          >
            <p style={{ color: "#cd9a2b" }}>{content[i].quote}</p>
            <Meta
              avatar={
                <Avatar src={`img/svg/${content[i].icon}`}  size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100 }} />
              }
              title={<p style={{ fontSize: 14}}>{content[i].name}</p>}
              description={<p style={{ alignContent: "center", fontSize: 12}}>{content[i].title+'('+ content[i].about+')'}</p>}
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
