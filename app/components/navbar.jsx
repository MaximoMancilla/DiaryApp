import Image from "next/image"
import { Roboto } from "next/font/google"

const roboto = Roboto({
    subsets:['latin'],
    weight:'500'
})

const Navbar = () => {
  return (
    <nav className='fixed w-full h-34 bg-blue-300 top-0 left-0 flex'>

    <div className="w-1/4 bg-blue-300 flex items-center justify-center text-center">
      <div>
        <Image
          width={120}
          height={130}
          src={'https://i.pinimg.com/originals/38/57/a5/3857a53a7e4de401993f84b9203bf680.png'}
          alt="Book Logo"
        />
        <h1 className={roboto.className}>TheDict</h1>
      </div>
    </div>
  
    <div className="w-3/4 bg-violet-400 flex items-center justify-center px-12">
      <input 
        type="text" 
        className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 focus:ring-blue-500 w-full"
        placeholder="Enter your text..."
      />
    </div>
  
  </nav>
  
  
  
  )
}

export default Navbar