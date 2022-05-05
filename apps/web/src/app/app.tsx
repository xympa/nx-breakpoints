// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { useEffect } from 'react';
import NxWelcome from './nx-welcome';

export function App() {
  useEffect(() => {
    const a = 1;
    const b = 2;
    const c = 4;
    const d = 4;
  }, []);

  return (
    <>
      <NxWelcome title="web" />
      <div />
    </>
  );
}

export default App;
