import styled from 'styled-components'
import { pxToRem } from '@/utils'

export const StyledButton = styled.button`
  width: ${pxToRem(280)};
  height: ${pxToRem(80)};
  top: ${pxToRem(659)};
  left: ${pxToRem(301)};
  margin-left: 7vw;
  border-radius: ${pxToRem(83)};
  cursor: pointer;
  font-weight: ${pxToRem(600)};
  font-size: ${pxToRem(28)};
  line-height: 100%;
  letter-spacing: 0%;
  color: #ffffff;
  background: linear-gradient(270deg, #13adc7 0%, #6978d1 66.67%, #945dd6 100%);

  &.projects {
    width: ${pxToRem(200)};
    height: ${pxToRem(60)};
    top: ${pxToRem(1680)};
    left: ${pxToRem(325)};
  }
`
