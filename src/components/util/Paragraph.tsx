import React from 'react'

const Paragraph = ({children, styles}: any) => {
  return (
    <p className={`typography__p ${styles ? styles : ""}`}>
        <span>{children}</span>
    </p>
  )
}

export default Paragraph
