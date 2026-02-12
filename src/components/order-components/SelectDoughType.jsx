export default function SelectDoughType({ value, onChange }) {
  return (
    <section className="dough-section">
      <h3 className="dough-title">Hamur Seç *</h3>

      <div className="dough-select-wrap">
        <select
          name="dough"
          value={value}
          onChange={onChange}
          className="dough-select"
        >
          <option value="">Hamur Kalınlığı Seç</option>
          <option value="ince">İnce</option>
          <option value="orta">Orta</option>
          <option value="kalin">Kalın</option>
        </select>
      </div>
    </section>
  );
}
