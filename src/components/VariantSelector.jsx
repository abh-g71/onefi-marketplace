function getVariantColor(name) {
  const colors = {
    Silver: "#C8C8C8",
    Orange: "#F28C28",
    "Deep Blue": "#263B73",
    "Titanium Black": "#2B2B2B",
    "Titanium Silver": "#BFC1C5",
    "Titanium Blue": "#526D91",
    Midnight: "#252A34",
    Starlight: "#E7DCC8",
  };

  return colors[name] || "#D8D8D8";
}

function VariantSelector({ variants, selectedVariant, onSelect }) {
  return (
    <div className="variant-list">
      {variants.map((variant) => (
        <button
          type="button"
          key={variant.id}
          className={`variant-option ${
            selectedVariant === variant.name ? "selected" : ""
          }`}
          onClick={() => onSelect(variant.name)}
        >
          <span
            className="variant-dot"
            style={{ backgroundColor: getVariantColor(variant.name) }}
          />

          <span>{variant.name}</span>

          {selectedVariant === variant.name && (
            <span className="variant-check">{"\u2713"}</span>
          )}
        </button>
      ))}
    </div>
  );
}

export default VariantSelector;
