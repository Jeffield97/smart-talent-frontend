import React, { Children } from 'react'

const Modal = ({isVisible, setisVisible,children}) => {
  return (
    <div className='inset-0 absolute w-screen h-screen flex justify-center items-center'>
      {children}
    </div>
  )
}

export default Modal