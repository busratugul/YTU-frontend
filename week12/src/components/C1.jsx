import React, { memo } from 'react'

function C1({veri, f1}) {
    console.log("c1 tekrar render oluyor");
  return (
    <div>Gelen Veri: {veri}
    <hr />
    <button onClick={() => f1("c1den gelen uyari")}>Uyari Goster</button>
    </div>
  )
}

export default memo(C1) //c1 componentini sadece proplar değişince render et