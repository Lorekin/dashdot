import { FC } from 'react';
import ParallaxTilt from 'react-parallax-tilt';
import styled from 'styled-components';
import { useIsMobile } from '../services/mobile';

type SCProps = GlassPaneProps & { mobile: boolean };

const TiltContainer = styled(ParallaxTilt)<SCProps>`
  display: flex;
  min-width: ${({ mobile }) => (mobile ? '300px' : '400px')};
  min-height: 360px;

  flex-basis: calc(${props => (props.grow ?? 1) * 33}% - 100px);
  flex-grow: 1;

  backdrop-filter: blur(20px);
  background-color: ${({ theme }) => theme.colors.surface}44;
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.colors.text}33;

  &:hover {
    z-index: 2;
  }
`;

type GlassPaneProps = {
  grow?: number;
  disableTilt?: boolean;
};

const GlassPane: FC<GlassPaneProps> = props => {
  const isMobile = useIsMobile();

  return (
    <TiltContainer
      mobile={isMobile}
      tiltEnable={!props.disableTilt && !isMobile}
      transitionSpeed={1500}
      tiltMaxAngleX={4}
      tiltMaxAngleY={4}
      grow={props.grow ?? 1}
    >
      {props.children}
    </TiltContainer>
  );
};

export default GlassPane;
