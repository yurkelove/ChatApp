import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/App';
import Store from './store/store';


ReactDOM.render(
  <Provider store={Store}>
    <div>
        <App />,
    </div>
    </Provider>,
    document.getElementById('root') as HTMLElement
);





