import { useState, type FormEvent } from 'react'
import { classNames } from '@/utils'
import { useToast } from './Toast'

interface Errors {
  name?: string
  email?: string
  message?: string
}

function ContactForm() {
  const { addToast } = useToast()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [errors, setErrors] = useState<Errors>({})

  const validate = (): boolean => {
    const next: Errors = {}
    if (!name.trim()) next.name = '请输入姓名'
    if (!email.trim()) next.email = '请输入邮箱'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      next.email = '邮箱格式不正确'
    if (!message.trim()) next.message = '请输入留言内容'
    setErrors(next)
    return Object.keys(next).length === 0
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (validate()) {
      addToast('success', '提交成功！')
      setName('')
      setEmail('')
      setMessage('')
      setErrors({})
    }
  }

  const inputCls = (field: keyof Errors) =>
    classNames(
      'w-full rounded-md border px-4 py-2 outline-none transition-colors',
      errors[field]
        ? 'border-red-500 focus:ring-2 focus:ring-red-500/25'
        : 'border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/25'
    )

  return (
    <form onSubmit={handleSubmit} className="mx-auto max-w-md space-y-5 p-6">
      <h2 className="text-xl font-bold text-gray-900">联系我们</h2>

      <div>
        <label className="mb-1 block text-sm font-medium text-gray-700">
          姓名
        </label>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="请输入姓名"
          className={inputCls('name')}
        />
        {errors.name && (
          <p className="mt-1 text-sm text-red-500">{errors.name}</p>
        )}
      </div>

      <div>
        <label className="mb-1 block text-sm font-medium text-gray-700">
          邮箱
        </label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="example@email.com"
          className={inputCls('email')}
        />
        {errors.email && (
          <p className="mt-1 text-sm text-red-500">{errors.email}</p>
        )}
      </div>

      <div>
        <label className="mb-1 block text-sm font-medium text-gray-700">
          留言
        </label>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="请输入留言内容"
          rows={4}
          className={classNames(inputCls('message'), 'resize-none')}
        />
        {errors.message && (
          <p className="mt-1 text-sm text-red-500">{errors.message}</p>
        )}
      </div>

      <button
        type="submit"
        className="w-full rounded-md bg-blue-500 px-4 py-2 text-white transition-colors hover:bg-blue-600"
      >
        提交
      </button>
    </form>
  )
}

export default ContactForm
