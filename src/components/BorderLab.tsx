function BorderLab() {
  return (
    <div className="rounded-xl border border-gray-200 p-6 shadow-sm">
      <div className="flex items-center gap-3 border-b pb-4">
        <div className="h-16 w-16 rounded-full bg-gray-300"></div>
        <div>
          <p className="font-semibold">用户名</p>
          <p className="text-sm text-gray-500">简介</p>
        </div>
      </div>
      <div className="flex items-center justify-between divide-x divide-gray-100 pt-4">
        <div className="flex-1 px-2 text-center">128 帖子</div>
        <div className="flex-1 px-2 text-center">1.2K 关注者</div>
        <div className="flex-1 px-2 text-center">256 关注中</div>
      </div>
      <div className="mx-auto mt-4 rounded-full border border-blue-500 px-6 py-2 text-center text-blue-500">
        订阅
      </div>
      <div className="mt-4 ring-2 ring-blue-500 ring-offset-2">测试轮廓线</div>
    </div>
  )
}

export default BorderLab
