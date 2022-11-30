import { ButtonHTMLAttributes, DetailedHTMLProps, MouseEvent } from 'react'
import styles from './styles.module.scss'

interface ButtonIconProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  icon: React.FC<React.SVGProps<SVGSVGElement>>
  iconText?: string
  additionalClass?: string
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void
}

const ButtonIcon: React.FC<ButtonIconProps> = ({
  icon: Icon,
  iconText,
  additionalClass,
  onClick,
  ...rest
}) => {
  return (
    <button
      className={`${styles.button} ${additionalClass ? additionalClass : ''}`}
      {...rest}
      onClick={onClick}
    >
      <Icon />
    </button>
  )
}

export { ButtonIcon }
