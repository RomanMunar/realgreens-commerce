const Close = ({ ...rest }) => {
  return (
    <svg
      {...rest}
      viewBox="0 0 24 24"
      width="24"
      height="24"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
      shapeRendering="geometricPrecision"
      className="h-6 w-6"
    >
      <path d="M18 6L6 18"></path>
      <path d="M6 6l12 12"></path>
    </svg>
  )
}

export default Close
