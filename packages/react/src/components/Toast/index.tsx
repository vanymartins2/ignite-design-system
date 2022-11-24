import { X } from 'phosphor-react'
import { Text } from '../Text'
import { ToastContainer } from './styles'

export interface ToastProps {
  title: string
  content: string
}

export const Toast = ({ title, content }: ToastProps) => {
  return (
    <ToastContainer>
      <Text size="lg" as="strong">
        {title}
        <X size={20} />
      </Text>

      <Text size="sm">{content}</Text>
    </ToastContainer>
  )
}
