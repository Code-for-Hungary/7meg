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
          <img src="/7meg_logo.png" alt="7 meg a nyolcat log" />
        </div>
        <div className="container top-0 flex flex-col items-center justify-center w-full mx-auto mt-4 text-center xl:px-0">
          <h2 className="text-cyan-500 dark:text-cyan-20 max-w-2xl text-3xl font-bold leading-snug tracking-tight lg:leading-tight lg:text-4xl ">
            Hét meg a nyolcát&thinsp;!
          </h2>
        </div>
        <div className="container sticky top-0 bg-gray-200 pt-5 pb-5 mb-5 z-10 text-center text-base font-bold tracking-wider0 mt-5 uppercase text-gray-800 dark:text-white">
          Amióta nézed ezt az oldalt
        </div>





        <div className="flex items-center justify-center w-screen text-gray-800 p-10 pt-2">
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
                <svg aria-hidden="true" className="flex-shrink-0 inline w-5 h-5 mt-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"></path></svg>
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
                <svg aria-hidden="true" className="flex-shrink-0 inline w-5 h-5 mt-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"></path></svg>
              </a>
              <div className="pb-3">
                <img alt="piggy bank" src="/save-money.gif" className="w-16 h-16 dark:invert" />
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
                <svg aria-hidden="true" className="flex-shrink-0 inline w-5 h-5 mt-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"></path></svg>
              </a>
              <div className="pb-3">
                <img alt="car" className="w-16 h-16 dark:invert" src="/car.gif" />
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
                <svg aria-hidden="true" className="flex-shrink-0 inline w-5 h-5 mt-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"></path></svg>
              </a>
              <div className="pb-3">
                <img alt="money bag with bomb" className="w-16 h-16 dark:invert" src="/debt.gif" />
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
                <svg aria-hidden="true" className="flex-shrink-0 inline w-5 h-5 mt-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"></path></svg>
              </a>
              <div className="pb-3">
                <img className="w-16 h-16 dark:invert" src="/wave.gif" alt="water waves" />
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
                <svg aria-hidden="true" className="flex-shrink-0 inline w-5 h-5 mt-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"></path></svg>
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
                <svg aria-hidden="true" className="flex-shrink-0 inline w-5 h-5 mt-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"></path></svg>
              </a>
              <div className="pb-3">
                <img src="/money-bag.gif" alt="Coins" className="w-16 h-16 dark:invert" />
              </div>
              <p className="mb-3 font-normal text-gray-500 dark:text-gray-200">
                Ennyi befagyasztott Európai Uniós pénz érkezett volna Magyarországra
              </p>
              <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
                <Counter {...calculateIntervalAndAmount(2769 * MILLIARD, 7 * YEAR)} />
              </h5>
            </div>

            <div className="relative flex flex-col max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <a
                className="absolute right-4 top-2 text-gray-500 hover:text-blue-600 cursor-pointer"
                onClick={() => setdrawerData({
                  title: 'Paksi bővítés',
                  body: (
                    <p>
                      A Paksi beruházás becsült költsége 12 milliárd Euro, amelyből 10 milliárd EUR 30 éves futamidejű, 4-5%-os orosz hitelből finanszírozott.
                      <br /> <br /> Forrás: <a className="inline-flex items-center text-blue-600 hover:underline" href="https://hvg.hu/gazdasag/20150623_Megkapta_a_kegyelemdofest_Paks_II" target="_blank" rel="noreferrer">hvg.hu</a>, <a className="inline-flex items-center text-blue-600 hover:underline" href="https://hu.wikipedia.org/wiki/A_paksi_atomer%C5%91m%C5%B1_b%C5%91v%C3%ADt%C3%A9se" target="_blank" rel="noreferrer">Wikipedia</a>
                    </p>
                  )
                })}
              >
                <svg aria-hidden="true" className="flex-shrink-0 inline w-5 h-5 mt-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"></path></svg>
              </a>
              <div className="pb-3">
                <img src="/nuclear.gif" alt="nuclear plant" className="w-16 h-16 dark:invert" />
              </div>
              <p className="mb-3 font-normal text-gray-500 dark:text-gray-200">
                Ennyibe került a Paks-2 atomerőmű-blokk építése
              </p>
              <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
                <Counter {...calculateIntervalAndAmount(254 * MILLIARD, YEAR)} />
              </h5>
            </div>

            <div className="relative flex flex-col max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <a
                className="absolute right-4 top-2 text-gray-500 hover:text-blue-600 cursor-pointer"
                onClick={() => setdrawerData({
                  title: 'Felsőoktatás',
                  body: (
                    <p>
                      A felsőoktatásra fordított összeg a 2023-as évben 609,5 milliárd forint.
                      <br /> <br /> Forrás: <a className="inline-flex items-center text-blue-600 hover:underline" href="https://koltsegvetes.k-monitor.hu/" target="_blank" rel="noreferrer">K-Monitor | átlátható költségvetés</a>
                    </p>
                  )
                })}
              >
                <svg aria-hidden="true" className="flex-shrink-0 inline w-5 h-5 mt-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"></path></svg>
              </a>
              <div className="pb-3">
                <img src="/mortarboard.gif" alt="mortarboard" className="w-16 h-16 dark:invert" />
              </div>
              <p className="mb-3 font-normal text-gray-500 dark:text-gray-200">
                Ennyi pénzt költöttünk el a felsőoktatás finanszírozására
              </p>
              <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
                <Counter {...calculateIntervalAndAmount(609.5 * MILLIARD, YEAR)} />
              </h5>
            </div>


          </div>
        </div>
      </main>
      <footer className="bg-white dark:bg-gray-900">
        <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <span className="mb-2 text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="https://code4.hu/" target="_blank" rel="noopener" className="hover:underline">Code for Hungary</a>
            </span>
            <div className="flex">
              <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
                <a href="https://www.flaticon.com/animated-icons" target="_blank" title="animated icons">Animált ikonok: Freepik - Flaticon</a>

                {/*Az ikonokat az <a target="_blank" href="https://icons8.com">Icons8</a> biztosította.*/}
              </span>
            </div>
            <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
              <a href="https://github.com/Code-for-Hungary/tudta-e" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" /></svg>
                <span className="sr-only">GitHub account</span>
              </a>
            </div>
          </div>
          <div className="mt-4 sm:flex sm:items-center sm:justify-between">
            <a href="https://vercel.com?utm_source=C4HU&utm_campaign=oss" target="_blank" rel="noopener noreferrer">
              <svg width={212} height={44} viewBox="0 0 212 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width={212} height={44} rx={8} fill="black" />
                <path d="M60.4375 15.2266V26.5H61.8438V22.4766H64.6797C66.7969 22.4766 68.3047 20.9844 68.3047 18.875C68.3047 16.7266 66.8281 15.2266 64.6953 15.2266H60.4375ZM61.8438 16.4766H64.3281C65.9609 16.4766 66.8594 17.3281 66.8594 18.875C66.8594 20.3672 65.9297 21.2266 64.3281 21.2266H61.8438V16.4766ZM73.3441 26.6484C75.7425 26.6484 77.2269 24.9922 77.2269 22.2891C77.2269 19.5781 75.7425 17.9297 73.3441 17.9297C70.9456 17.9297 69.4613 19.5781 69.4613 22.2891C69.4613 24.9922 70.9456 26.6484 73.3441 26.6484ZM73.3441 25.4375C71.7503 25.4375 70.8519 24.2812 70.8519 22.2891C70.8519 20.2891 71.7503 19.1406 73.3441 19.1406C74.9378 19.1406 75.8363 20.2891 75.8363 22.2891C75.8363 24.2812 74.9378 25.4375 73.3441 25.4375ZM89.2975 18.0781H87.9459L86.2897 24.8125H86.1647L84.2819 18.0781H82.9928L81.11 24.8125H80.985L79.3288 18.0781H77.9694L80.3288 26.5H81.6881L83.5631 19.9844H83.6881L85.5709 26.5H86.9381L89.2975 18.0781ZM93.8213 19.1172C95.1572 19.1172 96.0478 20.1016 96.0791 21.5938H91.4384C91.54 20.1016 92.4775 19.1172 93.8213 19.1172ZM96.04 24.3203C95.6884 25.0625 94.9541 25.4609 93.8681 25.4609C92.4384 25.4609 91.5088 24.4062 91.4384 22.7422V22.6797H97.4931V22.1641C97.4931 19.5469 96.1103 17.9297 93.8369 17.9297C91.5244 17.9297 90.04 19.6484 90.04 22.2969C90.04 24.9609 91.5009 26.6484 93.8369 26.6484C95.6806 26.6484 96.9931 25.7578 97.3838 24.3203H96.04ZM99.2825 26.5H100.626V21.2812C100.626 20.0938 101.556 19.2344 102.837 19.2344C103.103 19.2344 103.587 19.2812 103.697 19.3125V17.9688C103.525 17.9453 103.243 17.9297 103.025 17.9297C101.908 17.9297 100.939 18.5078 100.689 19.3281H100.564V18.0781H99.2825V26.5ZM108.181 19.1172C109.517 19.1172 110.408 20.1016 110.439 21.5938H105.798C105.9 20.1016 106.838 19.1172 108.181 19.1172ZM110.4 24.3203C110.048 25.0625 109.314 25.4609 108.228 25.4609C106.798 25.4609 105.869 24.4062 105.798 22.7422V22.6797H111.853V22.1641C111.853 19.5469 110.47 17.9297 108.197 17.9297C105.884 17.9297 104.4 19.6484 104.4 22.2969C104.4 24.9609 105.861 26.6484 108.197 26.6484C110.041 26.6484 111.353 25.7578 111.744 24.3203H110.4ZM116.76 26.6484C117.924 26.6484 118.924 26.0938 119.455 25.1562H119.58V26.5H120.861V14.7344H119.518V19.4062H119.4C118.924 18.4844 117.932 17.9297 116.76 17.9297C114.619 17.9297 113.221 19.6484 113.221 22.2891C113.221 24.9375 114.603 26.6484 116.76 26.6484ZM117.072 19.1406C118.596 19.1406 119.549 20.3594 119.549 22.2891C119.549 24.2344 118.603 25.4375 117.072 25.4375C115.533 25.4375 114.611 24.2578 114.611 22.2891C114.611 20.3281 115.541 19.1406 117.072 19.1406ZM131.534 26.6484C133.667 26.6484 135.065 24.9219 135.065 22.2891C135.065 19.6406 133.674 17.9297 131.534 17.9297C130.378 17.9297 129.354 18.5 128.893 19.4062H128.768V14.7344H127.424V26.5H128.706V25.1562H128.831C129.362 26.0938 130.362 26.6484 131.534 26.6484ZM131.221 19.1406C132.76 19.1406 133.674 20.3203 133.674 22.2891C133.674 24.2578 132.76 25.4375 131.221 25.4375C129.69 25.4375 128.737 24.2344 128.737 22.2891C128.737 20.3438 129.69 19.1406 131.221 19.1406ZM137.261 29.5469C138.753 29.5469 139.425 28.9688 140.143 27.0156L143.433 18.0781H142.003L139.698 25.0078H139.573L137.261 18.0781H135.808L138.925 26.5078L138.768 27.0078C138.417 28.0234 137.995 28.3906 137.222 28.3906C137.034 28.3906 136.823 28.3828 136.659 28.3516V29.5C136.847 29.5312 137.081 29.5469 137.261 29.5469ZM154.652 26.5L158.55 15.2266H156.402L153.589 24.1484H153.457L150.621 15.2266H148.394L152.332 26.5H154.652ZM162.668 19.3203C163.832 19.3203 164.598 20.1328 164.637 21.3984H160.613C160.699 20.1484 161.512 19.3203 162.668 19.3203ZM164.652 24.1484C164.371 24.7812 163.707 25.1328 162.746 25.1328C161.473 25.1328 160.652 24.2422 160.605 22.8203V22.7188H166.574V22.0938C166.574 19.3984 165.113 17.7812 162.676 17.7812C160.199 17.7812 158.66 19.5078 158.66 22.2578C158.66 25.0078 160.176 26.6719 162.691 26.6719C164.707 26.6719 166.137 25.7031 166.488 24.1484H164.652ZM168.199 26.5H170.137V21.5625C170.137 20.3672 171.012 19.5859 172.27 19.5859C172.598 19.5859 173.113 19.6406 173.262 19.6953V17.8984C173.082 17.8438 172.738 17.8125 172.457 17.8125C171.356 17.8125 170.434 18.4375 170.199 19.2812H170.067V17.9531H168.199V26.5ZM181.7 20.8281C181.497 19.0312 180.168 17.7812 177.973 17.7812C175.403 17.7812 173.895 19.4297 173.895 22.2031C173.895 25.0156 175.411 26.6719 177.981 26.6719C180.145 26.6719 181.489 25.4688 181.7 23.6797H179.856C179.653 24.5703 178.981 25.0469 177.973 25.0469C176.653 25.0469 175.856 24 175.856 22.2031C175.856 20.4297 176.645 19.4062 177.973 19.4062C179.036 19.4062 179.676 20 179.856 20.8281H181.7ZM186.817 19.3203C187.981 19.3203 188.747 20.1328 188.786 21.3984H184.762C184.848 20.1484 185.661 19.3203 186.817 19.3203ZM188.802 24.1484C188.52 24.7812 187.856 25.1328 186.895 25.1328C185.622 25.1328 184.802 24.2422 184.755 22.8203V22.7188H190.723V22.0938C190.723 19.3984 189.262 17.7812 186.825 17.7812C184.348 17.7812 182.809 19.5078 182.809 22.2578C182.809 25.0078 184.325 26.6719 186.841 26.6719C188.856 26.6719 190.286 25.7031 190.637 24.1484H188.802ZM192.427 26.5H194.364V14.6484H192.427V26.5Z" fill="white" />
                <path d="M23.3248 13L32.6497 29H14L23.3248 13Z" fill="white" />
                <line x1="43.5" y1="2.18557e-08" x2="43.5" y2={44} stroke="#5E5E5E" />
              </svg>
            </a>
          </div>
        </div>
      </footer>
      <div
        id="drawer-example"
        className={`transition-transform ${drawerData ? '' : '-translate-x-full'} drop-shadow-md fixed top-0 left-0 z-40 h-screen p-4 overflow-y-auto bg-white w-80 dark:bg-gray-800`}
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
              fillRule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
              clipRule="evenodd"
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
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
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
