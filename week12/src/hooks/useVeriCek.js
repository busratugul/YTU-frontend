import { useEffect, useState } from "react";

function useVeriCek(url) {
const [veri, setVeri] = useState([])
const [yukleniyor, setYukleniyor] = useState(true)
const [hata, setHata] = useState("")

useEffect(() => {
async function veriIlsle() {
    try{
        const istek = await fetch(url)
        const sonuc = await istek.json()
        setVeri(sonuc)
        setYukleniyor(false)
    }
    catch{
        setHata(hata.message , "Veri yüklenirken bir hata oluştu.")
        setYukleniyor(false)
    }
}
veriIlsle()
},[])

return {veri, yukleniyor, hata}
}

export default useVeriCek