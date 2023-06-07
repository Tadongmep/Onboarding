import styles from './onboarding-review.module.css';
import { useDispatch, useSelector } from 'react-redux'
import {
  selectFullName,
  selectEmail,
  selectDateOfBirth,
  selectPhone,
  selectPurposes,
  putActiveStep
} from '@bluebikv2/onboarding/store';
import { Provider } from 'react-redux'
import { store } from '@bluebikv2/onboarding/store';

/* eslint-disable-next-line */
export interface OnboardingReviewProps { }

export function OnboardingReview(props: OnboardingReviewProps) {
  const dispatch = useDispatch()

  const fullName = useSelector(selectFullName)
  const email = useSelector(selectEmail)
  const phoneNumber = useSelector(selectPhone)
  const dateOfBirth = useSelector(selectDateOfBirth)
  const purposes = useSelector(selectPurposes)

  const handleRenew = () => {
    dispatch(putActiveStep(0))
  }

  return (
    <Provider store={store}>
      <div className={styles['container']}>
        {/* <h1>Welcome to OnboardingReview!</h1> */}
        <form>
          <h1>
            This is all your informain :v
          </h1>
          <label>name <br />
            <input
              type="text"
              value={fullName}
              readOnly
            />
          </label> <br />
          <label>email <br />
            <input
              type="text"
              value={email}
              readOnly
            />
          </label> <br />
          <label>phone <br />
            <input
              type="text"
              value={phoneNumber}
              readOnly
            />
          </label> <br />
          <label>dob <br />
            <input
              type="text"
              value={dateOfBirth}
              readOnly
            />
          </label> <br />
          <label>purpose <br />
            <ul>
              {purposes.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </label> <br />
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={(e) => handleRenew()}>
            Re New
          </button>
        </form>
      </div>
    </Provider>
  );
}

export default OnboardingReview;
