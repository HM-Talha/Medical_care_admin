import React from 'react'

function DateButton(props) {
  return (
    <div {...props}>
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.19922 8.19022H17.1992" stroke="#3C4858" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M1.19922 4.63465V15.3013C1.19922 16.2832 2.09465 17.0791 3.19922 17.0791H15.1992C16.3038 17.0791 17.1992 16.2832 17.1992 15.3013V8.19021V4.63465C17.1992 3.65281 16.3038 2.85687 15.1992 2.85687H3.19922C2.09465 2.85687 1.19922 3.65281 1.19922 4.63465Z" stroke="#3C4858" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M12.1992 1.0791V4.63466" stroke="#3C4858" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M6.19922 1.0791V4.63466" stroke="#3C4858" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    </div>
  )
}

export default DateButton