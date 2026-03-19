import styled, { css } from 'styled-components'
import { Col, Flex } from 'antd'
import T from 'src/components/Typography'

export const LoveStoryWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 8px 0 32px;
  background-color: #fff9f2;
`

export const LoveStoryTitle = styled(Flex)`
  margin-bottom: 0;
`

export const LoveStoryCol = styled(Col)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & > img {
    max-width: 380px;
    width: 100%;
    margin: 32px 0 -24px 0;
    padding-right: 32px;
    transform: rotateZ(0);
  }

  & > p {
    max-width: 500px;
    width: 100%;
    text-align: center;
  }

  ${({ $right }) =>
    $right &&
    css`
      & > img {
        padding-left: 34px;
        padding-right: 0;
      }
    `}
`

export const LoveStoryLine = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  height: 100%;
`

export const ImageContent = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: all 0.3s;
`
export const ImageLabel = styled(T.Text)`
  position: absolute;
  bottom: -77px;
  right: 1px;
  line-height: 200px;
  font-size: 70px;
  font-family: 'Poppins' !important;
  font-weight: 500;
  letter-spacing: -5px;
  color: #fff9f2;
  z-index: 2;

  @media screen and (max-width: 400px) {
    font-size: 52px;
    bottom: -83px;
    right: 1px;
    letter-spacing: -3px;
  }
`

export const ImageWrapper = styled.div`
  position: relative;
  margin-bottom: 32px;
  width: 100%;
  overflow: hidden;
  cursor: pointer;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(117, 19, 23, 0.15);
    z-index: 1;
    transition: background 0.3s;
  }

  &:hover {
    &::after {
      background: transparent;
    }

    ${ImageContent} {
      transform: scale(1.05);
    }
  }
`
