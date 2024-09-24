import { useEffect, useState } from "react";
import CreateFontGroup from "./components/CreateFontGroup";
import FontUploaderWithForm from "./components/FontUploaderWithForm";
import Navbar from "./components/Navbar";
import ShowFontGroupList from "./components/ShowFontGroupList";
import ShowFontList from "./components/ShowFontList";

function App() {
  const [currentPage, setCurrentPage] = useState("Font Upload");
  useEffect(() => {
    console.log("from useeffect : ", currentPage);
  }, [currentPage]);
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  return (
    <div className="flex flex-col mx-auto  justify-center items-center">
      <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />
      {currentPage === "Font Upload" ? (
        <FontUploaderWithForm />
      ) : currentPage === "Font List" ? (
        <ShowFontList />
      ) : currentPage === "Create Font Group" ? (
        <CreateFontGroup />
      ) : (
        <ShowFontGroupList />
      )}
    </div>
  );
}

export default App;
