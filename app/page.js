import Counter from '@/components/counter'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-gray-200">
      <div class="container flex flex-col items-center justify-center w-full p-6 mx-auto mt-4 text-center xl:px-0">
        <div class="text-sm font-bold tracking-wider text-indigo-600 uppercase">
          TUDTA-E?
        </div>
        <h2 class="max-w-2xl mt-3 text-3xl font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-4xl dark:text-white">
          Ennyit nőtt
        </h2>
        <p class="max-w-2xl py-4 text-lg leading-normal text-gray-500 lg:text-xl xl:text-xl dark:text-gray-300">
          az oldal megnyitása óta
        </p>
      </div>

      <div class="flex items-center justify-center w-screen text-gray-800 p-10">
        <div class="grid lg:grid-cols-3 md:grid-cols-2 gap-6 w-full max-w-6xl">
          <div class="flex items-center p-4 bg-white rounded">
            <div class="flex flex-shrink-0 items-center justify-center bg-green-200 h-16 w-16 rounded">
              <svg
                class="w-6 h-6 fill-current text-green-700"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M3.293 9.707a1 1 0 010-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L4.707 9.707a1 1 0 01-1.414 0z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
            <div class="flex-grow flex flex-col ml-4">
              <div class="flex items-center justify-between">
                <span class="text-gray-500">Opus global adózott eredménye</span>
              </div>
              <Counter />
            </div>
          </div>

          <div class="flex items-center p-4 bg-white rounded">
            <div class="flex flex-shrink-0 items-center justify-center bg-red-200 h-16 w-16 rounded">
              <svg
                class="w-6 h-6 fill-current text-red-700"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M16.707 10.293a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l4.293-4.293a1 1 0 011.414 0z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
            <div class="flex-grow flex flex-col ml-4">
              <div class="flex items-center justify-between">
                <span class="text-gray-500">Magyar államadósság</span>
              </div>
              <Counter interval={87} />
            </div>
          </div>

          <div class="flex items-center p-4 bg-white rounded">
            <div class="flex flex-shrink-0 items-center justify-center bg-green-200 h-16 w-16 rounded">
              <svg
                class="w-6 h-6 fill-current text-green-700"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M3.293 9.707a1 1 0 010-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L4.707 9.707a1 1 0 01-1.414 0z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
            <div class="flex-grow flex flex-col ml-4">
              <div class="flex items-center justify-between">
                <span class="text-gray-500">Egyetemek támogatása</span>
              </div>
              <Counter interval={234} />
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
