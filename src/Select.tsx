import styles from "./select.module.css";
type SelectOptions = {
  label: string;
  value: number;
};

type SelectProps = {
  options: SelectOptions[];
  value?: SelectOptions;
  onChange: (value: SelectOptions | undefined) => void;
};

const Select = ({ value, options, onChange }: SelectProps) => {
  return (
    <div tabIndex={0} className={styles.container}>
      <span className={styles.value}>Value</span>
      <button className={styles["clear-btn"]}>&times;</button>
      <div className={styles.divider}></div>
      <div className={styles.caret}></div>
      <ul className={`${styles.options} ${styles.show}`}>
        {options?.map((option) => {
          return (
            <li key={option.value} className={styles.option}>
              {option.label}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Select;
