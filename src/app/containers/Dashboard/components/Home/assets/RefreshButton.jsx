import React from 'react'

function RefreshButton (props) {
  return (
    <div {...props}>
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1.19922 1.0791V7.0791H7.19922" stroke="#3C4858" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M1.19922 7.0791C3.52666 4.99051 5.68209 2.62586 8.94452 2.16689C10.8769 1.89503 12.8453 2.25851 14.5531 3.20253C16.2609 4.14656 17.6156 5.62001 18.4131 7.40087" stroke="#3C4858" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M19.1992 19.0791V13.0791H13.1992" stroke="#3C4858" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M19.1993 13.0791C16.8719 15.1677 14.7164 17.5323 11.454 17.9913C9.52161 18.2632 7.55322 17.8997 5.84541 16.9557C4.1376 16.0116 2.78287 14.5382 1.98535 12.7573" stroke="#3C4858" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    </div>
  )
}

export default RefreshButton