import React from 'react'

function Ulke({ulkeVeri}) {
  return (
    <section className='col-12 col-sm-6 col-md-4 col-lg-3'>
       <div className='border rounded-3 p-3 border-dark border-3 d-flex bg-secondary shadow text-left' style={{justifyContent:"space-between"}}>
<h6 className='fs-10'><strong>{ulkeVeri.name.official}</strong></h6>
<img src={ulkeVeri.flags.png} width="30px" height="15px"/>
       </div>
    </section>
  )
}

export default Ulke