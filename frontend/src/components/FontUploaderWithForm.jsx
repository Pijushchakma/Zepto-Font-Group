import { Result } from "postcss";
import { useState } from "react";
const baseURL = import.meta.env.VITE_BASE_BACKEND_URL;

function FontUploaderWithForm() {
  const [fileList, setFileList] = useState([]);
  const [error, setError] = useState("");
  const handleFileChange = (event) => {
    const selectedFiles = [...event.target.files];
    setFileList(selectedFiles);
  };

  const handleDrop = (event) => {
    event.preventDefault();
    let files = [...event.dataTransfer.files];

    setFileList(files);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (fileList.length < 1) {
      setError("Please upload at least 1 TTF file before submitting.");
    } else {
      const formData = new FormData();
      fileList.forEach((file) => formData.append(`files[]`, file));

      try {
        const response = await fetch(`${baseURL}/upload-fonts.php`, {
          method: "POST",
          body: formData,
        });
        await response.json();
        console.log("the result is : ", Result);
      } catch (error) {
        console.error("Error combining fonts:", error);
      }
    }
  };

  return (
    <div className="min-h-[50vh] flex justify-center items-center  ">
      <form onSubmit={handleSubmit} style={{ textAlign: "center" }}>
        <div
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          className="border border-dashed border-gray-300 rounded-md p-5 cursor-pointer inline-block w-full max-w-[800px] bg-[#F9FAFB]"
        >
          <input
            type="file"
            accept=".ttf"
            onChange={handleFileChange}
            id="fileUpload"
            multiple
            style={{ display: "none" }}
          />
          <label htmlFor="fileUpload" style={{ cursor: "pointer" }}>
            <div className=" flex flex-col justify-center items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="36"
                height="36"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#888181"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-cloud-upload"
              >
                <path d="M12 13v8" />
                <path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" />
                <path d="m8 17 4-4 4 4" />
              </svg>
              <p>
                {" "}
                <span className="font-semibold text-[#6E739C]">
                  Click to upload{" "}
                </span>{" "}
                <span className="text-[#999]"> or drag and drop</span>
              </p>
              <p className="text-[12px] text-[#999]">Only TTF File Allowed</p>
            </div>
          </label>
        </div>

        {error && <p style={{ color: "red" }}>{error}</p>}
        {fileList.length > 0 && (
          <div className="flex flex-col gap-1">
            <p>File uploaded:</p>
            {fileList.map((file, idx) => (
              <p key={idx}>{file.name}</p>
            ))}
          </div>
        )}

        <button
          type="submit"
          className="mt-5 p-2.5 px-5 bg-green-500 text-white border-0 rounded cursor-pointer"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default FontUploaderWithForm;
