import { styled } from '../../styles'

export const ToastContainer = styled('div', {
  width: 320,
  minHeight: 82,
  padding: '$3 $5',

  backgroundColor: '$gray800',
  border: '1px solid $gray600',
  borderRadius: '$sm',

  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'flex-start',
  gap: '$1',

  strong: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    color: '$white',

    svg: {
      color: '$gray200',
      cursor: 'pointer',

      '&:hover': {
        filter: 'brightness(0.7)'
      }
    }
  },

  p: {
    color: '$gray200'
  }
})
