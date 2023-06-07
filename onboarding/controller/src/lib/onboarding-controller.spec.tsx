import { render } from '@testing-library/react';

import OnboardingController from './onboarding-controller';

describe('OnboardingController', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<OnboardingController />);
    expect(baseElement).toBeTruthy();
  });
});
