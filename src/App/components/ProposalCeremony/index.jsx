import { useState } from 'react'
import { Flex } from 'antd'
import { useTranslation } from 'react-i18next'
import Container from 'src/components/Container'
import PhotoLightbox from 'src/components/PhotoLightbox'
import T from 'src/components/Typography'

import photos from './photos'
import engagementBackgroundImage from 'src/assets/images/EngagementBackground.jpg'
import playBackgroundImage from 'src/assets/images/PlayBackground.gif'
import playButtonImage from 'src/assets/images/PlayButton.gif'
import * as S from './styled'

function ProposalCeremony() {
  const [lightboxActiveIndex, setLightboxActiveIndex] = useState(-1)

  const { t } = useTranslation()

  return (
    <S.EngagementWrapper id="engagement">
      <S.VideoPlayButton
        src={playButtonImage}
        onClick={() => setLightboxActiveIndex(0)}
      />
      <S.EngagementBackground $background={engagementBackgroundImage}>
        <S.EngagementInner>
          <Container>
            <S.EngagementContainer>
              <S.EngagementContent>
                <Flex
                  justify="space-between"
                  align="center"
                  vertical
                  style={{ height: '100%' }}
                >
                  <T.Title level={2} color="light" align="center">
                    {t('engagement.title')}
                  </T.Title>
                  <T.Text color="light" align="center">
                    {t('engagement.description')}
                    <br />
                    {t('engagement.subDescription')}
                  </T.Text>
                </Flex>
                <S.EngagementPlayFrame src={playBackgroundImage} alt="" />
              </S.EngagementContent>
            </S.EngagementContainer>
          </Container>
        </S.EngagementInner>
      </S.EngagementBackground>
      <PhotoLightbox
        photos={photos}
        activeIndex={lightboxActiveIndex}
        onClose={() => setLightboxActiveIndex(-1)}
      />
    </S.EngagementWrapper>
  )
}

export default ProposalCeremony
