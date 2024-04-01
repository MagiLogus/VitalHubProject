import axios from "axios";

export const loginResource = "/Login";
export const userResource = "/Login";
export const doctorResource = "/Medicos";
export const ProfileResource = "/Pacientes/BuscarPorID";

const portApi = "4466";
const ip = "172.16.39.86";
const apiUrlLocal = `http://${ip}:${portApi}/api`;

export const api = axios.create({
    baseURL: apiUrlLocal
})

// // Função para verificar se a API está disponívelr
// const checkApiAvailability = async () => {
//     try {
//         const response = await api.get("/Medicos");
//         console.log(response.status === 200 ? "API está disponível!" : "Erro ao verificar a disponibilidade da API.");
//     } catch (error) {
//         console.error("Erro ao verificar a disponibilidade da API:", error);
//     }
// };

// // Loop para verificar a disponibilidade da API a cada 5 segundos
// setInterval(checkApiAvailability, 5000);
