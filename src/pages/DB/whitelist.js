import React from 'react'

const whitelist = () => {
  return (
    <div>
        <h1>Whitelist</h1>
        <input
            className='form-input'
            type='text'
            name='adminName'
            placeholder='Introduce tu nombre de usuario'
          />
    </div>
  )
}

export default whitelist