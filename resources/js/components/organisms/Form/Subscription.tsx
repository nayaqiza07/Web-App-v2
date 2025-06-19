import AnimatedMotion from '@/components/atoms/Animated/AnimatedMotion';
import InputWithButton from '@/components/molecules/FormField/InputWithButton';
import SkeletonSubscription from '../Skeleton/SkeletonSubscription';

const Subscription = () => {
    const isSubs = Boolean(false);
    const isLoading = Boolean(false);

    return (
        !isSubs && (
            <>
                {isLoading ? (
                    <SkeletonSubscription />
                ) : (
                    <AnimatedMotion
                        as="div"
                        duration={0.5}
                        variantName="slideUp"
                        className="flex h-[168px] flex-col items-center justify-center gap-4 border-t"
                    >
                        <h3 className="text-center font-bold">Sign up for the newsletter and get 10% discount</h3>
                        <InputWithButton
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
                )}
            </>
        )
    );
};

export default Subscription;
