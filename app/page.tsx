import Image from "next/image";
import WaitlistForm from './components/waitlistform'
import screenshot from '../app/assets/screenshot.png'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
     <div className='flex lg:flex-row flex-col-reverse p-6  mx-auto lg:w-10/12'>
     <div className="lg:w-1/2 ">
<Image src={screenshot} className=""/>

</div>

      <div className='lg:w-1/2 py-20 lg:mt-20 flex flex-col  '>
      <h1 className="text-5xl font-bold">WittyWords</h1>
      <h2 className="text-3xl font-semibold mt-4 mb-2">Learn new english words everyday</h2>
<WaitlistForm/>
      </div>
    



     </div>
    </main>
  );
}
