export default function Header (props) {
  const {setSelectedPage} = props; {/*props olarak bir fonksiyon iletildi App.jsxten */}
    return(
        <>
    <header className="hero">
      <div className="hero-container">
        <span className="logo-isim">Teknolojik Yemekler</span>
        <small className="cazip">fırsatı kaçırma</small>
        <h1 className="ana-baslik">KOD ACIKTIRIR <br></br>PİZZA, DOYURUR</h1>
        <button className="buton-1" onClick={()=>setSelectedPage("OrderPages")}>ACIKTIM</button>{/*setSelectedPage dediğimiz selectedPage'i değiştiren fonksiyon her Clicklendiğinde selectedPage === "OrderPages" olacak */}
      </div>
    </header>
        </>
    )
}
