import { useMemo, useState } from "react";

function uzunSurenIslemler(kullanıcılar) {
  console.log("Hesaplama yapılıyor...");
  return kullanıcılar.reduce((acc, user) => acc + user.age, 0) / kullanıcılar.length;
}

function UserList({ users: kullanicilar }) {
  const [filtre, filtreGuncelle] = useState("");
  const [sayac, setSayac] = useState(0)

  // Filtrelenmiş kullanıcı listesini useMemo ile hesapla
  const filtrelenmisKullanıcılar = useMemo(() => {
    return kullanicilar.filter((kullanici) =>
      kullanici.name.toLowerCase().includes(filtre.toLowerCase())
    );
  }, [kullanicilar, filtre]);
  
  //usememosuz
 /*  const filtrelenmisKullanıcılar =  kullanicilar.filter((kullanici) =>
  kullanici.name.toLowerCase().includes(filtre.toLowerCase())) */

  // Maliyetli hesaplama işlemini yine useMemo kullanarak yap
  const ortalamaYas = useMemo(() => {
    return uzunSurenIslemler(filtrelenmisKullanıcılar);
  }, [filtrelenmisKullanıcılar]);

  return (
    <div>
      <input
        type="text"
        value={filtre}
        onChange={(e) => filtreGuncelle(e.target.value)}
        placeholder="Kullanıcıları filtrele"
      />
      <ul>
        {filtrelenmisKullanıcılar.map((user) => (
          <li key={user.id}>
            {user.name} - {user.age}
          </li>
        ))}
      </ul>
      <div>Ortalama Yaş: {ortalamaYas}</div>
      <button onClick={() =>setSayac(prev => prev + 1)}>ARTTIR: {sayac}</button>
    </div>
  );
}

export default UserList;
