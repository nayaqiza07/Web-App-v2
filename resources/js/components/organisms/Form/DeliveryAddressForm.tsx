import InputWithLabel from '@/components/molecules/FormField/InputWithLabel';
import SelectWithLabel from '@/components/molecules/FormField/SelectWithLabel';

const DeliveryAddressForm = () => {
    return (
        <>
            <div className="grid gap-3">
                <SelectWithLabel label="Country / Region" labelFor="Region" placeholder="Select Country or Region" />
                <div className="grid gap-3 md:grid-cols-2">
                    <SelectWithLabel label="State" labelFor="State" placeholder="Select State" />
                    <SelectWithLabel label="City" labelFor="City" placeholder="Select City" />
                </div>
            </div>
            <div className="grid gap-3 md:grid-cols-[2fr_1fr]">
                <InputWithLabel
                    label="Address"
                    labelFor="Address"
                    id="address"
                    name="address"
                    type="text"
                    placeholder="Enter Address"
                    autoComplete="off"
                />
                <InputWithLabel label="Zip Code" labelFor="Zip" id="zip" name="zip" type="text" placeholder="Enter Zip Code" autoComplete="off" />
            </div>
        </>
    );
};

export default DeliveryAddressForm;
