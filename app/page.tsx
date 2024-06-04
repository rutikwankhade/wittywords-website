import Image from "next/image";
import WaitlistForm from './components/waitlistform'
import screenshot from '../app/assets/hero.png'
import favicon from '../app/favicon.png'
import Head from "next/head";
import { Poppins } from 'next/font/google'
import { Nanum_Pen_Script } from "next/font/google";

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
          <h2 className={`text-4xl text-center text-gray-800 font-semibold ${poppins.className}`}>Your vocabulary guide</h2>


        </div>


        <div className="">
          <Image src={screenshot} className="" alt="app screenshot" />

        </div>


     
      </div>



      {/* <div className='flex lg:flex-row flex-col-reverse p-6  mx-auto lg:w-10/12'>
      

        <div className='lg:w-1/2 py-20 lg:mt-20 flex flex-col  '>
          <h1 className="text-5xl font-bold">WittyWords</h1>
          <h2 className="text-3xl font-semibold mt-4 mb-2">Learn new english words everyday</h2>
          <WaitlistForm />
        </div>




      </div> */}
    </main>
  );
}
