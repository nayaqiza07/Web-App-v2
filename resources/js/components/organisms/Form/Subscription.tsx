import AnimatedMotion from '@/components/atoms/Animated/AnimatedMotion';
import InputWithButton from '@/components/molecules/FormField/InputWithButton';
import { Separator } from '@/components/ui/separator';

const Subscription = () => {
    const isSubs = Boolean(false);

    return (
        !isSubs && (
            <AnimatedMotion
                as="div"
                duration={0.5}
                variantName="slideUp"
                whileInView="visible"
                viewport={{ once: true }}
                className="flex h-[168px] flex-col items-center justify-center gap-4"
            >
                <Separator />

                <p className="text-center font-bold">Sign up for the newsletter and get 10% discount</p>
                <InputWithButton
                    id="emailSubs"
                    placeholder="E-mail Address"
                    btnText="Send"
                    inputVariant="rounded"
                    buttonVariant="rounded"
                    btnProps={{
                        variant: 'outline',
                        effect: 'expandIcon',
                        size: 'sm',
                    }}
                />
            </AnimatedMotion>
        )
    );
};

export default Subscription;
