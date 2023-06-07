import styles from './onboarding-redux.module.css';

/* eslint-disable-next-line */
export interface OnboardingReduxProps {}

export function OnboardingRedux(props: OnboardingReduxProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to OnboardingRedux!</h1>
    </div>
  );
}

export default OnboardingRedux;
