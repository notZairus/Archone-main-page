export type LanguageKey = "js" | "py" | "cs";

export type CommandEntry = {
  triggers: string[];
  description: string;
};

export const languageRules: Record<LanguageKey, string[]> = {
  js: [
    "commented_out_code",
    "deep_nesting",
    "function_too_long",
    "high_complexity",
    "name_reuse",
    "naming_convention",
    "poor_variable_naming",
    "todo_comment",
    "too_many_parameters",
    "unused_function",
    "unused_variable",
    "use_of_var",
  ],
  py: [
    "commented_out_code",
    "deep_nesting",
    "function_too_long",
    "high_complexity",
    "name_reuse",
    "naming_convention",
    "poor_variable_naming",
    "todo_comment",
    "too_many_parameters",
    "unused_function",
    "unused_variable",
  ],
  cs: [
    "commented_out_code",
    "deep_nesting",
    "function_too_long",
    "high_complexity",
    "name_reuse",
    "naming_convention",
    "poor_variable_naming",
    "todo_comment",
    "too_many_parameters",
    "unused_function",
    "unused_variable",
  ],
};

export const ruleDescriptions: Record<string, string> = {
  commented_out_code:
    "Finds blocks of disabled code that should be removed or tracked in version control.",
  deep_nesting:
    "Flags overly nested logic that is hard to read, test, and maintain.",
  function_too_long:
    "Detects long functions that usually do too many things and need decomposition.",
  high_complexity:
    "Warns when branching and decision paths make a function difficult to reason about.",
  name_reuse:
    "Reports reused identifiers that can confuse intent across scopes.",
  naming_convention:
    "Checks whether identifiers follow expected naming style for consistency.",
  poor_variable_naming:
    "Highlights vague variable names that hide meaning and context.",
  todo_comment:
    "Surfaces TODO/FIXME markers so unfinished work is reviewed intentionally.",
  too_many_parameters:
    "Flags functions with excessive parameters that suggest weak abstraction.",
  unused_function:
    "Detects declared functions that are never called and may be dead code.",
  unused_variable: "Detects variables that are assigned but never used.",
  use_of_var:
    "For JavaScript, warns when var is used instead of block-scoped let or const.",
};

export const languageLabels: Record<LanguageKey, string> = {
  cs: "C#",
  js: "JavaScript",
  py: "Python",
};

export const availableCommands: CommandEntry[] = [
  {
    triggers: ["init"],
    description:
      "Set up ArcHone in the current project by creating the required local configuration and startup files.",
  },
  {
    triggers: ["login"],
    description:
      "Authenticate with your ArcHone account so this CLI can access your saved profile and cloud features.",
  },
  {
    triggers: ["register"],
    description:
      "Create a new ArcHone account and connect it to this CLI so you can start analyzing files right away.",
  },
  {
    triggers: ["about"],
    description:
      "Show an overview of ArcHone, including what the tool does and how it helps with code analysis.",
  },
  {
    triggers: ["stats"],
    description:
      "Display your personal analysis metrics, such as scan activity and usage patterns from previous runs.",
  },
  {
    triggers: ["help"],
    description:
      "Open Archie assistant mode to see command explanations, practical hints, and quick-start guidance.",
  },
  {
    triggers: ["version"],
    description:
      "Show the currently installed ArcHone CLI version so you can confirm updates and compatibility.",
  },
  {
    triggers: ["analyze"],
    description:
      "Run ArcHone analysis on a specific source file and return insights about code quality, structure, and issues.",
  },
  {
    triggers: ["explain"],
    description:
      "Get a detailed explanation of a specific good-practice issue from the latest analysis, including why it matters and how to fix it.",
  },
];
