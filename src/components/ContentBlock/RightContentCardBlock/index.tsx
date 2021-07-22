import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import { Card } from "antd";
import { ContentBlockProps } from "../types";
import { SvgIcon } from "../../../common/SvgIcon";
import { Fade } from "react-awesome-reveal";
import {
  RightBlockCardContainer,
  Content,
  ContentWrapper,
  ServiceWrapper,
  MinTitle,
  MinPara,
} from "./styles";

const RightContentCardBlock = ({ title, content, section, id }: ContentBlockProps) => {
  return (
    <RightBlockCardContainer>
      <Fade direction="right">
        <Row justify="space-between" align="middle" id={id}>
          <Col lg={11} md={11} sm={11} xs={24}>
            <ContentWrapper>
              <b>
                <p style={{color: "#cd9a2b"}}>{title}</p>
              </b>
              <Content>
                <ServiceWrapper>
                  <Row justify="space-between">
                    {typeof section === "object" &&
                      section.map((item: any, id: number) => {
                        return (
                          <Col key={id} span={11}>
                            <SvgIcon
                              src={item.icon}
                              width="60px"
                              height="60px"
                            />
                            <MinTitle>{item.title}</MinTitle>
                            <MinPara>{item.content}</MinPara>
                          </Col>
                        );
                      })}
                  </Row>
                </ServiceWrapper>
              </Content>
            </ContentWrapper>
          </Col>
          <Col lg={11} md={11} sm={12} xs={24}>
            <Card style={{ backgroundColor: "rgb(249 248 245)" }} title="OUR NEW NORMAL">
              <p>
                "Over the course of the current health crisis we’ve adapted the
                way we work to allow our clients to continue getting the same
                great quality training, whilst in a safe environment. RNB
                provided high quality trainings online where you get the feel of
                a classroom course but from the comfort of your own home. RNB
                Learning Portal is where we upload all the Bespoke trainings we
                delivered in online and give one-year access for the courses to
                our customers as online instructor-led, where they can learn,
                re-learn anytime they can!!! "
              </p>
            </Card>
          </Col>
        </Row>
      </Fade>
    </RightBlockCardContainer>
  );
};

export default withTranslation()(RightContentCardBlock);
