const Note = ({ cssText, jsText }) => (
  <p className='note'>
    <span>Similarly, it applies to </span>
    <strong>{cssText}</strong>
    <span> vs </span>
    <strong>{jsText}</strong>
  </p>
)

export default Note
