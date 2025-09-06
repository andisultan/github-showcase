import { useEffect, forwardRef, useRef, MouseEvent, useImperativeHandle, HTMLAttributes, ReactNode } from 'react'
import { createPortal } from 'react-dom'
import { X } from 'lucide-react'
import './style.scss'

export interface ModalProps extends Omit<HTMLAttributes<HTMLDivElement>, 'title'> {
  /**
   * Sets the icon of the component
   */
  icon?: ReactNode
  /**
   * Sets the callback onclose of the component
   */
  onClose?: () => void
  /**
   * Sets the show of the component
   */
  show?: boolean
  /**
   * Sets the title of the component
   */
  title?: ReactNode
}

export interface ModalRef {
  focus: () => void
}

const Modal = forwardRef<ModalRef, ModalProps>((props, ref) => {
  const { show, title, icon, className, children, onClose, ...rest } = props
  const modalRef = useRef<HTMLDivElement>(null)
  const classWrapper = ['modal', className].join(' ').trim()

  useImperativeHandle(ref, () => ({
    focus: () => {
      modalRef.current?.focus()
    },
  }))

  useEffect(() => {
    if (!show) return

    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose?.()
      }
    }
    document.addEventListener('keydown', handleEsc);
    
    return () => {
      document.removeEventListener('keydown', handleEsc)
    }
  }, [show, onClose])

  if (!show) {
    return null
  }

  const handleOverlayClick = () => {
    onClose?.()
  }

  const handleContentClick = (e: MouseEvent) => {
    e.stopPropagation()
  }

  return createPortal(
    <div className="modal-overlay" onClick={handleOverlayClick}>
      <div
        {...rest}
        className={classWrapper}
        onClick={handleContentClick}
        ref={modalRef}
        tabIndex={-1}
      >
        <header className="modal__header">
          <h3 className="modal__title">{title}</h3>
          <button className="modal__close" onClick={onClose}>
            <X size={16}/>
          </button>
        </header>
        <div className="modal__body">
          {children}
        </div>
      </div>
    </div>,
    document.body
  )
})

export default Modal