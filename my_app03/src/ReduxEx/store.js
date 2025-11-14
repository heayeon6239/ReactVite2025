// store.jsx
// 작성한 counterReducer.js 파일을 스토어에 등록
import {createStore} from 'redux';
import counterReducer from './counterReducer';

export const store = createStore(counterReducer)