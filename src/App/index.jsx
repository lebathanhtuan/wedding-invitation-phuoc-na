import { useEffect, useState } from 'react'
import { FloatButton } from 'antd'
import { useTranslation } from 'react-i18next'

import Header from 'src/layouts/Header'
import Overview from './components/Overview'
import Invitation from './components/Invitation'
import Couple from './components/Couple'
import LoveStory from './components/LoveStory'
import Event from './components/Event'
import Intention from './components/Intention'
import Map from './components/Map'
import Thanks from './components/Thanks'

import doorBackgroundImage from 'src/assets/images/DoorBackground.png'
import doorBorderImage from 'src/assets/images/DoorBorder.png'
import doorLockImage from 'src/assets/images/DoorLock.png'

import * as S from './styled'

function App() {
  const [isOpen, setIsOpen] = useState(false)

  const { t } = useTranslation()

  useEffect(() => {
    // Tự động mở cửa sau khi component render lần đầu
    // Sử dụng setTimeout để đảm bảo trình duyệt có thời gian áp dụng CSS trạng thái ban đầu (đóng)
    // trước khi chuyển sang trạng thái mới (mở), tạo ra hiệu ứng animation.
    const timer = setTimeout(() => {
      setIsOpen(true)
    }, 1500)

    // Cleanup function để gỡ bỏ timeout nếu component unmount trước khi chạy xong
    return () => clearTimeout(timer)
  }, [])

  return (
    <S.AppWrapper>
      <S.LeftDoor
        $open={isOpen}
        $background={doorBackgroundImage}
        $border={doorBorderImage}
      />
      <S.LockDoor src={doorLockImage} $open={isOpen} alt="Lock" />
      <S.RightDoor
        $open={isOpen}
        $background={doorBackgroundImage}
        $border={doorBorderImage}
      />
      <S.AppContainer>
        <S.AppContent>
          <Header />
          <main>
            <Overview />
            <Couple />
            <Invitation />
            <LoveStory />
            <Event />
            <Intention />
            <Map />
            <Thanks />
          </main>
          <FloatButton.BackTop
            type="primary"
            tooltip={<div>{t('common.backToTop')}</div>}
          />
        </S.AppContent>
      </S.AppContainer>
    </S.AppWrapper>
  )
}

export default App
