import styled from 'styled-components'

export const EngagementWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`

export const EngagementInner = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  transition: all 0.3s;
`

export const EngagementContainer = styled.div`
  position: relative;
  width: 100%;
  padding-top: 85%; /* 4:3 */
`

export const EngagementContent = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16% 0 15%;

  & h2 {
    font-size: 22px;
  }

  & p {
    font-size: 14px;
  }
`

export const EngagementPlayFrame = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  width: auto;
  height: 90%;
  transform: translate(-50%, -50%);
`

export const EngagementBackground = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${({ $background }) => $background});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  /* filter: grayscale(25%); */
  transition: all 0.3s;
`

export const VideoPlayButton = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80px;
  height: 80px;
  color: white;
  transition: all 0.3s;
  cursor: pointer;
  z-index: 2;

  &:hover {
    width: 100px;
    height: 100px;

    & ~ ${EngagementBackground} ${EngagementInner} {
      background-color: rgba(0, 0, 0, 0.35);
    }
  }
`
