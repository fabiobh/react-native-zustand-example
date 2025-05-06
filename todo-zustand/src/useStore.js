import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';

const useStore = create(
    persist(
        (set) => ({
            count: 0,
            increase: () => set((state) => ({ count: state.count + 1 })),
            decrease: () => set((state) => ({ count: state.count - 1 })),
            reset: () => set({ count: 0 }),
        }),
        {
            name: 'counter-storage', // name of the item in storage (must be unique)
            storage: createJSONStorage(() => AsyncStorage), // (optional) by default, 'localStorage' is used
        }
    )
);

export default useStore;