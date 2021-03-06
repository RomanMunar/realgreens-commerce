interface Props {
  onClick?: () => void
  img?: string | null
}

const AvatarButton = ({ onClick, img, ...rest }: Props) => {
  return img && img !== null ? (
    <button
      onClick={onClick}
      {...rest}
      className="border-2 hover:border-green-900 rounded-full overflow-hidden  inline-flex"
    >
      <img src={img} className="w-8 h-8" />
    </button>
  ) : (
    <button
      onClick={onClick}
      {...rest}
      className="rounded-full inline-flex bg-gradient-to-tl from-green-700 via-purple-600 border-2 hover:border-green-900 to-blue-400 w-8 h-8"
    />
  )
}

export default AvatarButton
