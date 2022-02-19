import { Provider } from '@self.id/framework'
import Connection from './Connection'
import './App.css';

function App() {
  return (
    <Provider client={{ ceramic: 'testnet-clay' }}>
      <div>
        <main>
          <h1>
            Welcome to Hashchat
          </h1>
          <Connection/>
        </main>
      </div>
    </Provider>
  )
}

export default App;
