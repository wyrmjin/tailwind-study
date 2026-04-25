const plans = [
  {
    title: '基础版',
    price: 29,
    featured: false,
    features: ['5GB 存储', '单用户', '邮件支持']
  },
  {
    title: '专业版',
    price: 99,
    featured: true,
    features: ['50GB 存储', '5 用户', '优先支持']
  },
  {
    title: '旗舰版',
    price: 199,
    featured: false,
    features: ['无限存储', '无限用户', '24/7 专线支持']
  }
]

function ShadowLab() {
  return (
    <div className="mx-auto grid max-w-4xl grid-cols-1 gap-6 p-6 md:grid-cols-3">
      {plans.map((plan) => (
        <div
          key={plan.title}
          className={`rounded-2xl border bg-white ${
            plan.featured
              ? 'border-blue-500 px-6 pt-5 pb-6 shadow-md'
              : 'border-gray-200 p-6'
          }`}
        >
          {plan.featured && (
            <div className="h-1.5 rounded-2xl bg-linear-to-r from-blue-500 to-purple-500" />
          )}
          <h2 className="text-xl font-bold uppercase">{plan.title}</h2>
          <p className="mt-2 text-3xl font-bold">
            ¥{plan.price}
            <span className="text-base font-normal text-gray-500">/月</span>
          </p>
          <ul
            className={`mt-4 divide-y divide-gray-100 text-sm text-gray-600 ${
              plan.featured ? '' : 'opacity-60'
            }`}
          >
            {plan.features.map((f) => (
              <li key={f} className="py-2">
                {f}
              </li>
            ))}
          </ul>
          <button
            className={`mt-6 w-full rounded-lg py-2 ${
              plan.featured
                ? 'bg-blue-500 text-white'
                : 'border border-gray-300'
            }`}
          >
            选择方案
          </button>
        </div>
      ))}
    </div>
  )
}

export default ShadowLab
