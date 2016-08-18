import 'react-toolbox/lib/commons.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import PurpleAppBar from './PurpleAppBar.js';      // AppBar with simple overrides
import SuccessButton from './SuccessButton.js';    // A button with complex overrides
import { Button } from 'react-toolbox/lib/button'; // Bundled component import

const App = () => (
  <div>
    <PurpleAppBar />
    <section style={{ padding: 20 }}>
      <SuccessButton label='Success' primary raised />
      <Button label='Primary Button' primary />
    </section>
  </div>
);

ReactDOM.render(<App />, document.getElementById('app'));
