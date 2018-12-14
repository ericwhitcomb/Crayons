module.exports = {
  development: {
    client: 'sqlite3',
    connection: {
      filename: './crayons.sqlite3'
    },
    useNullAsDefault: true
  },
};