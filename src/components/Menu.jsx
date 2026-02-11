import FakeMenuCardList from "../../FakeMenuCardList";
import MenuCards from "./MenuCards";

export default function Menu(props) {
    const { FakeDataMenuList } = props;
    return (
        <section className="menu">
            <div className="container">
                <p className="menu-subtitle">en çok paketlenen menüler</p>
                <h2 className="menu-title">Acıktıran Kodlara Doyuran Lezzetler</h2>
                <ul className="menu-categories">
                    {FakeDataMenuList.map((object) => {
                        return (
                            <li key={object.id}>
                                <button
                                    className={`yeni-buton ${object.active ? "active" : ""}`}
                                >
                                    <img src={object.imgUrl} alt={object.alt} />
                                    <span>{object.text}</span>
                                </button>
                            </li>
                        )
                    })}
                </ul>
            </div>
            <MenuCards FakeMenuCardList={FakeMenuCardList}/>
        </section>
    )
}




