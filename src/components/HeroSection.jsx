import video1 from '../assets/video1.mp4'
import video2 from '../assets/video2.mp4'

const HeroSection = () => {
  return (
    <div className="mx-auto flex flex-col items-center  text-center space-y-10">
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-[500] tracking-wide">VirtualR build tool  <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">for <br/> developers</span></h1>
        <p className="text-neutral-400 max-w-3xl ">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam, labore quasi molestiae quod iste sapiente fugiat, explicabo aperiam maxime ab consequuntur laboriosam cumque ullam voluptate nam quas.</p>
        <div className="flex space-x-8 items-center justify-center">
            <a href="#" className="bg-gradient-to-tr from-orange-500 to-orange-800 rounded-md py-2 px-3">Start for free</a>
            <a href="#" className="py-2 px-3 border rounded-md">Documentation</a>
        </div>
        <div className="flex mt-11 justify-center space-x-5">
            <video src={video1} className='w-1/2 rounded-md border border-orange-300 shadow-orange-400 mx-2'  autoPlay muted loop/>
            <video src={video2} className='w-1/2 rounded-md border border-orange-300 shadow-orange-400 mx-2'  autoPlay muted loop/>
        </div>
    </div>
  )
}

export default HeroSection