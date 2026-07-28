export default function BlueprintGrid() {
  return (
    <div aria-hidden="true" className="fixed inset-0 -z-10 pointer-events-none">
      <div className="absolute inset-0 blueprint-grid opacity-40" />
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 50% -10%, rgba(59,130,246,0.10), transparent 60%), radial-gradient(ellipse 60% 50% at 100% 100%, rgba(139,92,246,0.08), transparent 60%)',
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(to bottom, #020617 0%, transparent 12%, transparent 88%, #020617 100%)',
        }}
      />
    </div>
  );
}