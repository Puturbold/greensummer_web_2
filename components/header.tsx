import Link from 'next/link'

const Header = () => {
  return (

    <div className="flex justify-between text-white font-bold lg:text-2xl md:text-lg pt-6 mb-32">
      <div className='' >
      <Link href="/">Turbold Baatarchuluu </Link>
      </div>
      <ul className='flex flex-row gap-4'>

        <Link href="/">Projects</Link>
        <Link href="/">Resume</Link>
        <a href="https://github.com/Puturbold">Github</a>
      </ul>

  </div>            
  )
}

export default Header
