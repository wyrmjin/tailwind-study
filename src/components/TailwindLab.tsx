function TailwindLab() {
  // // return (
  //   <div className="flex flex-col items-center w-80 h-80 gap-4 bg-white shadow-md p-6 rounded-lg">
  //     <div className="bg-gray-300 size-32 rounded-full" />
  //     <div className="text-xl font-bold text-gray-800">姓名</div>
  //     <div className="text-sm text-gray-500">职位</div>
  //     <div className="flex justify-around w-full pt-4 border-t border-gray-200">
  //       <span className="text-gray-600 text-sm">邮箱</span>
  //       <span className="text-gray-600 text-sm">电话</span>
  //       <span className="text-gray-600 text-sm">地址</span>
  //     </div>
  //   </div>
  // );
  return (
    <div className="flex flex-col">
      <div className="flex h-20 w-full items-center justify-between gap-4 p-6">
        <span>Logo</span>
        <ul className="flex gap-4">
          <li className="hidden md:block">
            <a href="www.baidu.com">语言</a>
          </li>
          <li className="hidden md:block">github</li>
        </ul>
      </div>
      <div className="grid justify-items-center gap-4 md:grid-cols-2 lg:grid-cols-3">
        <div className="relative h-60 w-2/3 overflow-hidden rounded-md shadow-sm">
          <div className="absolute inset-0 bg-gray-300" />
          <div className="absolute right-0 bottom-0 left-0 bg-linear-to-t from-black/60 to-transparent p-4">
            <div className="text-xl font-bold text-white">标题</div>
            <div className="mt-1 text-sm text-white/80">描述文字</div>
          </div>
        </div>
        <div className="relative h-60 w-2/3 overflow-hidden rounded-md shadow-sm">
          <div className="absolute inset-0 bg-gray-300" />
          <div className="absolute right-0 bottom-0 left-0 bg-gradient-to-t from-black/60 to-transparent p-4">
            <div className="text-xl font-bold text-white">标题</div>
            <div className="mt-1 text-sm text-white/80">描述文字</div>
          </div>
        </div>
        <div className="relative h-60 w-2/3 overflow-hidden rounded-md shadow-sm">
          <div className="absolute inset-0 bg-gray-300" />
          <div className="absolute right-0 bottom-0 left-0 bg-gradient-to-t from-black/60 to-transparent p-4">
            <div className="text-xl font-bold text-white">标题</div>
            <div className="mt-1 text-sm text-white/80">描述文字</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TailwindLab
