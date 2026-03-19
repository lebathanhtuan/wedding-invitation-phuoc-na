import { Row, Col, Flex } from 'antd'
import { useTranslation } from 'react-i18next'

import Container from 'src/components/Container'
import T from 'src/components/Typography'

import heartPhotosImage from 'src/assets/images/HeartPhotos.png'
import justMarriedImage from 'src/assets/images/JustMarried.png'
import brideGroomPaintImage from 'src/assets/images/BrideGroomPaint5.png'

import * as S from './styled'

function Intention() {
  const { t } = useTranslation()

  return (
    <S.IntentionWrapper>
      <Container>
        <Row gutter={[16, 24]} align="middle">
          <Col span={24}>
            <Flex align="center" justify="center" vertical>
              <img
                src={justMarriedImage}
                alt="Just Married"
                style={{ maxWidth: 180 }}
              />
              <S.PaintImage src={brideGroomPaintImage} data-aos="fade-left" />
            </Flex>
          </Col>
          <Col span={24}>
            <Flex align="center" justify="center" vertical>
              <T.Text
                size="lg"
                align="center"
                data-aos="fade-right"
                style={{ marginBottom: 16 }}
              >
                {t('intention.label1')} <br /> {t('intention.label2')}
              </T.Text>
              <img
                src={heartPhotosImage}
                alt="Heart Photos"
                data-aos="zoom-in"
              />
            </Flex>
          </Col>
        </Row>
      </Container>
    </S.IntentionWrapper>
  )
}

export default Intention
