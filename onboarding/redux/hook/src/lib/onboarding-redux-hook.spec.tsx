import { render } from '@testing-library/react';

import OnboardingReduxHook from './onboarding-redux-hook';

describe('OnboardingReduxHook', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<OnboardingReduxHook />);
    expect(baseElement).toBeTruthy();
  });
});
