export default function SummaryBox({ toppingsPrice, total, disabled }) {
  return (
    <section>
      <h3>Sipariş Toplamı</h3>

      <div>
        <span>Seçimler</span>
        <span>{toppingsPrice}₺</span>
      </div>

      <div>
        <strong>Toplam</strong>
        <strong>{total}₺</strong>
      </div>

      <button disabled={disabled}>
        SİPARİŞ VER
      </button>

    </section>
  );
}
