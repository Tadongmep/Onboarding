import { render } from '@testing-library/react';

import OnboardingPurpose from './onboarding-purpose';

describe('OnboardingPurpose', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<OnboardingPurpose />);
    expect(baseElement).toBeTruthy();
  });
});
