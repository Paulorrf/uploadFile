import "./App.css";

const App = () => {
  const uploadHandler = (event) => {
    const file = event.target.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("newFile", file);

    fetch("http://localhost:5000/uploadfile", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((result) => {
        console.log("Success:", result);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <>
      <div className="file-card">
        <div className="file-inputs">
          <input type="file" name="file" onChange={uploadHandler} />
          <button>Upload</button>
        </div>
      </div>
    </>
  );
};

export default App;
