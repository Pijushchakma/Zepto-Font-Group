import { useState } from "react";

function FontUploader() {
  const [fontFiles, setFontFiles] = useState([]);
  const [combinedFontUrl, setCombinedFontUrl] = useState(null);

  const handleFileChange = (e) => {
    setFontFiles([...e.target.files]);
  };

  const handleFontCombine = async () => {
    const formData = new FormData();
    fontFiles.forEach((file) => formData.append(`files[]`, file));

    try {
      const response = await fetch("http://localhost/upload-fonts.php", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();
      console.log("the response is : ", data);
      setCombinedFontUrl(data.combinedFontUrl);
    } catch (error) {
      console.error("Error combining fonts:", error);
    }
  };

  return (
    <div>
      <h2>Upload and Combine Fonts</h2>
      <input type="file" accept=".ttf" multiple onChange={handleFileChange} />
      <button onClick={handleFontCombine}>Combine Fonts</button>

      {combinedFontUrl && (
        <div>
          <h3>Sample Text with Combined Font</h3>
          <div style={{ fontFamily: "CombinedFont", fontSize: "24px" }}>
            Sample Text
          </div>

          <style>
            {`
              @font-face {
                font-family: 'CombinedFont';
                src: url(${combinedFontUrl});
              }
            `}
          </style>
        </div>
      )}
    </div>
  );
}

export default FontUploader;
