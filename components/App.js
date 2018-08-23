import React from 'react';
import SimpleGoldenAcornApp from '../src/simple/states';
import App from '../src/simple/redux';


ReactDOM.render(
    <BrowserRouter>
      <Provider store={store}>
        <App>
          <Route exact path='/' component={home} />
          <Route path='/simple/states' component={state} />
          <Route path='/simple/redux' component={redux} />
        </App>
      </Provider>
    </BrowserRouter>,
    document.getElementById('root'),
);
