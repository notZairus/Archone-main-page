import { Link } from "wouter";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  availableCommands,
  languageLabels,
  languageRules,
  ruleDescriptions,
} from "@/data/documentation-data";
import {
  formatRuleName,
  getAllRules,
  getLanguagesForRule,
} from "@/lib/documentation-utils";

const allRules = getAllRules(languageRules);

export default function DocumentationPage() {
  return (
    <div className="dark archone-root">
      <main className="archone-page">
        <section id="documentation" className="archone-hero rough-corner">
          <Badge variant="outline">Documentation</Badge>
          <h1>ArcHone CLI Documentation</h1>
          <p>
            Setup ArcHone, explore available commands, and review supported
            languages and analysis rules from one documentation page.
          </p>
          <div className="archone-actions">
            <Button asChild variant="outline" className="rounded-none w-fit">
              <Link href="/">Back to Landing</Link>
            </Button>
          </div>
        </section>

        <section
          className="archone-docs-layout"
          aria-label="ArcHone get started docs"
        >
          <aside className="archone-docs-sidebar rough-corner">
            <p className="archone-sidebar-title">Navigation</p>
            <nav className="archone-docs-nav" aria-label="Documentation nav">
              <Button asChild className="rounded-none justify-start w-full">
                <a href="#documentation">Documentation</a>
              </Button>
              <div className="archone-doc-subnav">
                <Button
                  asChild
                  variant="outline"
                  className="rounded-none justify-start w-full"
                >
                  <a href="#installation">Installation</a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="rounded-none justify-start w-full"
                >
                  <a href="#commands">Commands</a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="rounded-none justify-start w-full"
                >
                  <a href="#language-rules">Language / Rules</a>
                </Button>
              </div>
            </nav>
          </aside>

          <div className="archone-docs-content">
            <section id="installation" className="archone-docs-section">
              <h2 className="archone-docs-section-title">Installation</h2>

              <Card className="rough-corner archone-card">
                <CardHeader>
                  <CardTitle>0. Prerequisites</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="archone-rule-description">
                    Before installing ArcHone, make sure Node.js and npm are
                    installed on your device.
                  </p>
                  <pre className="archone-code-block">
                    <code>node -v</code>
                  </pre>
                  <pre className="archone-code-block">
                    <code>npm -v</code>
                  </pre>
                  <pre className="archone-code-block">
                    <code>git -v</code>
                  </pre>
                  <p className="archone-rule-description mt-3">
                    If either of the three commands is not found, install
                    Node.js (npm is included with Node.js) and Git.
                  </p>
                  <ul className="archone-prereq-list">
                    <li>
                      node/npm Download:{" "}
                      <a
                        href="https://nodejs.org/en/download"
                        target="_blank"
                        rel="noreferrer"
                        className="archone-doc-link"
                      >
                        nodejs.org/en/download
                      </a>
                    </li>
                    <li>
                      git Download:{" "}
                      <a
                        href="https://git-scm.com/install/windows"
                        target="_blank"
                        rel="noreferrer"
                        className="archone-doc-link"
                      >
                        git-scm.com/install/windows
                      </a>
                    </li>
                    <li>
                      After downloading and installing Node.js and Git, follow
                      this youtube video for a quick walkthrough of setting up
                      your terminal environment:{" "}
                      <a
                        href="https://www.youtube.com/watch?v=00om_IzYufU"
                        target="_blank"
                        rel="noreferrer"
                        className="archone-doc-link"
                      >
                        https://www.youtube.com/watch?v=00om_IzYufU
                      </a>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="rough-corner archone-card">
                <CardHeader>
                  <CardTitle>1. Install ArcHone</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="archone-rule-description">
                    Install ArcHone globally so the <strong>archone</strong>{" "}
                    command is available in any terminal.
                  </p>
                  <pre className="archone-code-block">
                    <code>npm install -g archone</code>
                  </pre>
                </CardContent>
              </Card>

              <Card className="rough-corner archone-card">
                <CardHeader>
                  <CardTitle>2. Verify ArcHone</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="archone-rule-description">
                    Check that the CLI is installed and view available commands.
                  </p>
                  <pre className="archone-code-block">
                    <code>archone help</code>
                  </pre>
                </CardContent>
              </Card>

              <Card className="rough-corner archone-card">
                <CardHeader>
                  <CardTitle>3. Run Your First Analysis</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="archone-rule-description">
                    Analyze a project folder and receive educational feedback
                    about code smells and maintainability issues.
                  </p>
                  <pre className="archone-code-block">
                    <code>archone analyze {"<filename>"}</code>
                  </pre>
                </CardContent>
              </Card>
            </section>

            <section id="commands" className="archone-docs-section">
              <h2 className="archone-docs-section-title">Commands</h2>

              <Card className="rough-corner archone-card">
                <CardHeader>
                  <CardTitle>Available ArcHone Commands</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="archone-command-list">
                    {availableCommands.map((command) => (
                      <li
                        key={command.triggers.join("-")}
                        className="archone-unified-rule-item rough-corner"
                      >
                        <div className="archone-rule-head">
                          <div className="archone-command-trigger-list">
                            {command.triggers.map((trigger) => (
                              <Badge
                                key={trigger}
                                variant="secondary"
                                className="archone-command-badge"
                              >
                                archone {trigger}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        <p className="archone-rule-description">
                          {command.description}
                        </p>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </section>

            <section id="language-rules" className="archone-docs-section">
              <h2 className="archone-docs-section-title">Language and Rules</h2>

              <Card className="rough-corner archone-card">
                <CardHeader>
                  <CardTitle>Available Languages and Rule Matrix</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="archone-language-title">Supported Languages</p>
                  <ul className="archone-language-list archone-language-list-strong">
                    {Object.entries(languageLabels).map(([key, label]) => (
                      <li key={key}>
                        <Badge
                          variant="secondary"
                          className="archone-language-pill"
                        >
                          {label}
                        </Badge>
                      </li>
                    ))}
                  </ul>

                  <p className="archone-rules-title">Supported Rules</p>
                  <ul className="archone-unified-rule-list archone-rules-list-strong">
                    {allRules.map((rule) => (
                      <li
                        key={rule}
                        className="archone-unified-rule-item rough-corner"
                      >
                        <div className="archone-rule-head">
                          <Badge
                            variant="secondary"
                            className="archone-rule-badge"
                          >
                            {formatRuleName(rule)}
                          </Badge>
                          <div className="archone-rule-language-badges">
                            {getLanguagesForRule(rule, languageRules).map(
                              (language) => (
                                <Badge
                                  key={`${rule}-${language}`}
                                  variant="outline"
                                  className="archone-language-badge"
                                >
                                  {languageLabels[language]}
                                </Badge>
                              ),
                            )}
                          </div>
                        </div>
                        <p className="archone-rule-description">
                          {ruleDescriptions[rule]}
                        </p>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </section>
          </div>
        </section>
      </main>
    </div>
  );
}
