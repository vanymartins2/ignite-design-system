import type { Meta, StoryObj } from '@storybook/react'
import { Tooltip, TooltipProps } from '@vanymartins-ignite-ui/react'

export default {
  title: 'Data display/Tooltip',
  component: Tooltip,
  args: {
    children: 'October 21 - Unavailable'
  }
} as Meta<TooltipProps>

export const Primary: StoryObj<TooltipProps> = {}
