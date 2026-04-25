import ShadowLab from './ShadowLab'

function BackgroundLab() {
  return (
    <div className="flex min-h-screen flex-col bg-linear-to-br from-slate-50 to-blue-50">
      <div className="flex-1">
        <ShadowLab />
      </div>
      <div className="flex bg-gray-900 text-white">
        <a
          className="flex-1 py-2 text-center text-gray-400 hover:text-white"
          href="https://www.baidu.com"
        >
          百度
        </a>
        <a
          className="flex-1 py-2 text-center text-gray-400 hover:text-white"
          href="https://www.x.com"
        >
          X
        </a>
        <a
          className="flex-1 py-2 text-center text-gray-400 hover:text-white"
          href="https://www.bigmodel.com"
        >
          智谱
        </a>
      </div>
    </div>
  )
}

export default BackgroundLab
