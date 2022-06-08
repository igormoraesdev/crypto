import Image from 'next/image'

const HomeScreen = () => {
  return (
    <div className="h-screen bg-indigo-600">
      <div className="w-full h-full container mx-auto flex flex-col justify-center items-center">
        <div className="mb-10">
          <Image width={100} height={100} src="/bitcoin.png" alt="Bitcoin" />
        </div>
        <h1 className="max-w-xl max-h-28 font-primary font-thin text-center sm:text-6xl text-5xl text-white">
          The World’s Best Crypto House
        </h1>
        <div>
          <button className="mt-16 py-4 px-8 bg-white text-indigo-600 rounded-md font-bold hover:bg-indigo-900 hover:text-white hover:-translate-y-1 ease-in duration-300">
            Join us now
          </button>
        </div>
      </div>
    </div>
  )
}

export default HomeScreen
