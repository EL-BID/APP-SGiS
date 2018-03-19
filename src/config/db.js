const SQLite = require('react-native-sqlite-storage');

//SQLite.enablePromise(true);

const databaseName = 'ugus.db';
const databaseFromLocation = '~ugus.db';
const databaseLocation = 'Library';

const databaseVersion = '1.0';
const databaseDisplayName = 'db';
const databaseSize = 200000;

export const db = SQLite.openDatabase({
  name: databaseName,
  createFromLocation: databaseFromLocation,
  location: databaseLocation
}, this.openCB, this.errorCB);
