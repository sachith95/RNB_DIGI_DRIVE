import { lazy } from "react";
import IntroContent from "../../content/IntroContent.json";
import ProductsContent from "../../content/ProductsContent.json";
import AboutContent from "../../content/AboutContent.json";
import LeadershipContent from "../../content/LeadershipContent.json";
import ProductOne from "../../content/ProductOne.json";
import ProductTwo from "../../content/ProductTwo.json";
import ContactContent from "../../content/ContactContent.json";
import TestimonialContent from "../../content/TestimonialContent.json";

const Contact = lazy(() => import("../../components/ContactForm"));
const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));
const ContentBlock = lazy(() => import("../../components/ContentBlock"));
const VideoBlock = lazy(() => import("../../components/VideoBlock"));
const TestimonialBlock = lazy(() => import("../../components/Testimonial"));
const CardBlock = lazy(() => import("../../components/CardContentBlock"));
const CardBlockImage = lazy(
  () => import("../../components/CardContentBlockImage")
);

const Home = () => {
  return (
    <Container>
      <ScrollToTop />
      <ContentBlock
        type="right"
        title={IntroContent.title}
        sub={IntroContent.sub}
        content={IntroContent.text}
        button={IntroContent.button}
        icon="creative-thinking.svg"
        id="intro"
      />
      <CardBlock
        title={AboutContent.title}
        content={AboutContent.content}
        id="about"
      />
      <CardBlockImage
        title={LeadershipContent.title}
        content={LeadershipContent.content}
        id="leadership"
      />
      <VideoBlock
        title="RNB Digi-Drive Co. Intro"
        url="https://www.youtube.com/embed/cxnulS1Uqc8"
      ></VideoBlock>
      <ContentBlock
        type="left"
        title={ProductsContent.title}
        content={ProductsContent.text}
        fontstlyes={ProductsContent.fontstlyes}
        section={ProductsContent.section}
        icon="team-meeting-illustration.svg"
        id="product"
      />
      <ContentBlock
        type="left"
        title={ProductOne.title}
        content={ProductOne.text}
        fontstlyes={ProductOne.fontstlyes}
        section={ProductOne.section}
        icon="remote-team.svg"
        id="one"
      />
      <ContentBlock
        type="rightc"
        title={ProductTwo.title}
        content={ProductTwo.text}
        section={ProductTwo.section}
        icon="handshake-2.svg"
        id="two"
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
