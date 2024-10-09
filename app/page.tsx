import Image from "next/image";
import screenshot from '../app/assets/hero.png'
import favicon from '../app/favicon.png'
import Head from "next/head";
import { Poppins } from 'next/font/google'
import { Nanum_Pen_Script } from "next/font/google";
import playStoreBadge from '../app/assets/google-play-badge.png'
const poppins = Poppins({
  subsets: ['latin'],

  weight: ['400', '500', '600', '700', '800']

})
const nanum = Nanum_Pen_Script({
  subsets: ['latin'],
  weight: "400"
})
export default function Home() {
  return (
    <main className="flex   flex-col items-center justify-between">
      <Head>
        <script defer type="text/javascript" src="https://api.pirsch.io/pirsch-extended.js"
          id="pirschextendedjs"
          data-code="N3JJKJVrXfpLED0UkZhI2wSlbmtc7Vhn"></script>
      </Head>


      <div className='w-10/12 mx-auto'>
        <div className='p-10 flex justify-center items-center flex-col'>
          <Image alt="favicon" src={favicon} className="w-14 h-14 rounded-xl my-2" />
          <h2 className={`text-5xl text-center font-bold ${nanum.className}`}>WittyWords</h2>
          <h2 className={`lg:text-4xl text-xl text-center text-gray-800 font-semibold ${poppins.className}`}>Your vocabulary guide</h2>


          <div className='mx-auto mt-2'>
            <a href='https://play.google.com/store/apps/details?id=com.wittywords&pcampaignid=web_share' target="_blank" rel="noreferrer" className=''>
              <Image alt="favicon" src={playStoreBadge} className="w-2/3 mx-auto mt-4 hover:scale-105  duration-200" />
            </a>
          </div>
        </div>


        <div className="">
          <Image src={screenshot} className="" alt="app screenshot" />

        </div>

      </div>


      <div className='w-full relative text-white bg-indigo-500 lg:pt-32 lg:px-32 p-6 py-10 rounded-t-3xl lg:rounded-t-[80px]'>


        <Image src={favicon} alt="avatar" className="hidden sm:block hover:scale-110 duration-200 hover:rotate-6 absolute w-20 h-20 top-10 left-36 rotate-12 rounded-xl" />
        <Image src={favicon} alt="avatar" className=" hidden sm:block hover:scale-110 duration-200 absolute hover:rotate-45 w-20 h-20 top-40 -rotate-6 right-28 rounded-full" />
        <Image src={favicon} alt="avatar" className="hidden sm:block hover:scale-125 hover:-rotate-12 duration-200 absolute w-20 h-20 bottom-44 right-56 -rotate-45 " />
        <Image src={favicon} alt="avatar" className="hidden sm:block hover:scale-125 duration-200 hover:rotate-12 absolute w-20 h-20 bottom-48 left-56 rotate-6 rounded-full" />

        <div className='flex flex-col items-center justify-center'>
          <h1 className={`lg:text-7xl text-3xl text-center font-semibold ${poppins.className}`}>Make learning  </h1>
          <h1 className={`lg:text-7xl text-3xl text-center font-semibold  ${poppins.className}`}>fun again</h1>

          <div className='mx-auto my-10'>
            <a href='https://play.google.com/store/apps/details?id=com.wittywords&pcampaignid=web_share' target="_blank" rel="noreferrer" className=''>
              <Image alt="favicon" src={playStoreBadge} className="hover:scale-105 duration-200 " />
            </a>
          </div>

          <a href="https://rutik.dev" target="_blank" rel="noreferrer" className="text-xl font-semibold text-white text-center underline decoration-wavy	mx-auto">rutik.dev</a>

        </div>

      </div>


    </main>
  );
}
