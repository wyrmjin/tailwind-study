import { useState } from 'react'
import { useToast } from './Toast'

// 1. 定义角色和状态的可用值
type UserRole = 'admin' | 'employee' | 'manager'
type UserStatus = 'active' | 'inactive' | 'pending'

// 2. 定义核心用户接口
interface User {
  id: number
  name: string
  email: string
  role: UserRole
  status: UserStatus
}

// 3. 核心：通过 keyof 提取并严格限制“可排序”的键名
// 这里只允许使用 "name" 或 "email" 作为排序依据
type SortableUserKeys = Extract<keyof User, 'name' | 'email'>
type SortDirs = 'asc' | 'desc'

const mockUsers: User[] = [
  {
    id: 1,
    name: 'Zhang San',
    email: 'zhangsan@example.com',
    role: 'employee',
    status: 'active'
  },
  {
    id: 2,
    name: 'Li Si',
    email: 'lisi@example.com',
    role: 'manager',
    status: 'inactive'
  },
  {
    id: 3,
    name: 'Wang Wu',
    email: 'wangwu@example.com',
    role: 'admin',
    status: 'pending'
  },
  {
    id: 4,
    name: 'A Qiang',
    email: 'aqiang@example.com',
    role: 'employee',
    status: 'active'
  }
]
interface Header {
  key: keyof User
  description: string
}
const headers: Header[] = [
  { key: 'id', description: 'id' },
  { key: 'name', description: '姓名' },
  { key: 'email', description: '邮箱' },
  { key: 'role', description: '角色' },
  { key: 'status', description: '状态' }
]

interface SortInfo {
  sortKey?: SortableUserKeys
  sortDir?: SortDirs
}

function DataTable() {
  const { addToast } = useToast()
  const [sortInfo, setSortInfo] = useState<SortInfo>({})
  const [datas, setDatas] = useState(mockUsers)

  const sort = (key: keyof User) => {
    if (key !== 'name' && key !== 'email') return
    const sortDir =
      sortInfo.sortKey === key && sortInfo.sortDir === 'asc' ? 'desc' : 'asc'
    console.log(sortDir)
    const sortedDatas = [...datas].sort((a, b) => {
      const valA = a[key].toLowerCase()
      const valB = b[key].toLowerCase()

      if (valA < valB) return sortDir === 'asc' ? -1 : 1
      if (valA > valB) return sortDir === 'asc' ? 1 : -1

      return 0
    })

    setSortInfo({ sortKey: key, sortDir: sortDir })
    setDatas(sortedDatas)
  }

  const deleteData = (id: number) => {
    setDatas((prev) => prev.filter((d) => d.id !== id))
    addToast('success', '删除' + id + '成功')
  }
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y border">
        <thead className="divide-y">
          <tr className="divide-x">
            <th></th>
            {headers.map((header, _) => (
              <th
                key={header.key}
                className="cursor-pointer px-4 py-3 select-none hover:text-blue-500"
                onClick={(_) => sort(header.key)}
              >
                {header.description}{' '}
                {sortInfo.sortKey === header.key &&
                  (sortInfo.sortDir === 'asc' ? '▲' : '▼')}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y">
          {datas.map((mockUser, _) => (
            <tr
              key={mockUser.id}
              className="divide-x text-center transition-colors even:bg-gray-50 hover:bg-blue-50"
            >
              <td className="px-4 py-3">
                <button
                  className="rounded-md bg-red-500 px-3 py-1 text-white transition-colors hover:bg-red-600"
                  onClick={(_) => deleteData(mockUser.id)}
                >
                  删除
                </button>
              </td>
              {headers.map((header, _) => (
                <td key={header.key + '-' + mockUser.id} className="px-4 py-3">
                  {mockUser[header.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default DataTable
