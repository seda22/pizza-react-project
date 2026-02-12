export default function AdditionalToppings({ list, selected, onChange }) {
  return (
    <section>
      <h3>Ek Malzemeler</h3>
      <p>En Fazla 10 malzeme seçebilirsiniz. 5₺</p>

      <div className="toppings-grid">
        {list.map(item => (
          <label key={item.id} className="check-container">
            {item.name}

            <input
              type="checkbox"
              name={item.name}
              checked={selected.includes(item.name)}
              onChange={onChange}
            />

            <span className="checkmark"></span>
          </label>
        ))}
      </div>

    </section>
  );
}
