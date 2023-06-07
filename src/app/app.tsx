// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.css';
import { Onboarding } from '@bluebikv2/onboarding';
import { Provider } from 'react-redux'
import { store } from '@bluebikv2/onboarding/store';

import NxWelcome from './nx-welcome';

export function App() {
  return (
    <Provider store={store}>
      <div>
        {/* <NxWelcome title="bluebikv2" /> */}
        <Onboarding />
      </div>
    </Provider>
  );
}

export default App;
