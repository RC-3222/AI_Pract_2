import { User } from '@/types/user';
import styles from './user-modal.module.scss';
import { createPortal } from 'react-dom';

type UserModalProps = {
    user: User;
    onClose: () => void;
}

export const UserModal = ({ user, onClose }: UserModalProps) => {

    const mapLink = `https://www.google.com/maps?q=${user.address.geo.lat},${user.address.geo.lng}`;

    return createPortal(
        <dialog ref={(el) => el?.focus()} open className={styles.modalOverlay} onClick={onClose}>
            <div className={styles.modal} onClick={e => e.stopPropagation()}>
                <button className={styles.closeButton} onClick={onClose}>×</button>

                <h2 className={styles.title}>{user.name}</h2>

                <div className={styles.section}>
                    <h3>Contact Information</h3>
                    <p><strong>Username:</strong> {user.username}</p>
                    <p><strong>Email:</strong> {user.email}</p>
                    <p><strong>Phone:</strong> {user.phone}</p>
                    <p><strong>Website:</strong> <a href={`https://${user.website}`} target="_blank" rel="noopener noreferrer">{user.website}</a></p>
                </div>

                <div className={styles.section}>
                    <h3>Address</h3>
                    <p>{user.address.street}, {user.address.suite}</p>
                    <p>{user.address.city}, {user.address.zipcode}</p>
                    <p>
                        <a href={mapLink} target="_blank" rel="noopener noreferrer" className={styles.mapLink}>
                            View on Map
                        </a>
                    </p>
                </div>

                <div className={styles.section}>
                    <h3>Company</h3>
                    <p><strong>Name:</strong> {user.company.name}</p>
                    <p><strong>Catch Phrase:</strong> {user.company.catchPhrase}</p>
                    <p><strong>Business:</strong> {user.company.bs}</p>
                </div>
            </div>
        </dialog>,
        document.body
    );
}; 