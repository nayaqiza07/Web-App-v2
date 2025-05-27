import InputWithButton from '@/components/molecules/FormField/InputWithButton';

const Subscription = () => {
    return (
        <div className="flex h-[168px] flex-col items-center justify-center gap-4 border-t">
            <h3 className="text-center font-bold text-[#4D4D4D]">Sign up for the newsletter and get 10% discount</h3>
            <InputWithButton placeholder="E-mail Address" btnText="Send" />
        </div>
    );
};

export default Subscription;
