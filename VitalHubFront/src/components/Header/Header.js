import { ImageTopBar, TopBarContainer, TopBarImageContainer, TopBarTitleContainer } from "../Container/Style";
import { Subtitle, TitleTopBar } from "../Title/Style";
import { TopBar } from "./Style";
import { userDecodeToken } from "../../utils/Auth";
import { useEffect, useState } from "react";
import { api } from "../../service/service";

export const Header = ({ onPress }) => {
    const [user, setUser] = useState([]);
    const [photo, setPhoto] = useState(null);

    async function profileLoad() {
        const token = await userDecodeToken();
        setUser(token);
    }

    async function ListarUsuario() {
        const url = (user.role == 'Medico' ? 'Medicos' : 'Pacientes')
        console.log(url);
        await api.get(`/${url}/BuscarPorId?id=${user.id}`)
            .then(response => {
                setPhoto(response.data.idNavigation.foto);
            }).catch(error => {
                console.log(error);
            })
    }

    useEffect(() => {
        profileLoad();
    }, []);

    useEffect(() => {
        ListarUsuario();
    }, [profileLoad]);

    return (
        <TopBar>
            <TopBarContainer>
                <TopBarTitleContainer onPress={onPress}>
                    <ImageTopBar source={{ uri: photo }} />
                    <TopBarImageContainer>
                        <Subtitle>Bem-vindo !</Subtitle>
                        <TitleTopBar>{user.role === "Medico" ? "Dr(a). " : ""}{user.name}</TitleTopBar>
                    </TopBarImageContainer>
                </TopBarTitleContainer>
            </TopBarContainer>
        </TopBar>
    );
};