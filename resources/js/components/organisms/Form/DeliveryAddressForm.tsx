import InputWithLabel from '@/components/molecules/FormField/InputWithLabel';
import SelectWithLabel from '@/components/molecules/FormField/SelectWithLabel';

const DeliveryAddressForm = () => {
    return (
        <>
            <div className="grid gap-3">
                <SelectWithLabel label="Country / Region" labelFor="region" id="region" placeholder="Select Country or Region" options={[]} />
                <div className="grid gap-3 md:grid-cols-2">
                    <SelectWithLabel label="State" labelFor="state" id="state" placeholder="Select State" options={[]} />
                    <SelectWithLabel label="City" labelFor="city" id="city" placeholder="Select City" options={[]} />
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
                />
                <InputWithLabel label="Zip Code" labelFor="zip" id="zip" name="zip" type="text" placeholder="Enter Zip Code" autoComplete="off" />
            </div>
        </>
    );
};

export default DeliveryAddressForm;
