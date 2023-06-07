import { render } from '@testing-library/react';

import OnboardingStore from './onboarding-store';

describe('OnboardingStore', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<OnboardingStore />);
    expect(baseElement).toBeTruthy();
  });
});
