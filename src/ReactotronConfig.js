// https://github.com/infinitered/reactotron/blob/master/docs/plugin-redux.md

import Reactotron from 'reactotron-react-native';
import { reactotronRedux } from 'reactotron-redux';

Reactotron
  .configure({name: 'React Native + Web Starter'})
  .useReactNative({
    errors: false,
  })
  .use(reactotronRedux())
  .connect();