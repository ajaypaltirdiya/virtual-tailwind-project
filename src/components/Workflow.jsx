import { CheckCircle2 } from "lucide-react";
import codeImg from '../assets/code.jpg'
import { checklistItems } from "../constants";
const Workflow = () => {
  return (
    <div className="mt-14" id="workflow">
        <h2 className="text-center text-3xl sm:text-5xl lg:text-6xl mb-7 tracking-wide">Accelerate your {" "} 
            <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">code workflow</span>
        </h2>
        <div className="flex flex-wrap items-center justify-center lg:px-12">
            <div className="w-full md:w-1/2 mb-4 md:mb-0">
                <img src={codeImg} alt="code" />
            </div>
            <div className="w-full md:w-1/2">
                {
                    checklistItems.map((item,index) => (
                        <div className="flex mb-10" key={index}>
                            <div className="p-2 size-10 text-green-500 bg-neutral-900 rounded-full flex items-center justify-center">
                                <CheckCircle2/>
                            </div>
                            <div className="ml-4">
                                <h3 className="text-xl font-medium mb-2">{item.title}</h3>
                                <p className="text-neutral-500 text-base">{item.description}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default Workflow