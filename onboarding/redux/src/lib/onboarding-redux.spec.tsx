import { render } from '@testing-library/react';

import OnboardingRedux from './onboarding-redux';

describe('OnboardingRedux', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<OnboardingRedux />);
    expect(baseElement).toBeTruthy();
  });
});
