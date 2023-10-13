import { useEffect, useState } from "react";

const Timer = () => {
  const [time, setTime] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prevTime) => prevTime + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // Convert the time into MM:SS format
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  // Add leading zeros to ensure the time is displayed as 00:00
  const formattedTime = `${minutes.toString().padStart(2, "0")}:${seconds
    .toString()
    .padStart(2, "0")}`;

  // Define CSS styles for bold text and increased font size
  const timerStyle = {
    fontWeight: "bold",
    fontSize: "24px", // You can adjust the font size as needed
  };

  return (
    <div>
      <h1>Timer</h1>
      <p style={timerStyle}>{formattedTime}</p>
    </div>
  );
};

export default Timer;
