import { ImageTopBar, TopBarContainer, TopBarImageContainer, TopBarTitleContainer } from "../Container/Style";
import { AlertIcon } from "../Icons/Style";
import { Subtitle, TitleTopBar } from "../Title/Style";
import { TopBar } from "./Style";
import { userDecodeToken } from "../../utils/Auth";
import { useEffect, useState } from "react";

export const Header = ({ imageSource, profile, onPress }) => {

    const [user, setUser] = useState([])

    async function profileLoad() {
        const token = await userDecodeToken();
        setUser(token);
        console.log(token);
    }

    useEffect(() => {
        profileLoad();
    }, []);

    return (
        <TopBar>
            <TopBarContainer>
                <TopBarTitleContainer onPress={onPress}>
                    <ImageTopBar src={imageSource} />
                    <TopBarImageContainer>
                        <Subtitle>Bem-vindo !</Subtitle>
                        <TitleTopBar>{profile === "Médico" ? "Dr(a). " : ""}{user.name}</TitleTopBar>
                    </TopBarImageContainer>
                </TopBarTitleContainer>
                <AlertIcon />
            </TopBarContainer>
        </TopBar>
    );
};