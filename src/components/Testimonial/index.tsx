import { Carousel } from "antd";
import { withTranslation } from "react-i18next";
import { Container, Content, ContentWrapper } from "./styles";

interface Testimonials {
  name: string;
  content: string
}

interface Props {
  title: string;
  contentArray: Array<Testimonials>;
}

const TestimonialBlock = ({ title, contentArray }: Props) => {
  var slides = [];
  for (var i = 0; i < contentArray.length; i++) {
    const {name,content} = contentArray[i]
    slides.push(
        <ContentWrapper>
            <h6>{name}</h6>
            <Content>{content}</Content>
        </ContentWrapper>
    );
  }
  return (
    <Container>
      <h6>{title}</h6>
      <Carousel autoplay>{slides}</Carousel>
    </Container>
  );
};

export default withTranslation()(TestimonialBlock);
