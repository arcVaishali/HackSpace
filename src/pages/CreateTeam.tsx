import { useContext, useState } from 'react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { AppwriteContext } from '../context/appwrite';
import { AppwriteException, ID, Teams } from 'appwrite';
import { toast } from 'react-toastify';

const CreateTeam = () => {
    const [teamName, setTeamName] = useState('');
    const [memberName, setMemberName] = useState('');
    const [teamMembers, setTeamMembers] = useState<string[]>([]);
    const client = useContext(AppwriteContext);
    const teams = new Teams(client);

    const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
        e.preventDefault();
        try {
            const res = await teams.create(ID.unique(), teamName);
            await teams.createMembership(
                res.$id,
                [],
                'http://localhost:5173/team/accept',
                teamMembers[0]
            );
            toast.success('Team created successfully');
        } catch (error) {
            console.error('Error from Team Create Form', error);
            toast.error(
                'Failed to create team: ' + (error as AppwriteException).message
            );
        }
    };

    const handleAddMember = () => {
        if (memberName.trim() !== '') {
            setTeamMembers([...teamMembers, memberName]);
            setMemberName('');
        }
    };

    const handleDeleteMember = (index: number) => {
        const newTeamMembers = [...teamMembers];
        newTeamMembers.splice(index, 1);
        setTeamMembers(newTeamMembers);
    };

    const handleTeamNameChange: React.ChangeEventHandler<HTMLInputElement> = (
        e
    ) => {
        setTeamName(e.target.value);
    };

    const handleMemberNameChange: React.ChangeEventHandler<HTMLInputElement> = (
        e
    ) => {
        setMemberName(e.target.value);
    };

    return (
        <div className='p-4'>
            <form
                onSubmit={handleSubmit}
                className='m-auto bg-white rounded shadow-lg w-fit'
            >
                <div className='p-4'>
                    <label
                        htmlFor='teamName'
                        className='block font-medium text-gray-700 mb-2'
                    >
                        Team Name
                    </label>
                    <input
                        type='text'
                        id='teamName'
                        className='w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-300'
                        value={teamName}
                        onChange={handleTeamNameChange}
                        required
                    />
                </div>

                <div className='p-4'>
                    <label
                        htmlFor='memberName'
                        className='block font-medium text-gray-700 mb-2'
                    >
                        Add Member
                    </label>
                    <div className='flex'>
                        <input
                            type='text'
                            id='memberName'
                            className='flex-grow p-2 border border-gray-300 rounded-l focus:outline-none focus:ring focus:ring-blue-300'
                            value={memberName}
                            onChange={handleMemberNameChange}
                        />
                        <button
                            type='button'
                            className='px-4 py-2 bg-blue-500 text-white rounded-r hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300'
                            onClick={handleAddMember}
                        >
                            Add
                        </button>
                    </div>
                </div>

                {teamMembers.length > 0 && (
                    <div className='p-4'>
                        <label className='block font-medium text-gray-700 mb-2'>
                            Team Members
                        </label>
                        <ul>
                            {teamMembers.map((member, index) => (
                                <li
                                    key={index}
                                    className='p-2 hover:bg-slate-500/50 hover:rounded-md'
                                >
                                    {member}
                                    <XMarkIcon
                                        className='w-6 float-right cursor-pointer'
                                        onClick={(e) => {
                                            e.preventDefault();
                                            e.stopPropagation();
                                            handleDeleteMember(index);
                                        }}
                                    />
                                </li>
                            ))}
                        </ul>
                    </div>
                )}

                <div className='p-4'>
                    <button
                        type='submit'
                        className='w-full px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300'
                    >
                        Create Team
                    </button>
                </div>
            </form>
        </div>
    );
};

export default CreateTeam;
