type Bucket = {
  count: number;
  resetAt: number;
};

const buckets = new Map<string, Bucket>();

export function checkRateLimit(key: string, limit = 5, windowMs = 60_000) {
  const now = Date.now();

  // ponytail: local best-effort limit; use the hosting firewall if distributed enforcement matters.
  if (buckets.size >= 10_000) {
    buckets.clear();
  }

  const bucket = buckets.get(key);

  if (!bucket || bucket.resetAt <= now) {
    buckets.set(key, { count: 1, resetAt: now + windowMs });
    return true;
  }

  if (bucket.count >= limit) {
    return false;
  }

  bucket.count += 1;
  return true;
}
