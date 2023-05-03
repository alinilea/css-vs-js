const Method = ({ name, children }) => (
  <div className={`method-${name}-container`}>
    <div><span>{name}</span> <span>output:</span></div>

    {children}
  </div>
)

export default Method
