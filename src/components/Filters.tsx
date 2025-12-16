import classes from "./Filters.module.css";

interface FiltersProps {
  filter: string;
  setFilter: React.Dispatch<React.SetStateAction<string>>;
}

const FILTERS = [
  { label: "Tous", value: "tous" },
  { label: "Peintures noir et blanc", value: "black-white" },
  { label: "Peintures couleur", value: "colour" },
  { label: "Gravures", value: "drawing" },
];

export default function Filters({ filter, setFilter }: FiltersProps) {
  return (
    <div className={classes["filter-options"]}>
      {FILTERS.map(({ label, value }) => (
        <button
          key={value}
          className={`${classes["filter-button"]} ${
            filter === value ? classes["filter-active"] : ""
          }`}
          onClick={() => setFilter(value)}
        >
          {label}
        </button>
      ))}
    </div>
  );
}
