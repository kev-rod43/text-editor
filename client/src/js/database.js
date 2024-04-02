import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

export const putDb = async (content) => {
  const textDb = await openDB("jate", 1);
const tx = textDb.transaction('jate', 'readwrite');
const store = tx.objectStore('jate');
const request = store.put({id: 1, val: content });
const result = await request;
};

export const getDb = async () => {
  const textDb = await openDB("jate", 1);
  const tx = textDb.transaction('jate', 'readonly');
  const store = tx.objectStore('jate');
  const request = store.get(1);
  const result = await request;
  return result.val;
};

initdb();
