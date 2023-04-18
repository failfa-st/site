export function getTheme(
  mode: string | undefined,
  systemMode: string | undefined
) {
  if (mode === "system") {
    return `vs-${systemMode}`;
  }
  if (mode) {
    return `vs-${mode}`;
  }
  return undefined;
}
