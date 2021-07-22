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
        <SvgIcon src={src} width="30px" height="30px" />
      </a>
    );
  };

  return (
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
            href="https://www.facebook.com/RNB-Digi-Drive-CO-101622705548356"
            src="facebook.svg"
          />
          <SocialLink
            href="https://www.youtube.com/channel/UCgl9dJZkFoxV-jZQVmcxmXg "
            src="youtube.svg"
          />
          <SocialLink
            href="https://www.linkedin.com/company/rnb-digi-drive-co"
            src="linkedin.svg"
          />
        </FooterContainer>
      </WaveRow>
      <b style={{ color: "red", paddingLeft: "2rem" }}>IMPORTANT NOTE :</b> This
      site was created as a part of the final project of NDTHRD ONLINE Batch -
      02 provided by the Chartered Institute of Personal Management based in Sri
      Lanka. Created for educational purposes only
    </Extra>
  );
};

export default withTranslation()(Footer);
