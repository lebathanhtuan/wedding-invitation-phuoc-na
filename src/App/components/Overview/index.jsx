import { useState } from 'react'
import { Flex } from 'antd'
import Lightbox from 'yet-another-react-lightbox'
// import optional lightbox plugins
import Fullscreen from 'yet-another-react-lightbox/plugins/fullscreen'
import Slideshow from 'yet-another-react-lightbox/plugins/slideshow'
import Thumbnails from 'yet-another-react-lightbox/plugins/thumbnails'
import Zoom from 'yet-another-react-lightbox/plugins/zoom'
import 'yet-another-react-lightbox/plugins/thumbnails.css'

import T from 'src/components/Typography'

import overviewBackgroundImage from 'src/assets/images/OverviewBackground.png'
import overviewFlower1Image from 'src/assets/images/OverviewFlower1.png'
import overviewFlower2Image from 'src/assets/images/OverviewFlower2.png'
import overviewFlower3Image from 'src/assets/images/OverviewFlower3.png'
import ticketImage from 'src/assets/images/Ticket.png'
import letter1Image from 'src/assets/photos/ROM_8401_crop-optimised.jpg'
import letter2Image from 'src/assets/photos/ROM_8417_crop-optimised.jpg'
import image1 from 'src/assets/photos/ROM_8401-optimised.jpg'
import image2 from 'src/assets/photos/ROM_8417-optimised.jpg'
import image3 from 'src/assets/photos/ROM_8283-optimised.jpg'
import image4 from 'src/assets/photos/ROM_8305-optimised.jpg'
import image5 from 'src/assets/photos/ROM_8323-optimised.jpg'
import image6 from 'src/assets/photos/ROM_8375-optimised.jpg'
import image7 from 'src/assets/photos/ROM_8438-optimised.jpg'
import image8 from 'src/assets/photos/ROM_8517-optimised.jpg'
import image9 from 'src/assets/photos/ROM_8525-optimised.jpg'
import image10 from 'src/assets/photos/ROM_8557-optimised.jpg'
import image11 from 'src/assets/photos/ROM_8646-optimised.jpg'

import * as S from './styled'
import CountdownTimer from './CountdownTimer'

export default function App() {
  const [isOpen, setIsOpen] = useState(false)
  const [lightboxActiveIndex, setLightboxActiveIndex] = useState(-1)

  return (
    <S.OverviewWrapper $background={overviewBackgroundImage}>
      <T.Title
        level={1}
        weight="light"
        font="kattyDiona"
        style={{ fontSize: 68, marginBottom: 64, zIndex: 1 }}
      >
        Wedding Invitation
      </T.Title>
      <T.Text size="xl" weight="light" style={{ zIndex: 1 }}>
        Chạm để mở thiệp
      </T.Text>
      <Flex style={{ width: '100%', padding: '0 24px' }}>
        <S.EnvelopeWrapper>
          <S.EnvelopeContainer data-open={isOpen}>
            <S.Flap />
            <S.Pocket />
            <S.WaxSeal onClick={() => setIsOpen(!isOpen)} />
            <S.Letter1>
              <S.LetterImage
                alt="Letter"
                src={letter1Image}
                onClick={() => setLightboxActiveIndex(0)}
              />
            </S.Letter1>
            <S.Letter2>
              <S.LetterImage
                alt="Letter"
                src={letter2Image}
                onClick={() => setLightboxActiveIndex(1)}
              />
            </S.Letter2>
            <S.Letter3>
              <S.LetterTicket alt="Ticket" src={ticketImage} />
            </S.Letter3>
          </S.EnvelopeContainer>
          <S.EnvelopeShadow />
        </S.EnvelopeWrapper>
      </Flex>
      <S.NameContainer>
        <Flex align="baseline" gap={12}>
          <T.Text font="hoatay1" color="primary" size="xxl">
            Groom
          </T.Text>
          <T.Text font="hoatay1" style={{ fontSize: 56 }}>
            Tấn Phước
          </T.Text>
        </Flex>
        <T.Text font="hoatay1" color="primary" style={{ fontSize: 48 }}>
          &
        </T.Text>
        <Flex align="baseline" gap={12}>
          <T.Text font="hoatay1" style={{ fontSize: 56 }}>
            Bích Na
          </T.Text>
          <T.Text font="hoatay1" color="primary" size="xxl">
            Bride
          </T.Text>
        </Flex>
      </S.NameContainer>
      <CountdownTimer />
      <S.OverviewFlower1 src={overviewFlower1Image} />
      <S.OverviewFlower2 src={overviewFlower2Image} />
      <S.OverviewFlower3 src={overviewFlower3Image} />
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
    </S.OverviewWrapper>
  )
}
