export default function SelectSize({ value, onChange }) {

  function pick(size) {
    onChange({
      target: {
        name: "size",
        value: size
      }
    });
  }

  return (
    <section>
      <h3 className="size-title">Boyut Seç *</h3>

      <div className="size-row">
        <button
          type="button"
          className={`size-pill ${value === "Kucuk" ? "active" : ""}`}
          onClick={() => pick("Kucuk")}
        >
          S
        </button>

        <button
          type="button"
          className={`size-pill ${value === "Orta" ? "active" : ""}`}
          onClick={() => pick("Orta")}
        >
          M
        </button>

        <button
          type="button"
          className={`size-pill ${value === "Buyuk" ? "active" : ""}`}
          onClick={() => pick("Buyuk")}
        >
          L
        </button>
      </div>
    </section>
  );
}
