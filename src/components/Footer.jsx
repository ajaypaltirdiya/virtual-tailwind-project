import { communityLinks, platformLinks, resourcesLinks } from "../constants"

const Footer = () => {
  return (
    <div className="border-t border-neutral-600/30 mt-14 pt-8 pb-5 space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-8">
            <div>
                <h3 className="text-lg mb-3 text-neutral-100">Resources</h3>
                <ul>
                    {resourcesLinks.map((resources,index) => (
                        <li key={index}><a href={resources.href} className="block py-1 text-neutral-500 hover:text-orange-500">{resources.text}</a></li>
                    ))}
                </ul>
            </div>
            <div>
                <h3 className="text-lg mb-3 text-neutral-100">Platform</h3>
                <ul>
                    {platformLinks.map((resources,index) => (
                        <li key={index}><a href={resources.href} className="block py-1 text-neutral-500 hover:text-orange-500">{resources.text}</a></li>
                    ))}
                </ul>
            </div>
            <div>
                <h3 className="text-lg mb-3 text-neutral-100">Community</h3>
                <ul>
                    {communityLinks.map((resources,index) => (
                        <li key={index}><a href={resources.href} className="block py-1 text-neutral-500 hover:text-orange-500">{resources.text}</a></li>
                    ))}
                </ul>
            </div>
        </div>

        <div className="py-4  text-center text-neutral-500 text-sm border-t border-neutral-600/30">&copy;All rights reserved.</div>
    </div>
  )
}

export default Footer