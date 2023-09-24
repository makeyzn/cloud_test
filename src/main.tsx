import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client'
import './normalize.css'
import './index.css'
import App from './App.tsx'
import store from './store.ts'


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={store}>
    <HashRouter>
      <App />
    </HashRouter>
  </Provider>,
)
