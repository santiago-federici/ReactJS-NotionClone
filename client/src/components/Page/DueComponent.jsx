export function DueComponent ({ localDue, id, due, handleChangeLocalDue, getUpdatedDue }) {
  return (
    <input
    className='datepicker-input'
    type='date' value={localDue[id] || due || ''}
    onChange={(e) => handleChangeLocalDue(id, e.target.value)}
    onBlur={() => getUpdatedDue(id, localDue[id])}
  />
  )
}
