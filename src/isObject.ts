export default function isObject(params?: unknown): params is object {
  return (
    params != null && typeof params === "object" && !!Object.keys(params).length
  );
}
