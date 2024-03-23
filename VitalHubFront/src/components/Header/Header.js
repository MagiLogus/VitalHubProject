import { ImageTopBar, TopBarContainer, TopBarImageContainer, TopBarTitleContainer } from "../Container/Style";
import { AlertIcon } from "../Icons/Style";
import { Subtitle, TitleTopBar } from "../Title/Style";
import { TopBar } from "./Style";

export const Header = ({ name, imageSource, profile, onPress }) => {
    return (
        <TopBar>
            <TopBarContainer>
                <TopBarTitleContainer onPress={onPress}>
                    <ImageTopBar src={imageSource} />
                    <TopBarImageContainer>
                        <Subtitle>Bem-vindo !</Subtitle>
                        <TitleTopBar>{profile === "Médico" ? "Dr(a). " : ""}{name}</TitleTopBar>
                    </TopBarImageContainer>
                </TopBarTitleContainer>
                <AlertIcon />
            </TopBarContainer>
        </TopBar>
    );
};