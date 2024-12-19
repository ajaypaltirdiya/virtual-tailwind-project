import { testimonials } from "../constants"

const Testimonials = () => {
  return (
    <section className="mt-20" id="testimonials">
        <h2 className="text-center text-3xl sm:text-5xl lg:text-6xl tracking-wide">What people are saying</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-12">
                {testimonials.map((testimonial,index) => (
                    <div className="border border-neutral-800 p-5 rounded-md space-y-5" key={index}>
                        <p className="text-neutral-400 text-base line-clamp-4">{testimonial.text}</p>
                        <div className="flex items-center">
                            <img src={testimonial.image} alt="avatar" className="size-10 rounded-full ring-1 ring-offset-2 ring-offset-slate-100" />
                            <div className="ml-4">
                                <h3 className="text-neutral-300">{testimonial.user}</h3>
                                <p  className="text-neutral-500 text-sm">{testimonial.company}</p>
                            </div>
                        </div>
                    </div>
                ))}
        </div>
    </section>
  )
}

export default Testimonials