import bimage from "./../assets/homebg.png";
import Toolbar from "../components/toolbar";
import Navbar from "../components/navbar";

const MyWorkSpace = () => {
  return (
    <div
      className="h-screen w-screen bg-contain bg-no-repeat"
      style={{ backgroundImage: `url(${bimage})`, backgroundPosition : "center", backgroundRepeat : "no-repeat" }}
    >
      <div className="w-full flex relative">
        <Navbar />
        <Toolbar />
      </div>
    </div>
  );
};

export default MyWorkSpace;
