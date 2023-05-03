const CssReference = ({ name, children }) => (
  <div className='css-reference'>
    <h3>CSS {name}</h3>

    {children}
  </div>
)

export default CssReference

