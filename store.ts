// FILE: store.ts
import { create } from 'zustand';
import { User } from './types';

interface UserState {
  users: User[];
  setUsers: (users: User[]) => void;
  toggleUserActive: (id: string) => void;
}

const useStore = create<UserState>((set) => ({
  users: [],
  setUsers: (users) => set({ users }),
  toggleUserActive: (id) => set((state) => ({
    users: state.users.map(user =>
      user.id === id ? { ...user, active: !user.active } : user
    ),
  })),
}));

export default useStore;