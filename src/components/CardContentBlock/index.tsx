import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import { Card } from "antd";
import { CardContentBlockProps } from "./types";
import { Fade } from "react-awesome-reveal";
import { CardBlockContainer, ContentWrapper, CenterH1 } from "./styles";

const CardContentBlock = ({ title, content, id }: CardContentBlockProps) => {
  const card = (): any => {
    let myArray = [];
    for (let i = 0; i < content.length; i++) {
      myArray.push(
        <Col lg={8} md={8} sm={11} xs={24}>
          <Card
            title={<p style={{ color: "#cd9a2b", alignContent: "center"}}>{content[i].title}</p>}
            hoverable
            style={{ width: 300, height: 300, textAlign: "center",  backgroundColor: "rgba(0, 0, 0, 0.85)", borderColor: "#cd9a2b"}}
          >
            <ContentWrapper>
              <p>{content[i].content}</p>
            </ContentWrapper>
          </Card>
        </Col>
      );
    }
    return myArray;
  };

  return (
    <CardBlockContainer>
      <Fade direction="right">
        <CenterH1>{title}</CenterH1>
        <Row justify="space-between" align="middle" id={id}>
          {card()}
        </Row>
      </Fade>
    </CardBlockContainer>
  );
};

export default withTranslation()(CardContentBlock);
