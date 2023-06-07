import styles from './onboarding-basic.module.css';
import { useDispatch, useSelector } from 'react-redux'
import { selectFullName, selectIdNumber, putFullName, putIdNumber, addActiveStep } from '@bluebikv2/onboarding/store';
import { useState } from 'react';
import { Provider } from 'react-redux'
import { store } from '@bluebikv2/onboarding/store';

/* eslint-disable-next-line */
export interface OnboardingBasicProps { }

interface Errors {
  fullName: string;
  idNumber: string;
}

const errorsCopy: Errors = {
  fullName: '',
  idNumber: '',
};

export function OnboardingBasic(props: OnboardingBasicProps) {
  const dispatch = useDispatch()

  const [errors, setErrors] = useState<Errors>(errorsCopy);
  const fullName = useSelector(selectFullName)
  const idNumber = useSelector(selectIdNumber)
  // const activeStep = useSelector(selectActiveStep)

  const validateStepA = () => {
    let isValid = true;
    setErrors({ ...errorsCopy });

    if (fullName.trim() === '') {
      setErrors(prev => ({ ...prev, fullName: 'Name is required' }));
      isValid = false;
    }

    if (idNumber.trim() === '') {
      setErrors(prev => ({ ...prev, idNumber: 'ID is required' }));
      isValid = false;
    }

    isValid && dispatch(addActiveStep()); // Move to the next step regardless of validation result
  };

  return (
    <Provider store={store}>
      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-4">Step A - Basic Information</h2>
        <div className="mb-4">
          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            className="border rounded p-2"
            defaultValue={fullName}
            onChange={(e) => dispatch(putFullName(e.target.value))}
          />
          {(fullName.trim() ?? '') === '' && <p className="text-red-500">{errors.fullName}</p>}
        </div>
        <div>
          <input
            type="text"
            name="idNumber"
            placeholder="ID Number"
            className="border rounded p-2"
            defaultValue={idNumber}
            onChange={(e) => dispatch(putIdNumber(e.target.value))}
          />
          {(idNumber.trim() ?? '') === '' && <p className="text-red-500">{errors.idNumber}</p>}
        </div>
        <div className="mt-6">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={validateStepA}>
            Next
          </button>
        </div>
      </div>
    </Provider>
  );
}

export default OnboardingBasic;
