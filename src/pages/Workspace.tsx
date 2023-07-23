import bimage from './../assets/homebg.png';
import Toolbar from '../components/toolbar';
import Navbar from '../components/Navbar';

const MyWorkSpace = () => {
    return (
        <div
            className='h-screen w-screen bg-cover justify-center flex p flex-wrap relative'
            style={{ backgroundImage: `url(${bimage})` }}
        >
            <div className='w-4/5 '>
                <Navbar />
                <Toolbar />
            </div>
        </div>
    );
};

export default MyWorkSpace;
