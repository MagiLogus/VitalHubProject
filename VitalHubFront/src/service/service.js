import axios from "axios";

export const loginResource = "/Login";
export const profileResource = "/Pacientes/BuscarPorID";
export const doctorResource = "/Medicos";
export const clinicListResource = "/Clinica/ListarTodas";
export const patientResource = "/Clinica/ListarTodas";
export const locationResource = "/Clinica/BuscarPorId";



const portApi = "4466";
const ip = "192.168.21.113";
const apiUrlLocal = `http://${ip}:${portApi}/api`;

export const api = axios.create({
    baseURL: apiUrlLocal
})

