export function Practise1() {
  return (
    <div className="flex h-16 items-center justify-between border-b">
      <div className="h-full w-16 rounded-full bg-gray-700"></div>
      <div className="flex gap-2 divide-x">
        <a href="https/www.baidu.com" className="text-blue-500">
          AAA
        </a>
        <a href="https/www.baidu.com">AAA</a>
        <a href="https/www.baidu.com">AAA</a>
      </div>
    </div>
  )
}
export function Practise2() {
  return (
    <div className="grid min-h-screen grid-cols-[200px_1fr] items-stretch">
      <div className="bg-gray-100">sidebar</div>
      <div className="">main content</div>
    </div>
  )
}
export function Practise3() {
  return (
    <div className="grid grid-cols-2 gap-4 border border-gray-200">
      <div className="col-span-2 h-16 text-center">status bar (full)</div>
      <div className="rounded-lg border p-4">Revenue Chart</div>
      <div className="rounded-lg border p-4">Activity Feed</div>
      <div className="rounded-lg border p-4">Users</div>
      <div className="rounded-lg border p-4">Tasks</div>
    </div>
  )
}
