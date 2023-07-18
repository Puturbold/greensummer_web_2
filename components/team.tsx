import { CMS_NAME } from '../lib/constants'

const Team = () => {

  return (

    <section>
    <div className="items-center w-full px-5 py-24 mx-auto md:px-12 lg:px-16 max-w-7xl">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-3 lg:gap-8">
        <div className="lg:pr-24 md:pr-12">
          <h2 className="text-4xl text-accent-2">
            Our team
          </h2>
        </div>
        <div className="lg:col-span-2">
          <ul role="list" className="space-y-12 sm:grid sm:grid-cols-2 sm:gap-12 sm:space-y-0 lg:gap-x-8">
            <li>
              <div className="flex items-center space-x-4 lg:space-x-6">
                <img className="object-cover w-16 h-16 rounded-full lg:h-20 lg:w-20" src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=2070&amp;q=80" alt="" />
                <div className="space-y-1">
                  <h3 className="text-lg font-medium leading-6 text-black">
                    Turbold Baatarchuluu
                  </h3>
                  <p className="text-base text-accent-2">
                    M.S. Urban Data Science
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div className="flex items-center space-x-4 lg:space-x-6">
                <img className="object-cover w-16 h-16 rounded-full lg:h-20 lg:w-20" src="/assets/blog/authors/joe.jpeg" alt="" />
                <div className="space-y-1">
                  <h3 className="text-lg font-medium leading-6 text-black">
                    Khusel Avirmed
                  </h3>
                  <p className="text-base text-accent-2">
                    M.S. Applied Economics and Management
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div className="flex items-center space-x-4 lg:space-x-6">
                <img className="object-cover w-16 h-16 rounded-full lg:h-20 lg:w-20" src="/assets/blog/authors/tim.jpeg" alt="" />
                <div className="space-y-1">
                  <h3 className="text-lg font-medium leading-6 text-black">
                    Oyut Amarjargal
                  </h3>
                  <p className="text-base text-accent-2">
                    M.S. GIS for Development and Environment
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>            
  )
}

export default Team
