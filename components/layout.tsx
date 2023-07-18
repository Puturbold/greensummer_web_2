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
    <div className=" bg-accent-1 px-5">
      <Meta />
      <Header/>
      <div className=" bg-accent-1">

          <div>{children}</div>
      </div>
      <Footer />
      </div>
  )
}

export default Layout
