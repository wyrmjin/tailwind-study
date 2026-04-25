import { createContext, useContext, useState, type ReactNode } from 'react'
import { classNames } from 'utils'

type ToastType = 'success' | 'error' | 'warning'

interface ToastItem {
  id: number
  type: ToastType
  message: string
  entering: boolean
  closing: boolean
}

const styles: Record<ToastType, string> = {
  success: 'border-l-green-500 bg-green-50 text-green-800',
  error: 'border-l-red-500 bg-red-50 text-red-800',
  warning: 'border-l-yellow-500 bg-yellow-50 text-yellow-800'
}

const icons: Record<ToastType, string> = {
  success: '✓',
  error: '✕',
  warning: '⚠'
}

interface ToastContextValue {
  addToast: (type: ToastType, message: string) => void
}

const ToastContext = createContext<ToastContextValue>(null!)

export function useToast() {
  return useContext(ToastContext)
}

let nextId = 0

export function ToastProvider({ children }: { children: ReactNode }) {
  const [toasts, setToasts] = useState<ToastItem[]>([])

  const addToast = (type: ToastType, message: string) => {
    const id = nextId++
    setToasts((prev) => [
      ...prev,
      { id, type, message, entering: false, closing: false }
    ])
    requestAnimationFrame(() => {
      setToasts((prev) =>
        prev.map((t) => (t.id === id ? { ...t, entering: true } : t))
      )
    })
    setTimeout(() => dismiss(id), 3000)
  }

  const dismiss = (id: number) => {
    setToasts((prev) =>
      prev.map((t) => (t.id === id ? { ...t, closing: true } : t))
    )
    setTimeout(() => setToasts((prev) => prev.filter((t) => t.id !== id)), 300)
  }

  return (
    <ToastContext.Provider value={{ addToast }}>
      {children}
      <div className="fixed top-4 right-4 z-50 flex flex-col gap-3">
        {toasts.map((toast) => (
          <div
            key={toast.id}
            className={classNames(
              'flex min-w-72 items-center gap-3 rounded-lg border-l-4 px-4 py-3 shadow-md transition-all duration-300',
              styles[toast.type],
              !toast.entering && 'translate-x-full opacity-0',
              toast.closing && 'translate-x-full opacity-0'
            )}
          >
            <span className="text-lg font-bold">{icons[toast.type]}</span>
            <p className="flex-1 text-sm font-medium">{toast.message}</p>
            <button
              onClick={() => dismiss(toast.id)}
              className="opacity-50 transition-opacity hover:opacity-100"
            >
              ✕
            </button>
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  )
}
