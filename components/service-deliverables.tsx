type ServiceDeliverablesProps = {
  items: string[];
};

function DeliverableText({ text }: { text: string }) {
  const separator = text.indexOf(":");
  if (separator < 0) return <p>{text}</p>;

  return (
    <p>
      <strong>{text.slice(0, separator)}:</strong>
      {text.slice(separator + 1)}
    </p>
  );
}

export function ServiceDeliverables({ items }: ServiceDeliverablesProps) {
  if (items.length === 0) return null;

  return (
    <div className="deliverables">
      <span className="eyebrow">Frentes de atuação</span>
      {items.map((item, index) => (
        <div key={item}>
          <strong>{String(index + 1).padStart(2, "0")}</strong>
          <DeliverableText text={item} />
        </div>
      ))}
    </div>
  );
}
