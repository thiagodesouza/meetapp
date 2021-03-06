import Reactotron from 'reactotron-react-js';
import { reactotronRedux } from 'reactotron-redux';
import sagaPlugin from 'reactotron-redux-saga';

const reactotron = process.env.NODE_ENV === 'development'
  ? Reactotron.configure()
    .use(reactotronRedux())
    .use(sagaPlugin())
    .connect()
  : null;

if (reactotron) {
  reactotron.clear();

  const { log } = console;
  log.reactotron = reactotron;
}

export default reactotron;
