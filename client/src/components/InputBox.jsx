import React, { useState } from "react";

const InputBox = ({ sendMessage, loading }) => {
  const [input, setInput] = useState("");

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && input.trim() !== "") {
      sendMessage(input);
      setInput("");
    }
  };

  return (
    <div className="input-box" style={styles.container}>
      {loading && <progress style={styles.progress} />}
      <input
        disabled={loading}
        type="text"
        className="form-control"
        style={loading ? styles.inputLoading : styles.input}
        placeholder={loading ? "Loading..." : "What is EBIDTA .. ?"}
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyPress={handleKeyPress}
      />
    </div>
  );
};

const styles = {
  container: {
    margin: '20px 0',
  },
  progress: {
    width: "100%",
  },
  input: {
    width: '100%',
    padding: '10px',
    borderRadius: '5px',
    border: '1px solid #ced4da',
    fontSize: '16px',
  },
  inputLoading: {
    width: '100%',
    padding: '10px',
    borderRadius: '5px',
    border: '1px solid #ced4da',
    fontSize: '16px',
    backgroundColor: '#f8f9fa',
  }
};

export default InputBox;
