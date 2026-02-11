export default function CardGrid() {
    return (
        <>
            <section className="cta">
                <div className="cta-grid"> {/*kartlar gride yerleştirmek için tanımlandı*/}
                    <article className="cta-card sol-buyuk"> {/*tek başına anlamı olan içerik olduğu için article kullanıldı*/}
                        <div className="cta-content">
                            <h2>Özel<br />Lezzetus</h2> {/*En önemli kart h2*/}
                            <p id="grid-sol">Position:Absolute Acı Burger</p>
                            <a className="cta-btn" href="#">SİPARİŞ VER</a>
                        </div>
                    </article>

                    <article className="cta-card sag-ust">
                        <div className="cta-content">
                            <h3 className="hackathlon">Hackathlon <br /> Burger Menü</h3>
                            <a className="cta-btn" href="#">SİPARİŞ VER</a>
                        </div>
                    </article>

                    <article className="cta-card sag-alt">
                        <div className="cta-content">
                            <span className="red">Çoooook </span> <span className="black">hızlı <br /> npm gibi kurye</span>
                            <a className="cta-btn" href="#">SİPARİŞ VER</a>
                        </div>
                    </article>

                </div>
            </section>

        </>
    )
}