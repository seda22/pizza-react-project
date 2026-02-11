import { footerContacts, hotMenuItems, instagramImages } from "../../FakeFooterData";


export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-ust">
                    <div className="bolum-bir">
                        <span className="logo">Teknolojik<br />Yemekler</span>
                        <div className="iletisim-bolumu">
                            {footerContacts.map(item => (
                                <span key={item.id}>
                                    <img src={item.icon} alt="" />
                                    {item.text}
                                </span>
                            ))}
                        </div>
                    </div>
                    <div className="bolum-iki">
                        <h3 className="footer-baslik">Hot Menu</h3>
                        <ul className="hot-menu-icerik">
                            {hotMenuItems.map((name, i) => (
                                <li key={i}>{name}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="bolum-uc">
                        <h3 className="footer-baslik">Instagram</h3>
                        <div className="instagram-images">
                            {instagramImages.map((src, i) => (
                                <img key={i} src={src} alt="food" />
                            ))}
                        </div>

                    </div>
                </div>
                <div className="footer-bottom">
                    <div className="footer-bottom-icerik">
                        <p>© 2023 Teknolojik Yemekler.</p>
                        <a className="footer-twitter" href="#" aria-label="Twitter">
                            <img src="/assets/iteration-2/footer/Frame.png" alt="twitter-logo" />

                        </a>
                    </div>
                </div>
            </div>
        </footer>

    )
}