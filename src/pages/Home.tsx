import Header from '../components/Header'
import { FaUser } from "react-icons/fa";

function Home() {
  return (
    <section className='bg-cream h-full'>
        <Header />
        <div className='w-[75%] mx-auto'>
          <div className='bg-amber-300 py-8 border-b-2 border-b-orange'>
           <h2 className='text-lg text-center uppercase font-semibold text-brown'>Your Workspace</h2>
        </div>

        <div className='flex items-center py-5 gap-2'>
          <FaUser className="text-brown"/>
            <h2 className='text-md uppercase font-bold text-brown'>Your Projects</h2>
        </div>
        </div>
        
    </section>
  )
}

export default Home