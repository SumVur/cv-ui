import fetch from "node-fetch";
import {createClient} from "@supabase/supabase-js";
import {ApolloClient, ApolloClientOptions, InMemoryCache, NormalizedCacheObject} from "@apollo/client";

const config:ApolloClientOptions<NormalizedCacheObject> = {
    uri:process.env.NEXT_PUBLIC_BACKEND_ENDPOINT,
    cache:new InMemoryCache(),
    headers: {
        "Authorization":`${process.env.NEXT_PUBLIC_AUTH_TOKEN}`
    }
}
const client = new ApolloClient(config);

export default client;

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

export const supabase = createClient(`${supabaseUrl}`, `${supabaseKey}`);

export function createFetcher(): (url: string) => Promise<any> {
    return (url: string,) => {
        const options = {
            method: 'GET',
            headers: {
                'Authorization': `${process.env.NEXT_PUBLIC_AUTH_TOKEN}`,
                'Content-Type': 'application/x-www-form-urlencoded'
            },
        }
        return fetch(url, options).then(res => res.json())
    }
}