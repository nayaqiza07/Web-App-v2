import InputWithLabel from '@/components/molecules/FormField/InputWithLabel';
import { SharedData } from '@/types';
import { usePage } from '@inertiajs/react';

const DeliveryAddressForm = () => {
    const { user_address } = usePage<SharedData>().props;

    return (
        <>
            <div className="grid gap-3">
                <InputWithLabel
                    label="Country / Region"
                    labelFor="region"
                    id="region"
                    name="region"
                    type="text"
                    placeholder="Enter Country / Region"
                    autoComplete="off"
                    value={user_address && user_address?.address?.country}
                    disabled={Boolean(user_address && user_address?.address?.country)}
                />

                <div className="grid gap-3 md:grid-cols-2">
                    <InputWithLabel
                        label="State"
                        labelFor="state"
                        id="state"
                        name="state"
                        type="text"
                        placeholder="Enter State"
                        autoComplete="off"
                        value={user_address && user_address?.address?.state}
                        disabled={Boolean(user_address && user_address?.address?.state)}
                    />
                    <InputWithLabel
                        label="City"
                        labelFor="city"
                        id="city"
                        name="city"
                        type="text"
                        placeholder="Enter City"
                        autoComplete="off"
                        value={user_address && user_address?.address?.city}
                        disabled={Boolean(user_address && user_address?.address?.city)}
                    />
                </div>
            </div>
            <div className="grid gap-3 md:grid-cols-[2fr_1fr]">
                <InputWithLabel
                    label="Address"
                    labelFor="address"
                    id="address"
                    name="address"
                    type="text"
                    placeholder="Enter Address"
                    autoComplete="off"
                    value={user_address && user_address?.address?.street}
                    disabled={Boolean(user_address && user_address?.address?.street)}
                />
                <InputWithLabel
                    label="Zip Code"
                    labelFor="zip"
                    id="zip"
                    name="zip"
                    type="text"
                    placeholder="Enter Zip Code"
                    autoComplete="off"
                    value={user_address && user_address?.address?.postal_code}
                    disabled={Boolean(user_address && user_address?.address?.postal_code)}
                />
            </div>
        </>
    );
};

export default DeliveryAddressForm;
