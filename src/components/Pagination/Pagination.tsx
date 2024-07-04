import styles from "./Pagination.module.scss";

export const Pagination = ({
  pageNum,
  setPageNum,
  totalPages,
  totalResults,
}: {
  pageNum: number;
  setPageNum: (pageNum: number) => void;
  totalPages: number;
  totalResults: number;
}) => {
  return (
    <div className={styles.pagination_container}>
      <span className={styles.text}>{totalResults} results</span>
      <span className={styles.text}>
        Page {pageNum} of {totalPages}
      </span>
      <div className={styles.button_container}>
        <button
          className={styles.button}
          onClick={() => setPageNum(pageNum - 1)}
          disabled={pageNum === 1}
        >
          Previous
        </button>

        <button
          className={styles.button}
          onClick={() => setPageNum(pageNum + 1)}
          disabled={pageNum === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Pagination;
