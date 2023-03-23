import React from 'react'

function TagButton({name, handleSetTag, tagActive}) {
  return (
    <button className={`tag ${tagActive ? 'active' : null}`} onClick={() => handleSetTag(name)}>
      {name}
    </button>
  )
}

export default TagButton
