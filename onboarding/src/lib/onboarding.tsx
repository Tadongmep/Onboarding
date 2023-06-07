import styles from './onboarding.module.css';
import { OnboardingController } from '@bluebikv2/onboarding/controller'
import { putSequenceType } from '@bluebikv2/onboarding/store'
import { useDispatch } from 'react-redux'
import { Provider } from 'react-redux'
import { store } from '@bluebikv2/onboarding/store';

/* eslint-disable-next-line */
export interface OnboardingProps { }

export function Onboarding(props: OnboardingProps) {

  const dispatch = useDispatch()

  return (
    <Provider store={store}>
      <div className={styles['container']}>
        <h1>Welcome to Onboarding!</h1>
        <div className="custom-select" style={{ backgroundColor: "lightblue", position: "relative", height: "500px" }}>
          <div style={{
            display: "flex",
            width: "60%",
            justifyContent: "center",
            margin: "0 auto",
          }}>
            <select
              onChange={(e) => dispatch(putSequenceType(Number(e.target.value)))}
            >
              <option value="0">A-B-C</option>
              <option value="1">A-C-B</option>
            </select>
          </div>
          <div style={{
            display: "flex",
            width: "60%",
            justifyContent: "center",
            margin: "0 auto",
          }}>
            <OnboardingController />
          </div>
        </div>
      </div>
    </Provider>
  );
}

export default Onboarding;
