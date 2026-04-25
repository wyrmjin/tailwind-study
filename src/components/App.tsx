import ContactForm from './ContactForm'
import DataTable from './DataTable'
import { ToastProvider, useToast } from './Toast'

function AppContent() {
  const { addToast } = useToast()

  return (
    <div className="flex gap-3">
      <button
        onClick={() => addToast('success', '操作成功！')}
        className="rounded-md bg-green-500 px-4 py-2 text-white transition-colors hover:bg-green-600"
      >
        成功通知
      </button>
      <button
        onClick={() => addToast('error', '操作失败，请重试')}
        className="rounded-md bg-red-500 px-4 py-2 text-white transition-colors hover:bg-red-600"
      >
        错误通知
      </button>
      <button
        onClick={() => addToast('warning', '请注意数据可能不一致')}
        className="rounded-md bg-yellow-500 px-4 py-2 text-white transition-colors hover:bg-yellow-600"
      >
        警告通知
      </button>
    </div>
  )
}

function App() {
  return (
    <ToastProvider>
      <AppContent />
      <ContactForm />
      <DataTable />
    </ToastProvider>
  )
}

export default App
