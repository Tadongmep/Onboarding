import styles from './onboarding-redux-hook.module.css';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import type { RootState, AppDispatch } from '@bluebikv2/onboarding/store'

/* eslint-disable-next-line */
export interface OnboardingReduxHookProps {}

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export function OnboardingReduxHook(props: OnboardingReduxHookProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to OnboardingReduxHook!</h1>
    </div>
  );
}

export default OnboardingReduxHook;
