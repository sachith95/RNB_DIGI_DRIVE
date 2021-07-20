import { withTranslation } from "react-i18next";
import { SvgIcon } from "../../common/SvgIcon";

import {
  NavLink,
  Extra,
  LogoContainer,
  FooterContainer,
  WaveRow,
} from "./styles";

interface SocialLinkProps {
  href: string;
  src: string;
}

const Footer = () => {
  const SocialLink = ({ href, src }: SocialLinkProps) => {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        key={src}
        aria-label={src}
      >
        <SvgIcon src={src} width="25px" height="25px" />
      </a>
    );
  };

  return (
    <>
      <Extra>
        <WaveRow
          justify="space-between"
          align="middle"
          style={{ paddingTop: "1rem" }}
        >
          <NavLink to="/">
            <LogoContainer aria-label="homepage">
              <SvgIcon src="logow.svg" width="100%" height="100%" />
            </LogoContainer>
          </NavLink>
          <FooterContainer>
            <SocialLink
              href="https://github.com/Adrinlol/create-react-app-adrinlol"
              src="facebook.svg"
            />
            <SocialLink
              href="https://twitter.com/Adrinlolx"
              src="twitter.svg"
            />
            <SocialLink
              href="https://www.linkedin.com/in/lasha-kakabadze/"
              src="linkedin.svg"
            />
          </FooterContainer>
        </WaveRow>
      </Extra>
    </>
  );
};

export default withTranslation()(Footer);
