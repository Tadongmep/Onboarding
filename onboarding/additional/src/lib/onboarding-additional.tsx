import { useState } from 'react';
import styles from './onboarding-additional.module.css';
import { useDispatch, useSelector } from 'react-redux'
import { addActiveStep, selectEmail, selectPhone, selectDateOfBirth, putEmail, putPhone, putDateOfBirth, minusActiveStep } from '@bluebikv2/onboarding/store';
import { Provider } from 'react-redux'
import { store } from '@bluebikv2/onboarding/store';


/* eslint-disable-next-line */
export interface OnboardingAdditionalProps { }

interface Errors {
  email: string,
  phoneNumber: string,
  dateOfBirth: string,
}

const errorsCopy: Errors = {
  email: '',
  phoneNumber: '',
  dateOfBirth: '',
};

export function OnboardingAdditional(props: OnboardingAdditionalProps) {
  const dispatch = useDispatch()

  const [errors, setErrors] = useState<Errors>(errorsCopy);

  const validateEmail = (email: string) => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return emailRegex.test(email);
  };
  const validateDateOfBirth = (dateOfBirth: string) => {
    // Assuming `dateOfBirth` is in the format "YYYY-MM-DD"
    const yearOfBirth = parseInt(dateOfBirth.substr(0, 4));
    return yearOfBirth < 2010;
  };

  const validatePhoneNumber = (phoneNumber: string) => {
    // Phone number validation using regular expression
    const phoneRegex = /^\d{10}$/;
    return phoneRegex.test(phoneNumber);
  };
  const email = useSelector(selectEmail)
  const phoneNumber = useSelector(selectPhone)
  const dateOfBirth = useSelector(selectDateOfBirth)
  // , phoneNumber, dateOfBirth } = props.data;

  const validateStepB = () => {
    let isValid = true;
    setErrors({ ...errorsCopy });

    if (email.trim() === '') {
      setErrors(prev => ({ ...prev, email: 'Email is required' }));
      isValid = false;
    } else if (!validateEmail(email)) {
      setErrors(prev => ({ ...prev, email: 'Invalid email format' }));
      isValid = false;
    }

    if (phoneNumber.trim() === '') {
      setErrors(prev => ({ ...prev, phoneNumber: 'Phone Number is required' }));
      isValid = false;
    } else if (!validatePhoneNumber(phoneNumber)) {
      setErrors(prev => ({ ...prev, phoneNumber: 'Invalid phone number format (10 decimal characters)' }));
      isValid = false;
    }

    if (dateOfBirth.trim() === '') {
      setErrors(prev => ({ ...prev, dateOfBirth: 'Date of Birth is required' }));
      isValid = false;
    } else if (!validateDateOfBirth(dateOfBirth)) {
      setErrors(prev => ({ ...prev, dateOfBirth: 'Date of Birth must be earlier than 2010' }));
      isValid = false;
    }

    isValid && dispatch(addActiveStep());
  };
  return (
    <Provider store={store}>
      <div className={styles['container']}>
        <div className="mb-6">
          <h2 className="text-2xl font-bold mb-4">Step B - Additional Information</h2>
          <div className="mb-4">
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              className="border rounded p-2"
              defaultValue={email ?? ''}
              onChange={(e) => dispatch(putEmail(e.target.value))}
            />
            {errors.email && <p className="text-red-500">{errors.email}</p>}
          </div>
          <div className="mb-4">
            <input
              type="tel"
              name="phoneNumber"
              placeholder="Phone Number"
              className="border rounded p-2"
              defaultValue={phoneNumber ?? ''}
              onChange={(e) => dispatch(putPhone(e.target.value))}
            />
            {errors.phoneNumber && <p className="text-red-500">{errors.phoneNumber}</p>}
          </div>
          <div>
            <input
              type="date"
              name="dateOfBirth"
              placeholder="Date of Birth"
              className="border rounded p-2"
              defaultValue={dateOfBirth ?? ''}
              onChange={(e) => dispatch(putDateOfBirth(e.target.value))}
            />
            {errors.dateOfBirth && <p className="text-red-500">{errors.dateOfBirth}</p>}
          </div>
          <div className="mt-6">
            <button className="bg-gray-400 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded  mr-2" onClick={(e) => dispatch(minusActiveStep())}>
              Back
            </button>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={validateStepB}>
              Next
            </button>
          </div>
        </div>
      </div>
    </Provider>
  );
}

export default OnboardingAdditional;
