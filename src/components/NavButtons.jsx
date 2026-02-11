export default function NavButtons(props) {
    const {FakeDataList} = props;
    return (
        <>
            <nav className="nav">
                <ul className="nav-liste">
                    {FakeDataList.map((item)=>{
                        return (
                            <li key={item.id}>
                                <a href="#">
                                    <img src={item.imgUrl} alt={item.alt}/>
                                    <span>{item.text}</span>
                                </a>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        </>
    )
}