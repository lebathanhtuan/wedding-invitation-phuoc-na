import { Flex } from 'antd'
import styled from 'styled-components'
import { Timeline } from 'antd'

import T from 'src/components/Typography'

export const EventWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 32px 0;
  overflow: hidden;
`

export const EventContainer = styled(Flex)`
  margin-bottom: 12px;
`

export const EventLeft = styled.div`
  position: relative;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  height: 100%;
  margin-bottom: 16px;

  & img {
    max-width: 400px;
    width: 100%;
    height: auto;
  }
`

export const EventTimeline = styled(Timeline)`
  margin-top: 24px;

  .ant-timeline-item-tail {
    border-color: ${({ theme }) => theme.colors.primary};
  }

  .ant-timeline-item-head-custom {
    background-color: transparent;
  }

  .ant-timeline-item:nth-child(2n - 1) {
    .ant-timeline-item-content {
      margin-inline-start: 52px;
      width: calc(50% - 46px);
    }

    .ant-timeline-item-label {
      width: calc(50% - 48px);
    }
  }

  .ant-timeline-item:nth-child(2n) {
    .ant-timeline-item-content {
      width: calc(50% - 48px);
    }

    .ant-timeline-item-label {
      margin-inline-start: 36px;
      width: calc(50% - 48px);
    }
  }
`

export const TimelineContent = styled.div`
  padding-bottom: 16px;
`

export const TimelineName = styled(T.Title)`
  line-height: 1.2;
  margin-bottom: 4px;
  font-size: ${({ theme }) => theme.fontSizes.lg};
`

export const EventIconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 50px;
  background-color: transparent;
`

export const EventIconContainer = styled.div`
  background-color: white;
  padding: 4px;
`

export const EventIconItem = styled.img`
  height: 84px;
  width: auto;
`
