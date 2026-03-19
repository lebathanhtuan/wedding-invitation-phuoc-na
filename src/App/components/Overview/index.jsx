import { useState, useRef, useCallback } from 'react'
import { Flex } from 'antd'
import T from 'src/components/Typography'
import PhotoLightbox from 'src/components/PhotoLightbox'

import overviewBackgroundImage from 'src/assets/images/OverviewBackground.png'
import overviewFlower1Image from 'src/assets/images/OverviewFlower1.png'
import overviewFlower2Image from 'src/assets/images/OverviewFlower2.png'
import overviewFlower3Image from 'src/assets/images/OverviewFlower3.png'
import ticketImage from 'src/assets/images/Ticket.png'
import letter1Image from 'src/assets/photos/ROM_8401_crop-optimised.jpg'
import letter2Image from 'src/assets/photos/ROM_8417_crop-optimised.jpg'
import photos from './photos'

import * as S from './styled'
import CountdownTimer from './CountdownTimer'

export default function App() {
  const containerRef = useRef(null)
  const [lightboxActiveIndex, setLightboxActiveIndex] = useState(-1)

  const handleSealClick = useCallback(() => {
    if (containerRef.current) {
      const isCurrentlyOpen =
        containerRef.current.getAttribute('data-open') === 'true'
      containerRef.current.setAttribute('data-open', String(!isCurrentlyOpen))
    }
  }, [])

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
          <S.EnvelopeContainer ref={containerRef} data-open="false">
            <S.Flap />
            <S.Pocket />
            <S.WaxSeal onClick={handleSealClick} />
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
      <PhotoLightbox
        photos={photos}
        activeIndex={lightboxActiveIndex}
        onClose={() => setLightboxActiveIndex(-1)}
      />
    </S.OverviewWrapper>
  )
}
