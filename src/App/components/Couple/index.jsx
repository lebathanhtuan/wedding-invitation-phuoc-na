import { useState } from 'react'
import { Row, Col, Flex } from 'antd'
import Lightbox from 'yet-another-react-lightbox'
import { useTranslation } from 'react-i18next'
// import optional lightbox plugins
import Fullscreen from 'yet-another-react-lightbox/plugins/fullscreen'
import Slideshow from 'yet-another-react-lightbox/plugins/slideshow'
import Thumbnails from 'yet-another-react-lightbox/plugins/thumbnails'
import Zoom from 'yet-another-react-lightbox/plugins/zoom'
import 'yet-another-react-lightbox/plugins/thumbnails.css'

import Container from 'src/components/Container'
import T from 'src/components/Typography'

import coupleLeftImage from 'src/assets/photos/ROM_9491-optimised.jpg'
import coupleRightImage from 'src/assets/photos/ROM_9246-optimised.jpg'
import coupleBackgroundImage from 'src/assets/photos/ROM_9123-optimised.jpg'
import coupleMiddleImage from 'src/assets/images/CoupleMiddle.png'
import coupleTextImage from 'src/assets/images/CoupleText.png'
import coupleBorderImage from 'src/assets/images/CoupleBorder.png'
import coupleBorderLeftImage from 'src/assets/images/CoupleBorderLeft.png'
import coupleBorderRightImage from 'src/assets/images/CoupleBorderRight.png'
import coupleBorderBottomImage from 'src/assets/images/CoupleBorderBottom.png'
import image1 from 'src/assets/photos/ROM_9491-optimised.jpg'
import image2 from 'src/assets/photos/ROM_9246-optimised.jpg'
import image3 from 'src/assets/photos/ROM_9274-optimised.jpg'
import image4 from 'src/assets/photos/ROM_9311-optimised.jpg'
import image5 from 'src/assets/photos/ROM_9397-optimised.jpg'
import image6 from 'src/assets/photos/ROM_9432-optimised.jpg'
import image7 from 'src/assets/photos/ROM_9448-optimised.jpg'
import image8 from 'src/assets/photos/ROM_9465-optimised.jpg'

import * as S from './styled'

function Couple() {
  const [lightboxActiveIndex, setLightboxActiveIndex] = useState(-1)
  const { t } = useTranslation()

  return (
    <S.CoupleWrapper id="couple" $background={coupleBackgroundImage}>
      <Container>
        <Flex align="center" justify="center" style={{ marginBottom: 8 }}>
          <S.TextImage src={coupleTextImage} alt="" />
        </Flex>
        <Row gutter={[16, 16]} align={{ lg: 'middle', xs: 'stretch' }}>
          <Col span={24}>
            <S.CoupleRow>
              <Col span={10}>
                <Flex align="center" justify="center" vertical>
                  <T.Text size="xl" color="light">
                    {t('couple.groom.label')}
                  </T.Text>
                  <T.Text color="light" align="center">
                    {t('couple.groom.family.father')}
                    <br />
                    {t('couple.groom.family.mother')}
                  </T.Text>
                </Flex>
              </Col>
              <Col span={4}>
                <Flex align="center" justify="center" vertical>
                  <S.MiddleImage src={coupleMiddleImage} alt="" />
                </Flex>
              </Col>
              <Col span={10}>
                <Flex align="center" justify="center" vertical>
                  <T.Text size="xl" color="light">
                    {t('couple.bride.label')}
                  </T.Text>
                  <T.Text color="light" align="center">
                    {t('couple.bride.family.father')}
                    <br />
                    {t('couple.bride.family.mother')}
                  </T.Text>
                </Flex>
              </Col>
            </S.CoupleRow>
          </Col>
          <Col span={12}>
            <Flex align="center" justify="center" vertical>
              <S.ImageWrapper>
                <S.ImageContainer>
                  <S.ImageContent $background={coupleBorderImage}>
                    <S.ImageItem
                      src={coupleLeftImage}
                      alt=""
                      style={{ backgroundSize: '150%' }}
                      onClick={() => setLightboxActiveIndex(0)}
                    />
                  </S.ImageContent>
                </S.ImageContainer>
              </S.ImageWrapper>
              <S.CoupleName color="light" font="hoatay1">
                {t('couple.groom.name')}
              </S.CoupleName>
              <T.Text color="light" align="center">
                {t('couple.groom.description')}
              </T.Text>
            </Flex>
          </Col>
          <Col span={12}>
            <Flex align="center" justify="center" vertical>
              <S.ImageWrapper>
                <S.ImageContainer>
                  <S.ImageContent $background={coupleBorderImage}>
                    <S.ImageItem
                      src={coupleRightImage}
                      alt=""
                      onClick={() => setLightboxActiveIndex(1)}
                    />
                  </S.ImageContent>
                </S.ImageContainer>
              </S.ImageWrapper>
              <S.CoupleName color="light" font="hoatay1">
                {t('couple.bride.name')}
              </S.CoupleName>
              <T.Text color="light" align="center">
                {t('couple.bride.description')}
              </T.Text>
            </Flex>
          </Col>
        </Row>
      </Container>
      <S.CoupleBorderLeft src={coupleBorderLeftImage} alt="" />
      <S.CoupleBorderRight src={coupleBorderRightImage} alt="" />
      <S.CoupleBorderBottom $background={coupleBorderBottomImage} />
      <Lightbox
        slides={[
          image1,
          image2,
          image3,
          image4,
          image5,
          image6,
          image7,
          image8,
        ].map((src, index) => ({
          src,
        }))}
        open={lightboxActiveIndex >= 0}
        index={lightboxActiveIndex}
        close={() => setLightboxActiveIndex(-1)}
        // enable optional lightbox plugins
        plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
      />
    </S.CoupleWrapper>
  )
}

export default Couple
