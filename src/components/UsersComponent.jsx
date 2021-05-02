import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { getUsers } from '../redux/actions/users';
import { CardComponent } from './CardComponent'

export const UsersComponent = () => {
    const dispatch = useDispatch();
    const users = useSelector(state => state.users.usersInfo)

    useEffect(() => {
        dispatch(getUsers([{
            id: 1,
            name: 'Leanne Graham',
            company: {
                name: 'Romaguera-Crona',
                catchPhrase: 'Multi-layerd client-server neural-net',
            }
        }]))
    }, [dispatch]);
    
    return (
        <>
            {users.length > 0 && users.map((user) => (
                <CardComponent user={user} key={user.id} />
            ))}
            {users.length === 0 && <p>No users available!</p>}
        </>
    )
}
