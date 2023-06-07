import { render } from '@testing-library/react';

import OnboardingBasic from './onboarding-basic';

describe('OnboardingBasic', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<OnboardingBasic />);
    expect(baseElement).toBeTruthy();
  });
});
