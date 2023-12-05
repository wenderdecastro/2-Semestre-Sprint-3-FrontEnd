import axios from "axios";

// Event Resource Route
export const eventsResource = '/Evento';

export const loginResource = '/Login';

// Next Events Route
export const nextEventResource = '/Evento/ListarProximos';

// Type Events Route
export const eventsTypeResource = '/TiposEvento'

const apiPort = '7118';
const localApiUri = `https://localhost:${apiPort}/api`;
const externalApiUri  = null;

const api = axios.create({
    baseURL: localApiUri
});

export default api;