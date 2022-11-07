import { clientRequest } from "../../lib/datocms";

export const UpdateUser = async (id: string, user: any) => {
    const response = await clientRequest().items.update(String(id), {
        name: user.name,
        lastname: user.lastname,
        email: user.email,
        username: user.username,
        isNew: false,
    });

    return response;
};
