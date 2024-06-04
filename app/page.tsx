import Image from "next/image";
import WaitlistForm from './components/waitlistform'
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
            <a href='#' className=''>
              <Image alt="favicon" src={playStoreBadge} className="w-1/2 mx-auto" />
            </a>
          </div>
        </div>


        <div className="">
          <Image src={screenshot} className="" alt="app screenshot" />

        </div>



      </div>


      <div className='w-full text-white bg-indigo-500 lg:p-32 p-6 py-10 rounded-t-3xl lg:rounded-t-[80px]'>
        <div className='flex flex-col items-center justify-center'>
          <h1 className={`lg:text-7xl text-3xl text-center font-semibold ${poppins.className}`}>Make learning fun <span>again</span></h1>


          {/* uncomment after published */}
          {/* <div className='mx-auto my-10'>
            <a href='#' className=''>
              <Image alt="favicon" src={playStoreBadge} className=" " />
            </a>
          </div> */}


        </div>

        <div className='flex lg:flex-row flex-col-reverse p-6  mx-auto lg:w-10/12'>


          <div className='lg:w-1/2 mx-auto flex flex-col  '>

            <WaitlistForm />
          </div>




        </div>
      </div>


    </main>
  );
}
