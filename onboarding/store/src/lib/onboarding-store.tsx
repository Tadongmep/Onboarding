import styles from './onboarding-store.module.css';
import { PayloadAction, configureStore, createSlice } from '@reduxjs/toolkit'

/* eslint-disable-next-line */
export interface OnboardingStoreProps { }

const initialState = {
  fullName: '',
  idNumber: '',
  email: '',
  dateOfBirth: '',
  phone: '',
  sequenceType: 0,
  activeStep: 0,
  purposes: [] as string[]
}

type PutFullNamePayload = string
type PutIdNumberPayload = string
type PutEmailPayload = string
type PutDateOfBirthPayload = string
type PutPhonePayload = string
type PutSequenceTypePayload = number
type PutActiveStepPayload = number
// type AddActiveStepPayload = number
// type MinusActiveStepPayload = number
type PutPurposesPayload = string[]

const onboardingSlice = createSlice({
  name: 'onboarding',
  initialState,
  reducers: {
    putFullName: (state, action: PayloadAction<PutFullNamePayload>) => {
      state.fullName = action.payload
    },
    putIdNumber: (state, action: PayloadAction<PutIdNumberPayload>) => {
      state.idNumber = action.payload
    },
    putEmail: (state, action: PayloadAction<PutEmailPayload>) => {
      state.email = action.payload
    },
    putDateOfBirth: (state, action: PayloadAction<PutDateOfBirthPayload>) => {
      state.dateOfBirth = action.payload
    },
    putPhone: (state, action: PayloadAction<PutPhonePayload>) => {
      state.phone = action.payload
    },
    putSequenceType: (state, action: PayloadAction<PutSequenceTypePayload>) => {
      state.sequenceType = action.payload
    },
    addActiveStep: (state) => {
      state.activeStep += 1
    },
    minusActiveStep: (state) => {
      state.activeStep -= 1
    },
    putActiveStep: (state, action: PayloadAction<PutActiveStepPayload>) => {
      state.activeStep = action.payload
    },
    putPurposes: (state, action: PayloadAction<PutPurposesPayload>) => {
      state.purposes = action.payload
    }
  }
})


export const {
  putFullName,
  putIdNumber,
  putEmail,
  putDateOfBirth,
  putPhone,
  putSequenceType,
  addActiveStep,
  minusActiveStep,
  putActiveStep,
  putPurposes
} = onboardingSlice.actions
export const onboardingReducer = onboardingSlice.reducer

export const selectFullName = (state: RootState) => state.onboarding.fullName
export const selectIdNumber = (state: RootState) => state.onboarding.idNumber
export const selectEmail = (state: RootState) => state.onboarding.email
export const selectDateOfBirth = (state: RootState) => state.onboarding.dateOfBirth
export const selectPhone = (state: RootState) => state.onboarding.phone
export const selectSequenceType = (state: RootState) => state.onboarding.sequenceType
export const selectActiveStep = (state: RootState) => state.onboarding.activeStep
export const selectPurposes = (state: RootState) => state.onboarding.purposes

export const store = configureStore({
  reducer: {
    onboarding: onboardingReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export function OnboardingStore(props: OnboardingStoreProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to OnboardingStore!</h1>
    </div>
  );
}

export default OnboardingStore;
