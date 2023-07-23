<<<<<<< HEAD
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
=======
import bimage from './../assets/homebg.png';
import Toolbar from '../components/toolbar';
import Navbar from '../components/Navbar';
import Tabs from '../components/Tabs';
import NotesManager from '../components/NotesManager';
import TasksManager from '../components/TasksManager';

const MyWorkSpace = () => {
    const tabElements = {
        Resources: <p>Resource</p>,
        Notes: <NotesManager />,
        Tasks: <TasksManager />,
    };
    return (
        <div
            className='h-screen w-screen bg-cover justify-center flex flex-col overflow-scroll'
            style={{ backgroundImage: `url(${bimage})` }}
        >
            <Navbar />
            <div className='flex grow'>
                <Toolbar />
                <Tabs elements={tabElements} />
            </div>
        </div>
    );
>>>>>>> 619f5a45d19e78eff98e08f21c07fa215aa0a030
};

export default MyWorkSpace;
