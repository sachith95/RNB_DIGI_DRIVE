import { Carousel } from "antd";
import { withTranslation } from "react-i18next";
import { Container, Content, ContentWrapper } from "./styles";

interface Testimonials {
  name: string;
  title:string;
  content: string
}

interface Props {
  title: string;
  contentArray: Array<Testimonials>;
}

const TestimonialBlock = ({ title, contentArray }: Props) => {
  var slides = [];
  for (var i = 0; i < contentArray.length; i++) {
    const {name,content,title} = contentArray[i]
    slides.push(
        <ContentWrapper>
            <b><p style={{fontSize: 25 }}>{name}</p></b>
            <p style={{fontSize: 15 }}>{title}</p>
            <Content style={{color: "#cd9a2b" }}>{content}</Content>
        </ContentWrapper>
    );
  }
  return (
    <Container>
      <h6>{title}</h6>
      <Carousel dots autoplay>{slides}</Carousel>
    </Container>
  );
};

export default withTranslation()(TestimonialBlock);
