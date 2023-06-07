import { render } from '@testing-library/react';

import OnboardingAdditional from './onboarding-additional';

describe('OnboardingAdditional', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<OnboardingAdditional />);
    expect(baseElement).toBeTruthy();
  });
});
