import { LOGIN } from "$env/static/private";

export async function handle({ event, resolve }) {
    const url = new URL(event.request.url);

    if (url.pathname.startsWith("/")) {
        const auth = event.request.headers.get("Authorization");

        if (auth !== `Basic ${btoa(LOGIN)}`) {
            return new Response("Not authorized", {
                status: 401,
                headers: {
                    "WWW-Authenticate":
                        'Basic realm="User Visible Realm", charset="UTF-8"',
                },
            });
        }
    }

    return resolve(event);
};