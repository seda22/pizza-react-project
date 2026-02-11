export default function MenuCards() {
    return (
        <>
            <div className="menu-cards">
                <article className="card">
                    <img src=".\public\assets\iteration-2\pictures\food-1.png" alt="Terminal Pizza" />
                    <h3>Terminal Pizza</h3>
                    <div className="card-info">
                        <span>4.9</span>
                        <span>(200)</span>
                        <strong>60₺</strong>
                    </div>
                </article>

                <article className="card">
                    <img src=".\public\assets\iteration-2\pictures\food-2.png" alt="Acı Pizza" />
                    <h3>Position Absolute Acı Pizza</h3>
                    <div className="card-info">
                        <span>4.9</span>
                        <span>(200)</span>
                        <strong>60₺</strong>
                    </div>
                </article>

                <article className="card">
                    <img src=".\public\assets\iteration-2\pictures\food-3.png" alt="Burger" />
                    <h3>useEffect Tavuklu Burger</h3>
                    <div className="card-info">
                        <span>4.9</span>
                        <span>(200)</span>
                        <strong>60₺</strong>
                    </div>
                </article>
            </div>
        </>
    )
}