const Requirement = ({ source, children }) => (
  <>
    <div>
      <div>Requirement:</div>

      <div className='requirement-children'>
        {children}
      </div>
    </div>

    {source && <div>
      <div>Source:</div>

      <div>
        <div>{JSON.stringify(source, null, 2)}</div>
      </div>
    </div>}
  </>
)

export default Requirement
