import { ChangeEvent } from "react";
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
    </div>
  );
};
