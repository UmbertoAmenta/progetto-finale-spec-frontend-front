export default function SearchBarVs({
  value,
  onChange,
  results,
  onSelect,
  wishRackets,
  vsRackets,
}) {
  return (
    <span className="search">
      <input
        type="text"
        placeholder="Brand / Modello"
        value={value ?? ""}
        onChange={onChange}
      />
      {value && results.length > 0 && (
        <ul className="dropdown">
          {results.map((r) => (
            <li key={r.id} onClick={() => onSelect(r)}>
              {r.title}
              {wishRackets.some((wr) => wr.id === r.id) && <span>🩷</span>}
              {vsRackets.some((vsr) => vsr.id === r.id) && <span>🆚</span>}
            </li>
          ))}
        </ul>
      )}
    </span>
  );
}
