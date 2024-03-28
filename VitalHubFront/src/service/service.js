import axios from "axios";

export const loginResource = "/Login";
export const profileResource = "/Usuario/BuscarUsuarioPorId";
export const doctorResource = "/Medicos";

const portApi = "4466";
const ip = "172.16.39.122";
const apiUrlLocal = `http://${ip}:${portApi}/api`;

export const api = axios.create({
    baseURL: apiUrlLocal
})

