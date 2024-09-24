import { useEffect, useState } from "react";
const baseURL = import.meta.env.VITE_BASE_BACKEND_URL;

const CreateFontGroup = () => {
  const [fontRows, setFontRows] = useState([{ fontName: "" }]);
  const [error, setError] = useState("");
  const [fontList, setFontList] = useState([]);

  useEffect(() => {
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(`${baseURL}/get-font-files.php`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        let names = result.map((item) => item.name);

        setFontList(names);
      })
      .catch((error) => console.error(error));
  }, []);

  const handleAddRow = () => {
    setFontRows([...fontRows, { fontName: "" }]);
  };

  const handleRemoveRow = (index) => {
    const updatedRows = fontRows.filter((_, i) => i !== index);
    setFontRows(updatedRows);
  };

  const handleChange = (index, event) => {
    const { name, value } = event.target;
    const updatedRows = [...fontRows];
    updatedRows[index][name] = value;
    setFontRows(updatedRows);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const selectedFonts = fontRows
      .filter((row) => row.fontName !== "")
      .map((item) => item.fontName);
    if (selectedFonts.length < 2) {
      setError("You must select at least two fonts.");
    } else {
      setError("");

      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      const raw = JSON.stringify({
        fontFiles: selectedFonts,
      });

      const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
      };

      fetch(`${baseURL}/merge-fonts.php`, requestOptions)
        .then((response) => response.json())
        .then((result) => {
          console.log(result);
          setFontRows([{ fontName: "" }]);
        })
        .catch((error) => console.error(error));
    }
  };

  return (
    <div className=" mx-auto min-h-[50vh] container mt-10">
      <h2 className="text-xl font-bold pt-4">Create Font Group</h2>
      <p className="mb-5">You have to select at least 2 fonts</p>
      {error && <p className="text-red-500">{error}</p>}
      <form onSubmit={handleSubmit} className="space-y-4">
        {fontRows.map((row, index) => (
          <div key={index} className="flex space-x-4 items-center">
            <select
              name="fontName"
              value={row.fontName}
              onChange={(e) => handleChange(index, e)}
              className="p-2 border rounded-md"
            >
              <option value="">Select a Font</option>
              {fontList.map((item, idx) => (
                <option key={idx} value={item}>
                  {item}
                </option>
              ))}
            </select>
            {/* Ignore Specific Size and Price Change fields */}
            {fontRows.length > 1 && (
              <button
                type="button"
                onClick={() => handleRemoveRow(index)}
                className="text-red-500"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#ee1111"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-x"
                >
                  <path d="M18 6 6 18" />
                  <path d="m6 6 12 12" />
                </svg>
              </button>
            )}
          </div>
        ))}
        <div className="flex justify-between max-w-2xl">
          {" "}
          <button
            type="button"
            onClick={handleAddRow}
            className="px-4  rounded border"
          >
            + Add Row
          </button>
          <button type="submit" className="px-4 bg-blue-500 text-white rounded">
            Create
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateFontGroup;
