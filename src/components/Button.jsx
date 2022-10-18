import React from 'react'

const Button = ({styles, ...props}) => {
  return (
    <button type='button' className={`py-4 px-6 bg-blue-gradient font-poppins font-medium text-[18px] text-primary outine-none cursor-pointer ${styles}`}>
      {props.cta}
    </button>
  )
}

export default Button