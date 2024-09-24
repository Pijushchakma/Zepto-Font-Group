import { useEffect, useState } from "react";
const baseURL = import.meta.env.VITE_BASE_BACKEND_URL;
function ShowFontGroupList() {
  const [fontUrlList, setFontUrlList] = useState([]);

  useEffect(() => {
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(`${baseURL}/get-font-groups.php`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        console.log(result);

        setFontUrlList(result);
      })
      .catch((error) => console.error(error));
  }, []);
  return (
    <div className="mx-auto flex flex-col  gap-2 container min-h-[50vh] mt-10">
      <p className="text-lg font-semibold">Our Fonts</p>
      <p className="text-sm text-[#999] mb-5">
        Browse a list of Zepto fonts to build your font group
      </p>
      <table className="table-auto w-full text-left whitespace-no-wrap">
        <thead>
          <tr>
            <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl uppercase text-left">
              Font name
            </th>
            <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 uppercase">
              Fonts
            </th>
            <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
              {" "}
              Count
            </th>
            <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
              {" "}
            </th>
          </tr>
        </thead>
        <tbody>
          {fontUrlList.map((item, idx) => (
            <tr key={idx}>
              <td className="px-4 py-3">{item.name.split(".")[0]}</td>
              <td
                className="px-4 py-3"
                style={{ fontFamily: item.name.split(".")[0] }}
              >
                Roboto, New Time Romans
                <style>
                  {`
      @font-face {
        font-family: ${item.name.split(".")[0]};
        src: url(${item.url});
      }
    `}
                </style>{" "}
              </td>
              <td className=" px-4 py-3">2</td>
              <td className=" px-4 py-3 cursor-pointer">
                {" "}
                <span className="text-blue-500 mr-2">Edit</span>{" "}
                <span className="text-red-500">Delete</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ShowFontGroupList;
