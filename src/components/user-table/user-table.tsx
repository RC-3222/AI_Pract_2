import { User } from '@/types/user';
import styles from './user-table.module.scss';

type UserTableProps = {
    users: User[];
    onUserClick: (user: User) => void;
    onDeleteUser: (userId: number) => void;
}

export const UserTable = ({
    users,
    onUserClick,
    onDeleteUser,
}: UserTableProps) => {
    return (
        <div className={styles.tableContainer}>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <th>Name / Email</th>
                        <th>Address</th>
                        <th>Phone</th>
                        <th>Website</th>
                        <th>Company</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => (
                        <tr key={user.id} className={styles.tableRow}>
                            <td onClick={() => onUserClick(user)} className={styles.clickable}>
                                <div className={styles.name}>{user.name}</div>
                                <div className={styles.email}>{user.email}</div>
                            </td>
                            <td>
                                {user.address.street}, {user.address.suite}
                                <br />
                                {user.address.city}, {user.address.zipcode}
                            </td>
                            <td>{user.phone}</td>
                            <td>
                                <a href={`https://${user.website}`} target="_blank" rel="noopener noreferrer">
                                    {user.website}
                                </a>
                            </td>
                            <td>{user.company.name}</td>
                            <td>
                                <button
                                    onClick={() => onDeleteUser(user.id)}
                                    className={styles.deleteButton}
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}; 