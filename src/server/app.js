const WebSocket = require('ws')

const wss = new WebSocket.Server({ port: 8989 })

const users = []

const broadcast = (data, ws) => {
  wss.clients.forEach((client) => {
    if (client.readyState === WebSocket.OPEN && client !== ws) {
      client.send(JSON.stringify(data))
    }
  })
}

wss.on('connection', (ws) => {
  let index
  ws.on('message', (message) => {
    const data = JSON.parse(message)
    switch (data.type) { // listen for add_user/add_message on connection
      case 'ADD_USER': { // if add_user send add_user event with user name 
        index = users.length
        users.push({ name: data.name, id: index + 1 }) // add to server-side list of users 
        ws.send(JSON.stringify({
          type: 'USERS_LIST',
          users
        })) 
        broadcast({ //send new list of users to everyone connected 
          type: 'USERS_LIST',
          users
        }, ws)
        break
      }
      case 'ADD_MESSAGE':
        broadcast({
          type: 'ADD_MESSAGE',
          message: data.message,
          author: data.author
        }, ws)
        break
      default:
        break
    }
  })

  ws.on('close', () => { // when leave room/signout remove from user list
    users.splice(index, 1)
    broadcast({
      type: 'USERS_LIST',
      users
    }, ws)
  })
})