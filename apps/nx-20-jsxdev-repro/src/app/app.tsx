// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.css';

import NxWelcome from './nx-welcome';

export function App() {
  return (
    <div>
      <NxWelcome title="nx-20-jsxdev-repro" />
      Helloka!
      <span>I am a span!</span>
    </div>
  );
}

export default App;
