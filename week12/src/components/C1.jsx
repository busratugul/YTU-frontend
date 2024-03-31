import React, { memo } from 'react'

function C1({veri}) {
    console.log("c1 tekrar render oluyor");
  return (
    <div>Gelen Veri: {veri}</div>
  )
}

export default memo(C1) //c1 componentini sadece proplar değişince render et