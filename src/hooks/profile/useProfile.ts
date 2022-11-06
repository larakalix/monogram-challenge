import { API_CONSTANTS } from "@constants/api";
import { GenericUserProps, UserProps } from "types/data/user";

export const useProfile = (user: UserProps) => {
    const submit = (values: Omit<GenericUserProps, "id">) => {
        return fetch(`${API_CONSTANTS.updateUser}/${user.id}`, {
            method: "POST",
            body: JSON.stringify({
                user: {
                    id: user.id,
                    ...values,
                },
            }),
        });
    };

    return { submit };
};
