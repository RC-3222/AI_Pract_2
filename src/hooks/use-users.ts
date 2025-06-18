import { useState, useEffect } from 'react';
import { User } from '@/types/user';
import { fetchUsers } from '@/services/api';

export const useUsers = () => {
    const [users, setUsers] = useState<User[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const deleteUser = (userId: number) => {
        setUsers(users => users.filter(user => user.id !== userId));
    };

    useEffect(() => {
        const loadUsers = async () => {
            try {
                const data = await fetchUsers();

                setUsers(data);
                setError(null);
            } catch (err) {
                setError('Failed to fetch users');
            } finally {
                setLoading(false);
            }
        };

        loadUsers();
    }, []);

    return {
        users,
        deleteUser,
        loading,
        error,
    };
}; 