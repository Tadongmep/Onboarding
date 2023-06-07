import styles from './onboarding-controller.module.css';
import { useSelector } from 'react-redux'
import { selectSequenceType, selectActiveStep } from '@bluebikv2/onboarding/store';
import { OnboardingBasic } from '@bluebikv2/onboarding/basic';
import { OnboardingAdditional } from '@bluebikv2/onboarding/additional';
import { OnboardingPurpose } from '@bluebikv2/onboarding/purpose';
import { OnboardingReview } from '@bluebikv2/onboarding/review'
import { Provider } from 'react-redux'
import { store } from '@bluebikv2/onboarding/store';

/* eslint-disable-next-line */
export interface OnboardingControllerProps { }

export function OnboardingController(props: OnboardingControllerProps) {

  const sequenceType = useSelector(selectSequenceType)
  const activeStep = useSelector(selectActiveStep)

  let stepSequence: React.FC<any>[]
  // eslint-disable-next-line prefer-const
  sequenceType === 0 ? stepSequence = [OnboardingBasic, OnboardingAdditional, OnboardingPurpose, OnboardingReview] : stepSequence = [OnboardingBasic, OnboardingPurpose, OnboardingAdditional, OnboardingReview]
  const StepComponent: React.FC<any> = stepSequence[activeStep];

  return (
    <Provider store={store}>
      <div className={styles['container']}>
        {/* <h1>Welcome to OnboardingController!</h1> */}
        <StepComponent />
      </div>
    </Provider>
  );
}

export default OnboardingController;
