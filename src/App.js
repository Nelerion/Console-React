import Console from './console/Console';
import './App.css';
import { useState } from 'react';

function App() {
  let [close, setClose] = useState(false);
  let [open, setOpen] = useState(false)
  return (
    <div className={open?"AppOpen":"App"}>
      {close ? null : <Console setClose={setClose} open={open} setOpen={setOpen} />}
    </div>
  );
}

export default App;
