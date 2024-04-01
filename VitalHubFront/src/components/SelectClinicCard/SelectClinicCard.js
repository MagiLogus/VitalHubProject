import { AntDesign } from "@expo/vector-icons"
import { ClockCard, ContainerCardsList, ContentSelectClinic, IconContent } from "../Container/Style";
import { Local, NumberStar, ProfileName, TextBold } from "../Title/Style";
import { Star } from "../Icons/Style";

export const SelectClinicCard = ({ title, numberStarYellow, local, date, selected, onPress }) => {
    return (
        <ContainerCardsList selected={selected} onPress={onPress}>
            <ContentSelectClinic>
                <ProfileName>{title}</ProfileName>
                <IconContent>
                    <Star />
                    <NumberStar>{numberStarYellow}</NumberStar>
                </IconContent>
            </ContentSelectClinic>
            <ContentSelectClinic>
                <Local>{local}</Local>
                <ClockCard>
                    <AntDesign
                        name="calendar"
                        size={14}
                        color={"#49B3BA"}
                    />
                    <TextBold color={"#49B3BA"}>
                        {date}
                    </TextBold>
                </ClockCard>
            </ContentSelectClinic>
        </ContainerCardsList>
    )
};