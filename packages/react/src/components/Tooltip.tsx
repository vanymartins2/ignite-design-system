import { ComponentProps } from 'react'
import { styled } from '../styles'

export const Tooltip = styled('div', {
  maxWidth: 'max-content',
  padding: '$3 $4',

  fontFamily: '$default',
  fontSize: '$sm',
  color: '$gray100',
  fontWeight: '$medium',
  lineHeight: '$short',
  textAlign: 'center',

  borderRadius: '$sm',
  backgroundColor: '$gray900',
  filter: 'drop-shadow(4px 16px 24px rgba(0, 0, 0, 0.25))',

  position: 'relative',

  '&::after': {
    content: '',
    position: 'absolute',
    top: '100%',
    left: '50%',
    marginLeft: '-5px',
    borderWidth: '5px',
    borderStyle: 'solid',
    borderColor: '$gray900 transparent transparent transparent'
  }
})

export interface TooltipProps extends ComponentProps<typeof Tooltip> {}
