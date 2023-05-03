import Note from './Note'

const Example = ({ heading, note, children }) => (
  <section>
    <h3 id={heading.id}>
      <a href={`#${heading.id}`}>
        <span><strong>{heading.cssText}</strong></span>
        <span>vs</span>
        <span><strong>{heading.jsText}</strong></span>
      </a>
    </h3>

    {note && <Note cssText={note.cssText} jsText={note.jsText}/>}

    {children}
  </section>
)

export default Example

