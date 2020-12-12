interface Props {
  size?: number
}

const Loading = ({ size = 2 }: Props) => {
  return (
    <div className="flex items-center space-x-1">
      <div
        style={{ width: `${size}rem`, height: `${size}rem` }}
        className="bg-gray-800 animate-pulse delay-100 rounded-full"
      ></div>
      <div
        style={{ width: `${size}rem`, height: `${size}rem` }}
        className="bg-gray-800 animate-pulse delay-150 rounded-full"
      ></div>
      <div
        style={{ width: `${size}rem`, height: `${size}rem` }}
        className="bg-gray-800 animate-pulse delay-500 rounded-full"
      ></div>
    </div>
  )
}

export default Loading
