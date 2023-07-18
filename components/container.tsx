type Props = {
  children?: React.ReactNode
}

const Container = ({ children }: Props) => {
  return <div className="bg-accent-1 text-accent-2 ">{children}</div>
}

export default Container
