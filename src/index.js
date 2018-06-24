import React from 'react';
import ReactDOM from 'react-dom';
import './Containers/index.css';
import 'tachyons';
import Mainapp from './Containers/Mainapp';
// import App from './Components/App';
// import Apploop from './Components/Apploop';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Mainapp />, document.getElementById('root'));
registerServiceWorker();
