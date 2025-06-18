import { useState } from 'react';
import type { User } from '@/types/user';
import { UserTable } from '@/components/user-table';
import { UserModal } from '@/components/user-modal';
import { useUsers } from '@/hooks/use-users';
import styles from './app.module.scss';

function App() {
    const { users, loading, error, deleteUser } = useUsers();
    const [selectedUser, setSelectedUser] = useState<User | null>(null);

    const handleUserClick = (user: User) => {
        setSelectedUser(user);
    };

    const handleCloseModal = () => {
        setSelectedUser(null);
    };

    if (loading) {
        return <div className={styles.loading}>Loading...</div>;
    }

    if (error) {
        return <div className={styles.error}>{error}</div>;
    }

    return (
        <div className={styles.app}>
            <header className={styles.header}>
                <h1>User Dashboard</h1>
            </header>

            <main className={styles.main}>
                <UserTable
                    users={users}
                    onUserClick={handleUserClick}
                    onDeleteUser={deleteUser}
                />
            </main>

            {selectedUser && <UserModal
                user={selectedUser}
                onClose={handleCloseModal}
            />}
        </div>
    );
}

export default App; 