import Container from './container'
import { EXAMPLE_PATH } from '../lib/constants'

const Footer = () => {
  return (
    <footer className="bg-black border-t border-neutral-200">
      <Container>
  
          <div className="py-28 flex md:text-xl sm:text-lg flex-col lg:flex-row items-center place-content-center ">
            <a
              href="https://www.linkedin.com/in/turbold-baatarchuluu-194b73a2"
              className=" bg-black hover:bg-white hover:text-black border border-black text-white font-bold py-3 px-12 lg:px-8 duration-200 transition-colors mb-6 lg:mb-0"
            >
              Linkedin
            </a>
            <a
              href="https://twitter.com/puturbold"
              className=" bg-black hover:bg-white hover:text-black border border-black text-white font-bold py-3 px-12 lg:px-8 duration-200 transition-colors mb-6 lg:mb-0"
            >
              Twitter
            </a>
            <a
              href="https://github.com/Puturbold"
              className=" bg-black hover:bg-white hover:text-black border border-black text-white font-bold py-3 px-12 lg:px-8 duration-200 transition-colors mb-6 lg:mb-0"
            >
             Github
            </a>
          </div>
       
      </Container>
    </footer>
  )
}

export default Footer
