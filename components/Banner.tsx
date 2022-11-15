import Image from 'next/image'


function Banner() {
  return (
    <div className='flex flex-col space-y-2 py-16 md:space-y-4 lg:h-[95vh] lg:justify-end lg:pb-12'>
        <div className="absolute top-0 left-0 h-[95vh] -z-50 w-screen">
            <Image src={"/assets/bg3.jpg"} alt="background img" layout="fill" objectFit="cover" className='-z-10'/>
        </div>
        <div className='flex items-center h-[55vh] w-[40vw] pl-4'>
            <p className="text-2xl lg:text-4xl md:text-2xl font-bold">
                <i>"There’s a lesson here, and I’m not going to be the one to figure it out."</i>
            </p>
        </div>
        <div className='w-[20vw] h-[20vh]'>
            <button> <Image src={"/assets/BURRP.png"} alt="background img" layout="fixed" width={500} height={500} className='z-10'/></button>

        </div>
    
    </div>
  )
}

export default Banner