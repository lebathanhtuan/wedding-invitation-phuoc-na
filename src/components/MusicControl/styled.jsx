import styled, { css, keyframes } from 'styled-components'

const spin = keyframes`
  from { transform: rotate(0deg); }
  to   { transform: rotate(360deg); }
`

export const SpinningIcon = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  ${({ $playing }) =>
    $playing
      ? css`
          animation: ${spin} 4s linear infinite;
        `
      : ''}
`
