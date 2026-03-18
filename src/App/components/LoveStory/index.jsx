import { useState } from 'react'
import { Row, Col } from 'antd'
import moment from 'moment'
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
import { WEDDING_DAY } from 'src/constants/wedding'

import leftImage from 'src/assets/photos/ROM_8780_crop-optimised.jpg'
import middleImage from 'src/assets/photos/ROM_8965_crop-optimised.jpg'
import rightImage from 'src/assets/photos/ROM_9165_crop-optimised.jpg'
import image1 from 'src/assets/photos/ROM_8780-optimised.jpg'
import image2 from 'src/assets/photos/ROM_8965-optimised.jpg'
import image3 from 'src/assets/photos/ROM_9165-optimised.jpg'
import image4 from 'src/assets/photos/ROM_8788-optimised.jpg'
import image5 from 'src/assets/photos/ROM_8847-optimised.jpg'
import image6 from 'src/assets/photos/ROM_8912-optimised.jpg'
import image7 from 'src/assets/photos/ROM_8988-optimised.jpg'
import image8 from 'src/assets/photos/ROM_9030-optimised.jpg'
import image9 from 'src/assets/photos/ROM_9123-optimised.jpg'
import image10 from 'src/assets/photos/ROM_9200-optimised.jpg'
import image11 from 'src/assets/photos/ROM_8717-optimised.jpg'
import loveStory1Image from 'src/assets/images/LoveStory1.png'
import loveStory2Image from 'src/assets/images/LoveStory2.png'
import loveStory3Image from 'src/assets/images/LoveStory3.png'
import loveStory4Image from 'src/assets/images/LoveStory4.png'
import loveStory5Image from 'src/assets/images/LoveStory5.png'
import loveStory6Image from 'src/assets/images/LoveStory6.png'

import * as S from './styled'

function LoveStory() {
  const [lightboxActiveIndex, setLightboxActiveIndex] = useState(-1)
  const { t } = useTranslation()
  return (
    <S.LoveStoryWrapper id="love-story">
      <Container style={{ padding: '0 8px' }}>
        <Row gutter={4}>
          <Col span={8}>
            <S.ImageWrapper onClick={() => setLightboxActiveIndex(0)}>
              <S.ImageContent src={leftImage} />
              <S.ImageLabel>{moment(WEDDING_DAY).format('DD')}</S.ImageLabel>
            </S.ImageWrapper>
          </Col>
          <Col span={8}>
            <S.ImageWrapper onClick={() => setLightboxActiveIndex(1)}>
              <S.ImageContent src={middleImage} />
              <S.ImageLabel>{moment(WEDDING_DAY).format('MM')}</S.ImageLabel>
            </S.ImageWrapper>
          </Col>
          <Col span={8}>
            <S.ImageWrapper onClick={() => setLightboxActiveIndex(2)}>
              <S.ImageContent src={rightImage} />
              <S.ImageLabel>{moment(WEDDING_DAY).format('YY')}</S.ImageLabel>
            </S.ImageWrapper>
          </Col>
        </Row>
      </Container>
      <Container>
        <S.LoveStoryTitle align="center" justify="center" vertical>
          <T.Text size="lg">{t('loveStory.title')}</T.Text>
          <T.Title
            level={2}
            align="center"
            color="primary"
            style={{ lineHeight: 1 }}
          >
            {t('loveStory.subTitle')}
          </T.Title>
        </S.LoveStoryTitle>
        <Row gutter={[32, -16]}>
          <S.LoveStoryCol span={24} $right>
            <img src={loveStory1Image} alt="" />
          </S.LoveStoryCol>
          <S.LoveStoryCol span={24}>
            <T.Title size="xxl" color="primary">
              {t('loveStory.theFirstDay.title')}
            </T.Title>
            <T.Text font="cormorant">
              {t('loveStory.theFirstDay.description')}
            </T.Text>
          </S.LoveStoryCol>
          <S.LoveStoryCol span={24}>
            <img src={loveStory2Image} alt="" />
          </S.LoveStoryCol>
          <S.LoveStoryCol span={24} $right>
            <T.Title size="xxl" color="primary">
              {t('loveStory.firstLoveDay.title')}
            </T.Title>
            <T.Text font="cormorant">
              {t('loveStory.firstLoveDay.description')}
            </T.Text>
          </S.LoveStoryCol>
          <S.LoveStoryCol span={24} $right>
            <img src={loveStory3Image} alt="" />
          </S.LoveStoryCol>
          <S.LoveStoryCol span={24}>
            <T.Title size="xxl" color="primary">
              {t('loveStory.theLoveJourney.title')}
            </T.Title>
            <T.Text font="cormorant">
              {t('loveStory.theLoveJourney.description')}
            </T.Text>
          </S.LoveStoryCol>
          <S.LoveStoryCol span={24}>
            <img src={loveStory4Image} alt="" />
          </S.LoveStoryCol>
          <S.LoveStoryCol span={24} $right>
            <T.Title size="xxl" color="primary">
              {t('loveStory.sheSayYes.title')}
            </T.Title>
            <T.Text font="cormorant">
              {t('loveStory.sheSayYes.description')}
            </T.Text>
          </S.LoveStoryCol>
          <S.LoveStoryCol span={24} $right>
            <img src={loveStory5Image} alt="" />
          </S.LoveStoryCol>
          <S.LoveStoryCol span={24}>
            <T.Title size="xxl" color="primary">
              {t('loveStory.engagementDay.title')}
            </T.Title>
            <T.Text font="cormorant">
              {t('loveStory.engagementDay.description')}
            </T.Text>
          </S.LoveStoryCol>
          <S.LoveStoryCol span={24}>
            <img src={loveStory6Image} alt="" />
          </S.LoveStoryCol>
          <S.LoveStoryCol span={24} $right>
            <T.Title size="xxl" color="primary">
              {t('loveStory.theWedding.title')}
            </T.Title>
            <T.Text font="cormorant">
              {t('loveStory.theWedding.description')}
            </T.Text>
          </S.LoveStoryCol>
        </Row>
      </Container>
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
          image9,
          image10,
          image11,
        ].map((src, index) => ({
          src,
        }))}
        open={lightboxActiveIndex >= 0}
        index={lightboxActiveIndex}
        close={() => setLightboxActiveIndex(-1)}
        // enable optional lightbox plugins
        plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
      />
    </S.LoveStoryWrapper>
  )
}

export default LoveStory
