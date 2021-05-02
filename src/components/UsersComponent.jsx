import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { getUsers } from '../redux/actions/users';
import { CardComponent } from './CardComponent'

export const UsersComponent = () => {
    const dispatch = useDispatch();
    const users = useSelector(state => state.usersInfo.users);
    const loading = useSelector(state => state.usersInfo.loading);
    const error = useSelector(state => state.usersInfo.error);

    useEffect(() => {
        dispatch(getUsers())
    }, [dispatch]);
    
    return (
        <>
            {loading && <p>Loading...</p>}
            {users.length > 0 && users.map((user) => (
                <CardComponent user={user} key={user.id} />
            ))}
            {users.length === 0 && !loading && <p>No users available!</p>}
            {error && !loading && <p>{error}</p>}
        </>
    )
}
