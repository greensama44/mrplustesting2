const palette = [
  { name: "Mega Red", hex: "#E10600" },
  { name: "Deep Red", hex: "#B90032" },
  { name: "Orange", hex: "#FF4B25" },
  { name: "Reward Yellow", hex: "#FFD900" },
  { name: "Off White", hex: "#F7F7F5" },
  { name: "Charcoal", hex: "#202020" },
  { name: "Soft Pink", hex: "#FCE8E6" },
];

export default function Home() {
  return (
    <main>
      <section className="hero">
        <h1>MR Plus</h1>
        <p>The new site is on its way. Here&apos;s the brand palette it&apos;s built on.</p>
        <div className="actions">
          <a className="btn btn-reward" href="#palette">See the colors</a>
          <a className="btn btn-outline" href="#palette">Learn more</a>
        </div>
      </section>

      <section className="palette" id="palette">
        <h2>Brand palette</h2>
        <p>Primary colors lead; supporting colors carry backgrounds and text.</p>
        <div className="swatches">
          {palette.map((c) => (
            <div className="swatch" key={c.hex}>
              <div className="chip" style={{ background: c.hex }} />
              <div className="meta">
                <strong>{c.name}</strong>
                <span>{c.hex}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
