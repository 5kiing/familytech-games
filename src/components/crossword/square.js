import styles from "@/styles/crossword.module.css";
import React, { useState } from "react";

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

  // const CrosswordSquare = () => {
  //   const [color, setColor] = useState("white");

  //   const onCorrect = () => {
  //     setColor("green");
  //   };

  //   return (
  //     <div
  //       className="crossword-squre"
  //       onClick={onCorrect}
  //       style={{ backgroundColor: color }}
  //     >
  //       ?
  //     </div>
  //   );
  // };

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
              ? { backgroundColor: "#2a3492", borderColor: "#2a3492" }
              : {}),
            ...(key_character == "&"
              ? { backgroundColor: "white", height: 0, width: 0, border: 0 }
              : {}),
            ...(key_character !== "*" && key_character !== "&"
              ? { backgroundColor: "white", borderColor: "#2a3492" }
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

// import React, { useState } from "react"; // Import React and useState

// import styles from "@/styles/crossword.module.css";

// function Square(props) {
//   let {
//     character,
//     key_character,
//     handleSquareInput,
//     handleKeyDown,
//     row,
//     col,
//     clueNumber,
//     dimensions,
//     inputLocation,
//     correctLetter, // Pass the correct letter as a prop
//   } = props;

//   // Initialize a state variable to track correctness
//   const [isCorrect, setIsCorrect] = useState(false);

//   function handleChange(event) {
//     const enteredValue = event.target.value;

//     // Check if the entered letter is correct
//     if (enteredValue === correctLetter) {
//       event.target.style.backgroundColor = "green"; // Change background color to green
//     } else {
//       event.target.style.backgroundColor = "white"; // Change back to white if incorrect
//     }

//     handleSquareInput(enteredValue, row, col, inputLocation);
//   }

//   function handleDownKey(event) {
//     handleKeyDown(event, row, col, inputLocation);
//   }

//   return (
//     <>
//       <div className={styles.div}>
//         {clueNumber !== 0 ? (
//           <p className={styles.number}>{clueNumber}</p>
//         ) : null}
//         <input
//           ref={(element) =>
//             (inputLocation.current[row * dimensions + col] = element)
//           }
//           className={styles.square}
//           readOnly={key_character === "*" || key_character === "&"}
//           style={
//             isCorrect // Use isCorrect to change the color
//               ? { backgroundColor: "green", borderColor: "black" }
//               : key_character === "*"
//               ? { backgroundColor: "black", borderColor: "black" }
//               : key_character === "&"
//               ? {
//                   backgroundColor: "black",
//                   height: 0,
//                   width: 0,
//                   border: 0,
//                 }
//               : isCorrect
//               ? { backgroundColor: "green", borderColor: "black" } // Change white to green when correct
//               : { backgroundColor: "white", borderColor: "black" }
//           }
//           maxLength={1}
//           type="text"
//           onInput={handleChange} // Use onInput instead of onChange
//           onKeyDown={handleDownKey}
//           disabled={key_character === "*" || key_character === "&"}
//         ></input>
//       </div>
//     </>
//   );
// }

// export default Square;
