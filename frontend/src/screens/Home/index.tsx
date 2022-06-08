const HomeScreen = () => {
  return (
    <div className="h-screen relative">
      <video autoPlay muted loop className="h-full w-full object-cover">
        <source src="./video/bitcoin.mp4" type="video/mp4" />
      </video>
      <div
        style={{ backgroundColor: 'rgba(79 70 229 / 65%)' }}
        className="py-48 h-screen absolute top-0 left-0 right-0"
      >
        <div className="w-full h-full container mx-auto flex flex-col items-center z-1">
          <h1 className="mb-5 max-w-xl font-extrabold text-center sm:text-4xl text-3xl text-white">
            Discover, collect, and sell extraordinary NFTs
          </h1>
          <p className="max-w-md font-secondary font-normal text-center sm:text-2xl text-xl text-white">
            <strong>Crypto</strong>
            {" is the world's first and largest NFT marketplace"}
          </p>
          <div>
            <button className="font-secondary text-base mt-16 py-4 px-8 bg-white text-indigo-600 rounded-md font-bold hover:bg-indigo-900 hover:text-white hover:-translate-y-1 ease-in duration-300">
              Join us now
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomeScreen
