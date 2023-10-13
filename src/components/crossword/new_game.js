import styles from "@/styles/crossword.module.css";

function RefreshButton() {
  const handleRefreshClick = () => {
    window.location.reload(); // Reload the page
  };
  return (
    <div>
      <button className={styles.new_btn} onClick={handleRefreshClick}>
        New Board
      </button>
    </div>
  );
}

export default RefreshButton;
