import fetch from "node-fetch";

import {createClient} from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

export const supabase = createClient(`${supabaseUrl}`, `${supabaseKey}`);

export function createFetcher(token: string): (url: string) => Promise<any> {
    return (url: string,) => {
        const options = {
            method: 'GET',
            headers: {
                'Authorization': `${token}`,
                'Content-Type': 'application/x-www-form-urlencoded'
            },
        }
        return fetch(url, options).then(res => res.json())
    }
}

export function getToken(): string {
    return `${process.env.AUTH_TOKEN}`
}

export async function loadToken() {
    const res = await fetch(`api/getToken`);
    if (!res.ok) {
        throw new Error('Failed to fetch data');
    }

    return res.json();
}