export default function CardGrid(props) {
    const {setSelectedPage} = props;
    return (
        <>
            <section className="cta">
                <div className="cta-grid"> {/*kartlar gride yerleştirmek için tanımlandı*/}
                    <article className="cta-card sol-buyuk"> {/*tek başına anlamı olan içerik olduğu için article kullanıldı*/}
                        <div className="cta-content">
                            <h2>Özel<br />Lezzetus</h2> {/*En önemli kart h2*/}
                            <p id="grid-sol">Position:Absolute Acı Burger</p>
                            <button className="cta-btn" href="#" onClick={()=>setSelectedPage("OrderPages")}>SİPARİŞ VER</button>
                        </div>
                    </article>

                    <article className="cta-card sag-ust">
                        <div className="cta-content">
                            <h3 className="hackathlon">Hackathlon <br /> Burger Menü</h3>
                            <button className="cta-btn" href="#" onClick={()=>setSelectedPage("OrderPages")}>SİPARİŞ VER</button>
                        </div>
                    </article>

                    <article className="cta-card sag-alt">
                        <div className="cta-content">
                            <span className="red">Çoooook </span> <span className="black">hızlı <br /> npm gibi kurye</span>
                            <button className="cta-btn" href="#" onClick={()=>setSelectedPage("OrderPages")}>SİPARİŞ VER</button>
                        </div>
                    </article>

                </div>
            </section>

        </>
    )
}