import { classNames } from '@/utils'

function Modal({
  isOpen,
  onClose,
  children
}: {
  isOpen: boolean
  onClose: () => void
  children: React.ReactNode
}) {
  return (
    <div
      className={classNames(
        'fixed inset-0 z-50 flex items-center justify-center transition-opacity duration-300',
        isOpen ? 'opacity-100' : 'pointer-events-none opacity-0'
      )}
    >
      <div className="fixed inset-0 bg-black/50" onClick={onClose} />
      <div
        className={classNames(
          'relative z-10 w-full max-w-md rounded-lg bg-white p-6 shadow-lg transition-all duration-300',
          isOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
        )}
      >
        <button
          className="absolute top-4 right-4 text-gray-400 transition-colors hover:text-gray-600"
          onClick={onClose}
        >
          ✕
        </button>
        {children}
      </div>
    </div>
  )
}
export default Modal
