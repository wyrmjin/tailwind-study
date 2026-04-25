const menus = ['编辑', '复制', '删除', '分享']
function Dropdown() {
  return (
    <div className="group relative">
      <button className="w-48 rounded-md border border-gray-200 px-4 py-2 hover:bg-gray-50">
        菜单
      </button>
      <div className="invisible absolute top-full left-0 mt-2 w-48 divide-y divide-gray-100 rounded-md bg-white opacity-0 shadow-lg transition-all duration-200 group-hover:visible group-hover:opacity-100">
        {menus.map((menu, index) => (
          <button
            key={index}
            className="w-full px-4 py-2 text-left transition-colors hover:bg-gray-100"
          >
            {menu}
          </button>
        ))}
      </div>
    </div>
  )
}

export default Dropdown
