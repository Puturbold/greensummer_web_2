import Link from 'next/link'

const Header = () => {
  return (

    <div className="flex justify-between text-accent-2 font-bold lg:text-2xl md:text-lg pt-6 mb-32">
      <div className='' >
      <Link href="/">Green Summer</Link>
      </div>
      <ul className='flex flex-row gap-4'>
        <Link href="/">Home</Link>
        <Link href="/posts/about">About</Link>
        <a href="https://github.com/ta346/greensummer/tree/main">Github</a>
      </ul>

  </div>            
  )
}

export default Header
