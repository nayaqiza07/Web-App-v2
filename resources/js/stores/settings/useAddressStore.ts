import { AddressType } from '@/types';
import { create } from 'zustand';

interface AddressState {
    // Address List
    addresses: AddressType[];
    setAddresses: (addresses: AddressType[]) => void;

    // Selected Address
    selectedAddress: AddressType | null;
    setSelectedAddress: (address: AddressType | null) => void;

    // Add Address
    // Update Address
    // Delete Address
}

export const useAddressStore = create<AddressState>((set) => ({
    // Address List
    addresses: [],
    setAddresses: (addresses: AddressType[]) => set({ addresses }),

    // Selected Address
    selectedAddress: null,
    setSelectedAddress: (address: AddressType | null) => set({ selectedAddress: address }),

    // Add Address
    // Update Address
    // Delete Address
}));
