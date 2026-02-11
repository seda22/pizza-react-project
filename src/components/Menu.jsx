import MenuCards from "./MenuCards";

export default function Menu() {
    return (
        <section className="menu">
            <div className="container">
                <p className="menu-subtitle">en çok paketlenen menüler</p>
                <h2 className="menu-title">Acıktıran Kodlara Doyuran Lezzetler</h2>
                <ul className="menu-categories">
                    <li><button className="yeni-buton"><img src="./public/assets/iteration-2/icons/1.svg" alt="" /><span>Ramen</span></button></li>

                    <li><button className="yeni-buton active"><img src="./public/assets/iteration-2/icons/2.svg" alt="" /><span>Pizza</span></button></li>

                    <li><button className="yeni-buton"><img src="./public/assets/iteration-2/icons/3.svg" alt="" /><span>Burger</span></button></li>

                    <li><button className="yeni-buton"><img src="./public/assets/iteration-2/icons/4.svg" alt="" /><span>French fries</span></button></li>

                    <li><button className="yeni-buton"><img src="./public/assets/iteration-2/icons/5.svg" alt="" /><span>Fast food</span></button></li>

                    <li><button className="yeni-buton"><img src="./public/assets/iteration-2/icons/6.svg" alt="" /><span>Soft drinks</span></button></li>
                </ul>
            </div>
            <MenuCards/>
        </section>
    )
}




