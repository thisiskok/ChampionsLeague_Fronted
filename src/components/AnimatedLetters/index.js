import './index.scss'

// This component is used to animate the letters in the header
const AnimatedLetters = ({ letterClass, strArray, idx }) => {
  return (
    <span>
      {/* Map through the array of letters and animate them */}
      {strArray.map((char, i) => (
        // key is the character and the index
        <span key={char + i} className={`${letterClass} _${i + idx}`}>
          {/* Render the character */}
          {char}
        </span>
      ))}
    </span>
  )
}

// Export the component
export default AnimatedLetters