export default function OrderNote({ value, onChange }) {
  return (
    <section className="note-section">
      <label className="note-title">Sipariş Notu</label>

      <textarea
        className="note-textarea"
        name="note"
        value={value}
        onChange={onChange}
        placeholder="Siparişine eklemek istediğin bir not var mı?"
        rows={3}
      />
    </section>
  );
}
