interface Props {
  onClick?: () => void
}

const AvatarButton = ({ onClick, ...rest }: Props) => {
  return (
    <button
      onClick={onClick}
      {...rest}
      className="rounded-full inline-flex bg-gradient-to-tl from-green-700 via-purple-600 border-2 hover:border-green-900 to-blue-400 w-8 h-8"
    />
  )
}

export default AvatarButton
