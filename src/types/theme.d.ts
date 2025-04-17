import { DefaultTheme } from 'styled-components'

export interface Theme extends DefaultTheme {
  appBackground: string
  appColor: string
  appSkeletonFrom: string
  appSkeletonTo: string
  buttons: {
    hero: string
  }
  card: {
    background: string
    border: string
  }
}
