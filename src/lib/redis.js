import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";


// THIRD PARTY RATE LIMITER
// NEED INTERNET
const redis = new Redis({
    url: process.env.UPSTASH_REDIS_REST_URL,
    token: process.env.UPSTASH_REDIS_REST_TOKEN
})

export const ratelimit = new Ratelimit({
    redis,
    limiter: Ratelimit.slidingWindow(10, "1 m"),
    analytics: true
})