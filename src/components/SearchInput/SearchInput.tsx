import { ChangeEvent } from "react";
import { FaTimes } from "react-icons/fa";
import styles from "./SearchInput.module.scss";

export const SearchInput = ({
  searchQuery,
  onChange,
}: {
  searchQuery: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}) => {
  return (
    <div className={styles.search_input_container}>
      <input
        type="text"
        value={searchQuery}
        placeholder="Search for a movie"
        className={styles.search_input}
        onChange={onChange}
      />
      {searchQuery.length > 0 && (
        <FaTimes
          className={styles.clear_icon}
          onClick={() =>
            onChange({ target: { value: "" } } as ChangeEvent<HTMLInputElement>)
          }
        />
      )}
    </div>
  );
};
