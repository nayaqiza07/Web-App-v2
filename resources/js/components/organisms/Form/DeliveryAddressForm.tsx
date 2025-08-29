import InputWithLabel from '@/components/molecules/FormField/InputWithLabel';
import { SharedData } from '@/types';
import { usePage } from '@inertiajs/react';

const DeliveryAddressForm = () => {
    const { user_address } = usePage<SharedData>().props;

    console.log(user_address);

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
                    readOnly
                    value={user_address && user_address?.country}
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
                        readOnly
                        value={user_address && user_address?.state}
                    />
                    <InputWithLabel
                        label="City"
                        labelFor="city"
                        id="city"
                        name="city"
                        type="text"
                        placeholder="Enter City"
                        autoComplete="off"
                        readOnly
                        value={user_address && user_address?.city}
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
                    readOnly
                    value={user_address && user_address?.street}
                />
                <InputWithLabel
                    label="Zip Code"
                    labelFor="zip"
                    id="zip"
                    name="zip"
                    type="text"
                    placeholder="Enter Zip Code"
                    autoComplete="off"
                    readOnly
                    value={user_address && user_address?.postal_code}
                />
            </div>
        </>
    );
};

export default DeliveryAddressForm;
