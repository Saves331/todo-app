import Header from '../components/Header'

function Home() {
  return (
    <section className='bg-cream'>
        <Header />
        <div className='bg-amber-300 w-[75%] mx-auto py-8'>
           <h2 className='text-md uppercase font-semibold text-brown'>Your Workspaces</h2>
        </div>

       
    </section>
  )
}

export default Home