import styles from "@/styles/crossword.module.css";

function Square(props) {
  let {
    character,
    key_character,
    handleSquareInput,
    handleKeyDown,
    row,
    col,
    clueNumber,
    dimensions,
    inputLocation,
    activeLocation = { direction: null, row: null, col: null },
  } = props;

  function handleChange(event) {
    handleSquareInput(event.target.value, row, col, inputLocation);
  }

  function handleDownKey(event) {
    handleKeyDown(event, row, col, inputLocation);
  }

  return (
    <>
      <div className={styles.div}>
        {clueNumber != 0 ? <p className={styles.number}>{clueNumber}</p> : null}
        {console.log(clueNumber)}
        <input
          ref={(element) => {
            inputLocation.current[row * dimensions + col] = element;
          }}
          // Brandon Changes
          className={styles.square}
          readOnly={key_character === "*" || key_character === "&"}
          style={{
            ...(key_character == "*"
              ? { backgroundColor: "#2E1D6B", borderColor: "#2E1D6B" }
              : {}),
            ...(key_character == "&"
              ? { backgroundColor: "white", height: 0, width: 0, border: 0 }
              : {}),
            ...(key_character !== "*" && key_character !== "&"
              ? { backgroundColor: "white", borderColor: "#2E1D6B" }
              : {}),
            //Can't get the colors to changes
            ...(activeLocation &&
            activeLocation.row == row &&
            activeLocation.col == col
              ? { borderColor: "red", borderWidth: "3px" }
              : {}),
          }}
          maxLength={1}
          type="text"
          onChange={handleChange}
          onKeyDown={handleDownKey}
          disabled={key_character === "*" || key_character === "&"}
        ></input>
      </div>
    </>
  );
}

export default Square;
