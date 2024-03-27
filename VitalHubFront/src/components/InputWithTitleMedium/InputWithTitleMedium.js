import { Container, InputWithTitleContent, InputMedium, TitleWithInput } from "./Style";

export function InputWithTitleMedium({ title, placeholder, }) {
    return (
            <InputWithTitleContent>
                <TitleWithInput>{title}</TitleWithInput>
                <InputMedium placeholder={placeholder} />
            </InputWithTitleContent>
    );
};