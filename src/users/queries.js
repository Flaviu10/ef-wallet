export const getUsers = 'SELECT * FROM users'
export const CreateUsers = "INSERT INTO users ( id, address, txhash, amount, numbers ) VALUES ($1, $2, $3, $4, $5)"