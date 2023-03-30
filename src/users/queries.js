export const getUsers = 'SELECT * FROM users'
export const CreateUsers = "INSERT INTO users ( accounts, txhash, amount, numbers, email ) VALUES ($1, $2, $3, $4, $5)"