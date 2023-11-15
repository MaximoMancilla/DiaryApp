import Image from 'next/image'
import Navbar from './components/navbar'
import Welcome from './components/welcome'

export default function Home() {
  return (
    <main className="flex min-h-screen items-center  h-full p-24">
      <Welcome />
     <Navbar />
     <h1>Hello world welcome to this epic dictionary app in progress</h1>

    </main>
  )
}
