import React from 'react'

function TagButton({name, handleSetTag}) {
  return (
    <button onClick={() => handleSetTag(name)}>
      {name}
    </button>
  )
}

export default TagButton
