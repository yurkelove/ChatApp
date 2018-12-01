import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './components/App';
import { Provider } from 'react-redux'
import Store from './store/store'


ReactDOM.render(
  <Provider store={Store}>
    <App />,
    </Provider>,
    document.getElementById('root') as HTMLElement
);





