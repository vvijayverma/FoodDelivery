import React from 'react'

const SectionHeader = ({subHeader,mainHeader}) => {
  return (
    <div className="text-center">
    <h3 className="uppercase text-gray-500 text-sm font-bold leading-4">
    {subHeader}
    </h3>
    <h2 className="font-bold text-primary italic text-4xl">{mainHeader}</h2>
  </div>
  )
}

export default SectionHeader
