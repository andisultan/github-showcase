import { type HTMLAttributes, forwardRef } from 'react'
import cn from 'classnames'
import './style.scss'

export interface SpinnerProps extends HTMLAttributes<HTMLSpanElement> {
  /**
   * set size of the component
   */
  size?: 'sm' | 'md' | 'lg'
}

const Spinner = forwardRef<HTMLSpanElement, SpinnerProps>((props, ref) => {
  const { size = 'md', className, ...rest } = props;
  const classWrapper = cn (className, 'spinner', `spinner--${size}`);

  return (
    <span ref={ref} className={classWrapper} {...rest}/>
  )
})

export default Spinner