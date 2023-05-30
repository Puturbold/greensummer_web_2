type Props = {
  children?: React.ReactNode
}

const Container = ({ children }: Props) => {
  return <div className="bg-black text-white ">{children}</div>
}

export default Container
