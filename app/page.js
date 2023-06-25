'use client'

import Counter from '@/components/counter'
import { HOUR, MILLIARD, SECOND, YEAR, calculateInterval, calculateIntervalAndAmount } from '@/functions/getIntervals'
import { useState } from 'react'

export default function Home() {
  const [drawerData, setdrawerData] = useState(false)
  return (
    <>
      <main className="flex min-h-screen flex-col items-center bg-gray-200 dark:bg-gray-600">
        <div className="container flex flex-col items-center justify-center w-full p-6 mx-auto mt-4 text-center xl:px-0">
          <div className="text-sm font-bold tracking-wider text-indigo-600 dark:text-indigo-200 uppercase">
            Azta hét meg a nyolcát
          </div>
          <h2 className="max-w-2xl mt-3 text-3xl font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-4xl dark:text-white">
            Amióta nézed ezt az oldalt
          </h2>
          {/*         <p className="max-w-2xl py-4 text-lg leading-normal text-gray-500 lg:text-xl xl:text-xl dark:text-gray-300">
          az oldal megnyitása óta
        </p> */}
        </div>

        <div className="flex items-center justify-center w-screen text-gray-800 p-10">
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6 w-full max-w-6xl">

            <div className="relative flex flex-col max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <a
                className="absolute right-4 top-2 text-gray-500 hover:text-blue-600 cursor-pointer"
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
                <svg aria-hidden="true" className="flex-shrink-0 inline w-5 h-5 mt-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
              </a>
              <div className="pb-3">
                <img src="/opusglobal.png" alt="Opus Global" className="w-16 h-16 animate-pulse" />
              </div>
              <p className="mb-3 font-normal text-gray-500 dark:text-gray-200">
                Ennyit nőtt az Opus global Zrt. adózott eredménye
              </p>
              <h5 className="mb-2 mt-auto text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
                <Counter {...calculateIntervalAndAmount(22.23 * MILLIARD, YEAR)} />
              </h5>
            </div>

            <div className="relative flex flex-col max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <a
                className="absolute right-4 top-2 text-gray-500 hover:text-blue-600 cursor-pointer"
                onClick={() => setdrawerData({
                  title: 'Infláció',
                  body: (
                    <p>
                      Az infláció mértéke a KSH adatai szerint 22,5 százalék. Forrás: <a className="inline-flex items-center text-blue-600 hover:underline" href="https://ksh.hu" target="_blank" rel="noreferrer">Központi Statisztikai Hivatal</a>
                    </p>
                  )
                })}
              >
                <svg aria-hidden="true" className="flex-shrink-0 inline w-5 h-5 mt-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
              </a>
              <div className="pb-3">
                <img src="/icons8-money-transfer.gif" className="w-16 h-16 dark:invert" />
              </div>
              <p className="mb-3 font-normal text-gray-500 dark:text-gray-200">
                10 millió forint lekötetlen betét ennyit veszített az értékéből az
                infláció miatt
              </p>
              <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
                <Counter interval={calculateInterval(10000000 * 0.215, YEAR)} />
              </h5>
            </div>

            <div className="relative flex flex-col max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <a
                className="absolute right-4 top-2 text-gray-500 hover:text-blue-600 cursor-pointer"
                onClick={() => setdrawerData({
                  title: 'Benzinár',
                  body: (
                    <p>
                      7 literes fogyasztással számolva autópályán 130 kilométeres sebesség és 579&thinsp;Ft-os benzinár mellett. <br /> <br /> Forrás: <a className="inline-flex items-center text-blue-600 hover:underline" href="https://holtankoljak.hu/" target="_blank" rel="noreferrer">holtankoljak.hu</a>
                    </p>
                  )
                })}
              >
                <svg aria-hidden="true" className="flex-shrink-0 inline w-5 h-5 mt-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
              </a>
              <div className="pb-3">
                <img className="w-16 h-16 dark:invert" src="/icons8-car.gif" />
              </div>
              <p className="mb-3 font-normal text-gray-500 dark:text-gray-200">
                Egy átlagos gépkocsi ekkora értékű üzemanyagot fogyasztott el autópályán
              </p>
              <h5 className="mb-2 mt-auto text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
                <Counter interval={calculateInterval(579 * 7 * 1.3, HOUR)} />
              </h5>
            </div>

            <div className="relative flex flex-col max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <a
                className="absolute right-4 top-2 text-gray-500 hover:text-blue-600 cursor-pointer"
                onClick={() => setdrawerData({
                  title: 'Államadósság',
                  body: (
                    <p>
                      A magyar államadósság 2021 decemberi 40 697 milliárd, és 2022 decemberi 45 562 milliárd forintos összegéből adódó trend figyelembevételével. <br /> <br /> Forrás: <a className="inline-flex items-center text-blue-600 hover:underline" href="https://hu.wikipedia.org/wiki/Magyarorsz%C3%A1g_%C3%A1llamad%C3%B3ss%C3%A1ga" target="_blank" rel="noreferrer">Wikipedia</a>
                    </p>
                  )
                })}
              >
                <svg aria-hidden="true" className="flex-shrink-0 inline w-5 h-5 mt-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
              </a>
              <div className="pb-3">
                <img className="w-16 h-16 dark:invert" src="/icons8-money.gif" />
              </div>
              <p className="mb-3 font-normal text-gray-500 dark:text-gray-200">
                Ennyit nőtt a magyar államadósság
              </p>
              <h5 className="mb-2 mt-auto text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
                <Counter {...calculateIntervalAndAmount(4865 * MILLIARD, YEAR)} />
              </h5>
            </div>

            <div className="relative flex flex-col max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <a
                className="absolute right-4 top-2 text-gray-500 hover:text-blue-600 cursor-pointer"
                onClick={() => setdrawerData({
                  title: 'Duna',
                  body: (
                    <p>
                      A Duna vízhozama Budapestnél 2350 m³/s.
                      <br /> <br /> Forrás: <a className="inline-flex items-center text-blue-600 hover:underline" href="https://hu.wikipedia.org/wiki/Duna" target="_blank" rel="noreferrer">Wikipedia</a>
                    </p>
                  )
                })}
              >
                <svg aria-hidden="true" className="flex-shrink-0 inline w-5 h-5 mt-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
              </a>
              <div className="pb-3">
                <img className="w-16 h-16 dark:invert" src="icons8-cargo-ship.gif" alt="cargo ship" />
              </div>
              <p className="mb-3 font-normal text-gray-500 dark:text-gray-200">
                Ennyi víz folyt le a Dunán Budapestnél
              </p>
              <h5 className="mb-2 mt-auto text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
                <Counter {...calculateIntervalAndAmount(2350, SECOND)} unit={<span>m<sup>3</sup></span>} />
              </h5>
            </div>

            <div className="relative flex flex-col max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <a
                className="absolute right-4 top-2 text-gray-500 hover:text-blue-600 cursor-pointer"
                onClick={() => setdrawerData({
                  title: 'Közmédia',
                  body: (
                    <p>
                      Az MTVA (Médiaszolgáltatás-támogató és Vagyonkezelő Alap) tervezett önálló költségvetése 2023 évre 126,6 milliárd forint.
                      <br /> <br /> Forrás: <a className="inline-flex items-center text-blue-600 hover:underline" href="https://media1.hu/2022/10/24/1266-milliard-forintbol-gazdalkodhat-jovore-az-mtva/" target="_blank" rel="noreferrer">Media1</a>
                    </p>
                  )
                })}
              >
                <svg aria-hidden="true" className="flex-shrink-0 inline w-5 h-5 mt-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
              </a>
              <div className="pb-3">
                <img src="/MTVA.png" alt="MTVA" className="w-16 h-16 dark:invert animate-pulse" />
              </div>
              <p className="mb-3 font-normal text-gray-500 dark:text-gray-200">
                Ennyi működési pénzt használt fel az MTVA
              </p>
              <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
                <Counter {...calculateIntervalAndAmount(126.6 * MILLIARD, YEAR)} />
              </h5>
            </div>

            <div className="relative flex flex-col max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <a
                className="absolute right-4 top-2 text-gray-500 hover:text-blue-600 cursor-pointer"
                onClick={() => setdrawerData({
                  title: 'Uniós pénzek',
                  body: (
                    <p>
                      Az Európai Bizottság a 2021 és 2027 között Magyarországnak járó uniós forrásokból befagyasztott 7,5 milliárt eurót és annak kifzetését jogállamisági feltételekhez kötötte.
                      <br /> <br /> Forrás: <a className="inline-flex items-center text-blue-600 hover:underline" href="https://www.penzcentrum.hu/gazdasag/20221130/megszuletett-a-dontes-ez-lesz-a-befagyasztott-eu-s-penzek-sorsa-1131501" target="_blank" rel="noreferrer">Pénzcentrum</a>
                    </p>
                  )
                })}
              >
                <svg aria-hidden="true" className="flex-shrink-0 inline w-5 h-5 mt-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
              </a>
              <div className="pb-3">
                <img src="/icons8-coins.gif" alt="Coins" className="w-16 h-16 dark:invert" />
              </div>
              <p className="mb-3 font-normal text-gray-500 dark:text-gray-200">
                Ennyi befagyasztott Európai Uniós pénz érkezett volna Magyarországra
              </p>
              <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
                <Counter {...calculateIntervalAndAmount(2769 * MILLIARD, 7 * YEAR)} />
              </h5>
            </div>

          </div>
        </div>
      </main>
      <footer className="bg-white dark:bg-gray-900">
        <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="https://code4.hu/" target="_blank" rel="noopener" className="hover:underline">Code for Hungary</a>
            </span>
            <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
              Az ikonokat a <a target="_blank" href="https://icons8.com">Icons8</a> biztosította.
            </span>
            <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
              <a href="https://github.com/Code-for-Hungary/tudta-e" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd" /></svg>
                <span className="sr-only">GitHub account</span>
              </a>
            </div>
          </div>
        </div>
      </footer>
      <div
        id="drawer-example"
        className={`transition-transform ${drawerData ? '' : '-translate-x-full'} drop-shadow-md fixed top-0 left-0 z-40 h-screen p-4 overflow-y-auto bg-white w-80 dark:bg-gray-800`}
        tabindex="3"
        aria-labelledby="drawer-label"
      >
        <h5
          id="drawer-label"
          className="inline-flex items-center mb-4 text-base font-semibold text-gray-500 dark:text-gray-200"
        >
          <svg
            className="w-5 h-5 mr-2"
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
          className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 right-2.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
          onClick={() => setdrawerData(null)}
        >
          <svg
            aria-hidden="true"
            className="w-5 h-5"
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
          <span className="sr-only">Bezár</span>
        </button>
        <p className="mb-6 text-sm text-gray-500 dark:text-gray-200">
          {drawerData?.body}
        </p>
      </div>
    </>
  )
}
