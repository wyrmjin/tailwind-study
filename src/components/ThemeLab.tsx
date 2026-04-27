import { useDarkMode } from '@/utils/useDarkMode'

const features = [
  {
    title: '快速开发',
    description: '用 utility class 直接在 JSX 中编写样式，无需切换文件',
    icon: '⚡'
  },
  {
    title: '一致性设计',
    description: '基于设计系统的间距、颜色和排版，保证视觉统一',
    icon: '🎨'
  },
  {
    title: '响应式优先',
    description: '移动优先的断点系统，轻松适配各种屏幕尺寸',
    icon: '📱'
  }
]

const badges = [
  { label: 'Tailwind v4', variant: 'brand' },
  { label: 'TypeScript', variant: 'accent' },
  { label: 'Vite', variant: 'brand' },
  { label: 'React 18', variant: 'accent' }
] as const

function ThemeLab() {
  const { isDark, toggle } = useDarkMode()

  return (
    <div className="min-h-screen bg-white text-gray-900 transition-colors duration-300 dark:bg-gray-950 dark:text-gray-100">
      {/* 标题区 — 渐变色在 dark 下变化 */}
      <header className="from-brand to-accent dark:from-brand-light dark:to-accent bg-linear-to-r px-6 py-12 text-white">
        <div className="animate-fade-in mx-auto max-w-4xl text-center">
          <h1 className="text-4xl font-bold tracking-tight">自定义主题展示</h1>
          <p className="mt-3 text-lg text-white/80">
            Tailwind v4 CSS-first 配置 + @utility + 自定义动画
          </p>
          <div className="mt-6 flex justify-center gap-3">
            {badges.map((b) => (
              <span
                key={b.label}
                className={`badge ${
                  b.variant === 'brand'
                    ? 'bg-white/20 text-white'
                    : 'bg-accent/90 text-gray-900'
                }`}
              >
                {b.label}
              </span>
            ))}
          </div>
        </div>
      </header>

      {/* Dark Mode 切换按钮 */}
      <div className="mx-auto flex max-w-4xl justify-end px-6 py-4">
        <button
          onClick={toggle}
          className="rounded-sm border border-gray-300 bg-white px-4 py-2 text-sm font-medium shadow-xs transition hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-200 dark:shadow-none dark:hover:bg-gray-700"
        >
          {isDark ? '☀️ 浅色模式' : '🌙 深色模式'}
        </button>
      </div>

      {/* 卡片区 */}
      <main className="mx-auto max-w-4xl px-6 pb-16">
        <h2 className="mb-6 text-2xl font-bold text-gray-800 dark:text-white">
          功能特性
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          {features.map((f, i) => (
            <div
              key={f.title}
              className="card animate-slide-up"
              style={{
                animationDelay: `${i * 150}ms`,
                animationFillMode: 'both'
              }}
            >
              <span className="text-3xl">{f.icon}</span>
              <h3 className="text-brand dark:text-brand-light mt-3 text-lg font-semibold">
                {f.title}
              </h3>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                {f.description}
              </p>
            </div>
          ))}
        </div>

        {/* 自定义动画演示 */}
        <h2 className="mt-12 mb-6 text-2xl font-bold text-gray-800 dark:text-white">
          动画效果
        </h2>
        <div className="card flex flex-col items-center gap-4 py-10">
          <div className="bg-brand h-16 w-16 animate-bounce rounded-full" />
          <p className="text-sm text-gray-500 dark:text-gray-300">
            animate-bounce（内置）+ animate-fade-in / animate-slide-up（自定义）
          </p>
        </div>
      </main>

      {/* 页脚 */}
      <footer className="border-t border-gray-200 bg-gray-50 px-6 py-6 text-center text-sm text-gray-500 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-400">
        Tailwind v4 进阶练习 — @theme / @utility / @apply / dark mode
      </footer>
    </div>
  )
}

export default ThemeLab
