import Alert from './alert'
import Header from './header'
import Footer from './footer'
import Meta from './meta'

type Props = {
  preview?: boolean
  children: React.ReactNode
}

const Layout = ({children }: Props) => {
  return (
    <div className=" bg-black px-5">
      <Meta />
      <Header/>
      <div className=" bg-black">

          <div>{children}</div>
      </div>
      <Footer />
      </div>
  )
}

export default Layout
