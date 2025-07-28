// Dettagli singola racchetta in pagina di confronto, con semplice tooltip per i contenuti più grandi
export default function RacketDetailsVs({ racket }) {
  if (!racket) {
    return null;
  }

  return (
    <div className="col-racket">
      <span>
        <img src={racket.image} alt={racket.title} />
      </span>
      <span>{racket.brand}</span>
      <span>{racket.model}</span>
      <span>{racket.length} cm</span>
      <span>{racket.weight_unstrung} g</span>
      <span>{racket.balance} mm</span>
      <span>{racket.frame_profile} mm</span>
      <span>{racket.string_bed_size} in²</span>
      <span>{racket.string_pattern}</span>
      <span>{racket.recommended_tension}</span>
      <span title={racket.description} className="too-long">
        {racket.description}
      </span>
      <span title={racket.technologies.join("\n")} className="too-long">
        {racket.technologies.join(", ")}
      </span>
      <span>{racket.price?.toFixed(2)} €</span>
    </div>
  );
}
