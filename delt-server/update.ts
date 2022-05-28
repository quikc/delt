import {Server, WebSocket} from 'ws';
import Config from './config';
import {Client, MessageTypes} from './messageTypes';

const interval = 1000 / Config.tick;

const getClients = (clientList: Client[]) =>
  clientList.map((x) => ({id: x.id, data: x.data}));

const updateMessage = (clientList: Client[]) => ({
  type: MessageTypes.UPDATE_OBJECT,
  objects: getClients(clientList),
});

const update = (clientList: Client[], wss: Server<WebSocket>) => {
  setInterval(()=> {
    const update = updateMessage(clientList);
    const json = JSON.stringify(update);
    wss.clients.forEach((client) => client.send(json));
  }, interval);
};

export default update;