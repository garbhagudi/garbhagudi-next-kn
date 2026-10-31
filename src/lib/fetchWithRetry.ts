const RETRY_STATUSES = new Set([429, 502, 503, 504]);
const MAX_ATTEMPTS = 5;
const BASE_DELAY_MS = 1000;
const MAX_DELAY_MS = 10000;

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const retryDelay = (response: Response, attempt: number) => {
  const retryAfter = Number(response.headers.get("retry-after"));
  if (retryAfter > 0) return Math.min(retryAfter * 1000, MAX_DELAY_MS);
  // 1s, 2s, 4s, 8s plus jitter so parallel build workers don't retry in lockstep.
  return BASE_DELAY_MS * 2 ** (attempt - 1) + Math.random() * 500;
};

const fetchWithRetry = async (
  input: RequestInfo | URL,
  init?: RequestInit,
): Promise<Response> => {
  for (let attempt = 1; ; attempt++) {
    const response = await fetch(input, init);
    if (!RETRY_STATUSES.has(response.status) || attempt === MAX_ATTEMPTS) {
      return response;
    }
    await sleep(retryDelay(response, attempt));
  }
};

export default fetchWithRetry;
