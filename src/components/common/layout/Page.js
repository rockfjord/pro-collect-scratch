import React from 'react'
import cn from 'classnames'

export default function Page({className, children, onScroll, id}) {

  return (
    <div
      className={cn(

        className
      )}
      onScroll={onScroll}
      id={id}
    >
        {children}
    </div>
  )
}