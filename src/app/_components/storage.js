// import  createNoopStorage  from 'redux-persist/lib/storage/noop';
import createWebStorage from 'redux-persist/lib/storage/createWebStorage';
// import { createNoopStorage } from 'redux-persist/lib/storage/noop';

const createNoopStorage = () => {
  return {
    getItem(_key) {
      return Promise.resolve(null);
    },
    setItem(_key, value) {
      return Promise.resolve(value);
    },
    removeItem(_key) {
      return Promise.resolve();
    },
  };
};

const storage =
  typeof window !== 'undefined'
    ? createWebStorage('local')
    : createNoopStorage();

export default storage;
