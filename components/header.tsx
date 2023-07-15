import Link from 'next/link'

const Header = () => {
  return (

    <div className="flex justify-between text-white font-bold lg:text-2xl md:text-lg pt-6 mb-32">
      <div className='' >
      <Link href="/">Green Summer</Link>
      </div>
      <ul className='flex flex-row gap-4'>

        <Link href="/">Projects</Link>
        <a href="https://github.com/ta346/greensummer/tree/main">Github</a>
      </ul>

  </div>            
  )
}

export default Header
