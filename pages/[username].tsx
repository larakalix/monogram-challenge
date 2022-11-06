import Router from "next/router";
import { UserSummaryPage } from "@views/UserSummaryPage";

export default function UserProfile() {
    const { username } = Router.query;

    if (!username) return null;

    return <UserSummaryPage username={username} />;
}
