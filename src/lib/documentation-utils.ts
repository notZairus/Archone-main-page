import type { LanguageKey } from "@/data/documentation-data";

export function formatRuleName(rule: string) {
  return rule.replaceAll("_", " ");
}

export function getAllRules(languageRules: Record<LanguageKey, string[]>) {
  return Array.from(new Set(Object.values(languageRules).flat()));
}

export function getLanguagesForRule(
  rule: string,
  languageRules: Record<LanguageKey, string[]>,
) {
  return (Object.entries(languageRules) as Array<[LanguageKey, string[]]>)
    .filter(([, rules]) => rules.includes(rule))
    .map(([language]) => language);
}
