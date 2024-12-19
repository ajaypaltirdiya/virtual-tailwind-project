import { features } from "../constants"

const FeatureSection = () => {
  return (
    <div className="relative mt-20 antialiased border-b border-neutral-700 pb-10" id="features">
        <div className="text-center">
            <span className="bg-neutral-900 rounded-full py-2 px-3 uppercase font-semibold text-orange-600 h6">Feature</span>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl mt-10 lg:mt-20 tracking-wide">Easily build <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">your code</span></h2>
        </div>

        <div className="flex flex-wrap  mt-10 lg:mt-20">
            {features.map((feature,index) => (
                <div key={index} className="w-full sm:w-1/2 lg:w-1/3 mb-5 lg:mb-10 ">
                    <div className="flex">
                        <div className="size-10 bg-neutral-900 text-orange-700 p-2 rounded-full">{feature.icon}</div>
                        <div className="ml-4">
                            <h3 className="text-xl mb-2 lg:mb-5 underline underline-offset-4 decoration-orange-900/20">{feature.text}</h3>
                            <p className="text-base text-neutral-500 line-clamp-3">{feature.description}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default FeatureSection