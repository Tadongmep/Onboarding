import styles from './onboarding-purpose.module.css';
import { useDispatch, useSelector } from 'react-redux'
import {
  addActiveStep,
  minusActiveStep,
  selectPurposes,
  putPurposes
} from '@bluebikv2/onboarding/store';
import { Provider } from 'react-redux'
import { store } from '@bluebikv2/onboarding/store';

/* eslint-disable-next-line */
export interface OnboardingPurposeProps { }

export function OnboardingPurpose(props: OnboardingPurposeProps) {
  const dispatch = useDispatch()
  const purposes = useSelector(selectPurposes)

  const purposeList: { purposeText: string, purposeValue: string }[] = [
    {
      purposeText: "Money Transfer",
      purposeValue: "moneyTransfer"
    },
    {
      purposeText: "Payment",
      purposeValue: "payment"
    },
    {
      purposeText: "Bill Payment",
      purposeValue: "billPayment"
    },
    {
      purposeText: "Loan",
      purposeValue: "loan"
    },
    {
      purposeText: "Investment",
      purposeValue: "investment"
    },
    {
      purposeText: "Saving",
      purposeValue: "saving"
    }
  ]

  const handleInputChange = (value: string) => {
    // Check if the input value is already in the purposes array
    const exists = purposes.includes(value)
    // If it is checked and not in the array, add it to the array
    if (!exists) {
      dispatch(putPurposes([...purposes, value]))
    }
    // If it is unchecked and in the array, remove it from the array
    else {
      dispatch(putPurposes(purposes.filter(p => p !== value)))
    }
  }

  return (
    <Provider store={store}>
      <div className={styles['container']}>
        <div>
          <h2 className="text-2xl font-bold mb-4">Step C - Purpose</h2>
          <ul className="m-0">
            {purposeList?.map(item => <li key={item?.purposeText} className="mb-4">
              <label className="flex items-center">
                <input
                  type='checkbox'
                  name='purpose'
                  // type="checkbox"
                  // name="purpose"
                  // role="checkbox"
                  value={item?.purposeText}
                  checked={purposes.includes(item?.purposeText)}
                  onChange={(e) => handleInputChange(e.target.value)}
                  className="mr-2"
                />
                {item?.purposeText}
              </label>
            </li>)}
          </ul>
          <div className="mt-6 flex justify-end">
            <button className="bg-gray-400 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded  mr-2" onClick={(e) => dispatch(minusActiveStep())}>
              Back
            </button>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={(e) => dispatch(addActiveStep())}>
              Next
            </button>
          </div>
        </div>
      </div>
    </Provider>
  );
}

export default OnboardingPurpose;
