const Card1 = ({ description, onDetailsClick, children }) => {
  return (
    <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <p class="mb-3 font-normal text-gray-500 dark:text-gray-400">
        {description}
      </p>
      <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
        {children}
      </h5>
      <a
        href="#"
        class="inline-flex items-center text-blue-600 hover:underline"
        onClick={onDetailsClick}
      >
        Részletek
      </a>
    </div>
  )
}

export default Card1
