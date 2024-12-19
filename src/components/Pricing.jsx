import { CheckCircle2 } from "lucide-react";
import { pricingOptions } from "../constants";

const Pricing = () => {
  return (
    <section className="mt-10" id="pricing">
        <h2 className="text-center text-3xl sm:text-5xl lg:text-6xl text-neutral-100 mb-10 tracking-wide">Pricing</h2>
        <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {pricingOptions.map((plan,index) => (
                    <div className="border flex flex-col space-y-5 border-neutral-800 shadow-md w-full  rounded-md p-8" key={index}>
                        <h3 className="text-4xl">{plan.title} 
                            <span className="text-orange-500 font-semibold text-base">{" "}{plan.title==="Pro" && '(Most Popular)'}</span>
                        </h3>
                        <h4 className="text-4xl">{plan.price}<span className="text-neutral-500 text-sm">/Month</span></h4>
                        <ul>
                            {plan?.features.map((feature,index) => (
                                <li key={index} className="flex space-x-2 items-center my-7">
                                    <CheckCircle2 className="mr-3"/> {feature}
                                </li>
                            ))}
                        </ul>
                        <a href="#" className="block border text-xl transition duration-500 hover:-translate-y-1 hover:ring-4 ring-offset-2 ring-offset-orange-600/30 ring-orange-800/30 hover:scale-105 shadow-orange-500/30 shadow-sm text-center  text-white border-neutral-800 py-2 px-3 my-2 rounded-md uppercase tracking-tight hover:bg-gradient-to-r from-orange-600 to-orange-800 hover:text-slate-50">Subscribe</a>
                    </div>
                ))}
        </div>
    </section>
  )
}

export default Pricing