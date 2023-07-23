import { useContext, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { AppwriteContext } from '../context/appwrite';
import { toast } from 'react-toastify';
import { Teams } from 'appwrite';

const AcceptInvitation = () => {
    const [searchParams] = useSearchParams();
    const client = useContext(AppwriteContext);
    const navigate = useNavigate();

    const membershipId = searchParams.get('membershipId');
    const userId = searchParams.get('userId');
    const secret = searchParams.get('secret');
    const teamId = searchParams.get('teamId');

    useEffect(() => {
        (async () => {
            if (!membershipId || !userId || !secret || !teamId) {
                toast.error('Invalid invitation link');
                navigate('/');
                return;
            }
            const teams = new Teams(client);
            try {
                const res = await teams.updateMembershipStatus(
                    teamId,
                    membershipId,
                    userId,
                    secret
                );
                toast.success('Successfully joined team');
                navigate(`/changePassword`);
            } catch (error) {
                toast.error(
                    'Failed to join team.\n' + (error as Error).message
                );
                console.error('Error in navigation', error);
                navigate(`/`);
            }
        })();
    }, []);

    return <div>Accepting your invitation...</div>;
};

export default AcceptInvitation;
