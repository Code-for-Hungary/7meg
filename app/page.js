'use client'

import Counter from '@/components/counter'
import { getInflationInterval, getIntervalFromYearlyAmount } from '@/functions/getIntervals'
import { useState } from 'react'

export default function Home() {
  const [drawerData, setdrawerData] = useState(false)
  return (
    <main className="flex min-h-screen flex-col items-center bg-gray-200">
      <div class="container flex flex-col items-center justify-center w-full p-6 mx-auto mt-4 text-center xl:px-0">
        <div class="text-sm font-bold tracking-wider text-indigo-600 uppercase">
          Azta hét meg a nyolcát
        </div>
        <h2 class="max-w-2xl mt-3 text-3xl font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-4xl dark:text-white">
          Amióta nézed ezt az oldalt
        </h2>
        {/*         <p class="max-w-2xl py-4 text-lg leading-normal text-gray-500 lg:text-xl xl:text-xl dark:text-gray-300">
          az oldal megnyitása óta
        </p> */}
      </div>

      <div class="flex items-center justify-center w-screen text-gray-800 p-10">
        <div class="grid lg:grid-cols-3 md:grid-cols-2 gap-6 w-full max-w-6xl">

          <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <p class="mb-3 font-normal text-gray-500 dark:text-gray-400">
              Ennyit nőtt az Opus global Zrt. adózott eredménye
            </p>
            <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
              <Counter interval={getIntervalFromYearlyAmount(22.23*1000*1000*1000)} />
            </h5>
            <a
              href="#"
              class="inline-flex items-center text-blue-600 hover:underline"
              onClick={() => setdrawerData({
                title: 'Opus Global Zrt.',
                body: (
                  <p>
                    Az Opus Global Zrt. 2022-ben 22.228.641.000 forint adózott eredményt produkált.<br /><br />
                    Forrás: <a className="inline-flex items-center text-blue-600 hover:underline" href="https://www.bet.hu/newkibdata/128869595/OPUS%20GLOBAL_2022%20_KONSZOLID%C3%81LT_HU.pdf">Budapesti Értéktőzsde</a>
                  </p>
                )
              })}
            >
              Részletek
            </a>
          </div>

          <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <p class="mb-3 font-normal text-gray-500 dark:text-gray-400">
              10 millió forint lekötetlen betét ennyit veszített az értékéből az
              infláció miatt
            </p>
            <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
              <Counter interval={getInflationInterval(10000000)} />
            </h5>
            <a
              href="#"
              class="inline-flex items-center text-blue-600 hover:underline"
              onClick={() => setdrawerData({
                title: 'Infláció',
                body: (
                  <p>
                    Az infláció mértéke a KSH adatai szerint 22,5 százalék. Forrás: <a href="" target="_blank" rel="noreferrer">Központi Statisztikai Hivatal</a>
                  </p>
                )
              })}
            >
              Részletek
            </a>
          </div>
        </div>
      </div>

      <div
        id="drawer-example"
        className={`transition-transform ${drawerData ? '' : '-translate-x-full'} drop-shadow-md fixed top-0 left-0 z-40 h-screen p-4 overflow-y-auto bg-white w-80 dark:bg-gray-800`}
        tabindex="3"
        aria-labelledby="drawer-label"
      >
        <h5
          id="drawer-label"
          class="inline-flex items-center mb-4 text-base font-semibold text-gray-500 dark:text-gray-400"
        >
          <svg
            class="w-5 h-5 mr-2"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
              clip-rule="evenodd"
            ></path>
          </svg>
          {drawerData?.title}
        </h5>
        <button
          type="button"
          class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 right-2.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
          onClick={() => setdrawerData(null)}
        >
          <svg
            aria-hidden="true"
            class="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
          <span class="sr-only">Close menu</span>
        </button>
        <p class="mb-6 text-sm text-gray-500 dark:text-gray-400">
          {drawerData?.body}
        </p>
{/*         <div class="grid grid-cols-2 gap-4">
          <a
            href="#"
            class="px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-200 rounded-lg focus:outline-none hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
          >
            Learn more
          </a>
        </div> */}
      </div>
    </main>
  )
}
