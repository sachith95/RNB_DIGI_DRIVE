import { lazy } from "react";
import IntroContent from "../../content/IntroContent.json";
import AboutContent from "../../content/AboutContent.json";
import ProductOne from "../../content/ProductOne.json";
import ProductTwo from "../../content/ProductTwo.json";
import ProductThree from "../../content/ProductThree.json";
import ContactContent from "../../content/ContactContent.json";
import TestimonialContent from "../../content/TestimonialContent.json";

const Contact = lazy(() => import("../../components/ContactForm"));
const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));
const ContentBlock = lazy(() => import("../../components/ContentBlock"));
const VideoBlock = lazy(() => import("../../components/VideoBlock"));
const TestimonialBlock = lazy(() => import("../../components/Testimonial"));

const Home = () => {
  return (
    <Container>
      <ScrollToTop />
      <ContentBlock
        type="right"
        title={IntroContent.title}
        content={IntroContent.text}
        button={IntroContent.button}
        icon="creative-thinking.svg"
        id="intro"
      />
      <VideoBlock
        title="test"
        url="https://www.youtube.com/embed/_tuLd3h19Fw?controls=0"
      ></VideoBlock>
      <ContentBlock
        type="left"
        title={AboutContent.title}
        content={AboutContent.text}
        section={AboutContent.section}
        icon="team-meeting-illustration.svg"
        id="product"
      />
      {/* <MiddleBlock
        title={MiddleBlockContent.title}
        content={MiddleBlockContent.text}
        button={MiddleBlockContent.button}
      /> */}
      <ContentBlock
        type="right"
        title={ProductOne.title}
        content={ProductOne.text}
        icon="remote-team.svg"
        id="one"
      />
      <ContentBlock
        type="left"
        title={ProductTwo.title}
        content={ProductTwo.text}
        icon="handshake-2.svg"
        id="product"
      />
      <ContentBlock
        type="right"
        title={ProductThree.title}
        content={ProductThree.text}
        icon="viral.svg"
        id="product"
      />
      <TestimonialBlock
        title={TestimonialContent.title}
        contentArray={TestimonialContent.testimonials}
      ></TestimonialBlock>
      <Contact
        title={ContactContent.title}
        content={ContactContent.text}
        id="contact"
      />
    </Container>
  );
};

export default Home;
