export default function ClientName({ value, onChange }) {
  return (
    <section>
      <label>Müşteri Adı</label>
      <input
        name="name"
        value={value}
        onChange={onChange}
      />

    </section>
  );
}
