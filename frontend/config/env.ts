export const STRAPI_URL = checkEnv(
  process.env.NEXT_PUBLIC_STRAPI_URL,
  "NEXT_PUBLIC_STRAPI_URL"
);

function checkEnv(env: string | null | undefined, envName: string): string {
  if (env == null) {
    throw new Error(`environment variable "${envName}" is not defined`);
  }
  return env;
}
