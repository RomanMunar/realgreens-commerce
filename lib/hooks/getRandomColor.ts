const getRandomColor = () => {
  const colors = ["bg-green-300", "bg-pink-300", "bg-blue-300", "bg-yellow-300"]
  const idx = Math.floor(Math.random() * Math.floor(colors.length - 1))
  return colors[idx]
}

export default getRandomColor
