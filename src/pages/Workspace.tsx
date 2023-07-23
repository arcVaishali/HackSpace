import bimage from './../assets/homebg.png';
import Toolbar from '../components/toolbar';
import Navbar from '../components/navbar';
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
};

export default MyWorkSpace;
