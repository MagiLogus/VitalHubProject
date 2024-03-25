import { InputLarge, InputWithTitleContent, TitleWithInput } from "./Style";

export function InputWithTitle({ title, placeholder, }) {
    return (
        <InputWithTitleContent>
            <TitleWithInput>{title}</TitleWithInput>
            <InputLarge placeholder={placeholder} />
        </InputWithTitleContent>
    );
};