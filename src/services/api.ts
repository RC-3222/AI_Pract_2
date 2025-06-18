import type { User } from '@/types/user';
import { API_BASE_URL } from '@/constants/api';

export const fetchUsers = async () => {
    try {
        const response = await fetch(`${API_BASE_URL}/users`);

        if (!response.ok) throw new Error("Fetching error")

        const data = await response.json()

        return data as User[];
    } catch (error) {
        console.error(error);
        throw error;
    }
}; 