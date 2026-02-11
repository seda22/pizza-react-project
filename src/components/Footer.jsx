export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-ust">
                    <div className="bolum-bir">
                        <span className="logo">Teknolojik<br />Yemekler</span>
                        <div className="iletisim-bolumu">
                            <span><img src=".\public\assets\iteration-2\footer\icons\icon-1.png" />341 Londonderry Road,<br />Istanbul Türkiye</span>
                            <span><img src=".\public\assets\iteration-2\footer\icons\icon-2.png" />aciktim@teknolojikyemekler.com</span>
                            <span><img src=".\public\assets\iteration-2\footer\icons\icon-3.png" />+90 216 123 45 67</span>
                        </div>
                    </div>
                    <div className="bolum-iki">
                        <h3 className="footer-baslik">Hot Menu</h3>
                        <ul className="hot-menu-icerik">
                            <li>Terminal Pizza</li>
                            <li>5 Kişilik Hackathlon Pizza</li>
                            <li>useEffect Tavuklu Pizza</li>
                            <li>Beyaz Console Frosty</li>
                            <li>Testler Geçti Mutlu Burger</li>
                            <li>Position Absolute Acı Burger</li>
                        </ul>
                    </div>
                    <div className="bolum-uc">
                        <h3 className="footer-baslik">Instagram</h3>
                        <div className="instagram-images">
                            <img src=".\public\assets\iteration-2\footer\insta\li-0.png" alt="" />
                            <img src=".\public\assets\iteration-2\footer\insta\li-1.png" />
                            <img src=".\public\assets\iteration-2\footer\insta\li-2.png" />
                            <img src=".\public\assets\iteration-2\footer\insta\li-3.png" />
                            <img src=".\public\assets\iteration-2\footer\insta\li-4.png" />
                            <img src=".\public\assets\iteration-2\footer\insta\li-5.png" />
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <div className="footer-bottom-icerik">
                        <p>© 2023 Teknolojik Yemekler.</p>
                        <a className="footer-twitter" href="#" aria-label="Twitter">
                            <img src=".\public\assets\iteration-2\footer\Frame.png" alt="twitter-logo" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>

    )
}