import type { Meta, StoryObj } from '@storybook/react'
import { Toast, ToastProps } from '@vanymartins-ignite-ui/react'

export default {
  title: 'Data display/Toast',
  component: Toast,
  args: {
    title: 'Appointment made successfully',
    content: 'Wednesday, October 23 at 16h'
  }
} as Meta<ToastProps>

export const Primary: StoryObj<ToastProps> = {}
