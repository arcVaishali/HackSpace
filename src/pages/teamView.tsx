import { useContext, useEffect, useState } from 'react';
import { UserContext } from '../context/user';
import { AppwriteContext } from '../context/appwrite';
import { Teams,  Models} from 'appwrite';

const TeamView = () => {
    const [teams, setTeams] = useState<Models.Team<any>[]>([]);
    const { user } = useContext(UserContext);
    const client = useContext(AppwriteContext);
    useEffect(() => {
        (async () => {
            const teams = new Teams(client);
            const userTeams = await teams.list();
            setTeams(userTeams.teams);
        })();
    }, [])

    if (!user) {
        return (
            <div>Loading...</div>
        )
    }
    // const teams = [
    //     "Team 1",
    //     "Team 2",
    //     "Team 3",
    //     "Team 4",
    //     "Team 5",

    // ]
    return (
        <div className='w-full h-full flex flex-col justify-center items-center bg-gray-950/90 overflow-scroll p-4'>
            <div className='flex flex-col w-fit h-fit min-w-[50%] md:min-w-[30%] sm:min-h-[50%] md:min-h-[30%] p-8 bg-gray-300 border-2 rounded-lg overflow-scroll'>
                <h1 className='text-3xl'>
                <img src="https://raw.githubusercontent.com/Suven-p/Suven-p.github.io/main/src/images/hand_wave_animated.svg"
                alt="waving hand"
                className='w-16 inline-block mr-2'/>
                Welcome Back</h1>
                <div className='flex flex-col grow'>
                    <span className='text-sm my-2'>Workspaces for {user.email}</span>
                    <div className='flex flex-col grow items-center justify-between'>
                        {teams.length === 0 && <span className='my-2'>No teams found</span>}
                        {teams.map((team, index) => {
                            return (<div key={index} className="flex justify-between w-full hover:bg-white hover:rounded-sm p-2">
                                {team.name}
                            <button>Go to team</button>
                            </div>);
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TeamView;
