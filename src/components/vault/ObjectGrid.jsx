import ObjectCard from "./ObjectCard";

function ObjectGrid({ items, onSelect }) {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      {items.map((item) => (
        <ObjectCard key={item.id} item={item} onClick={() => onSelect(item)} />
      ))}
    </div>
  );
}

export default ObjectGrid;