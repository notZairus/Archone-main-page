import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const features = [
  {
    title: "Static Analysis",
    body: "Scans source code without execution to detect structural weaknesses before runtime.",
  },
  {
    title: "Educational Feedback",
    body: "Explains why bad practices hurt maintainability and helps students build better coding habits.",
  },
  {
    title: "CLI Integration",
    body: "Runs in a Windows terminal and fits naturally into editor or CI workflows.",
  },
  {
    title: "Code Smell Detection",
    body: "Deep-nested Structures, complex and long functions, and unconventional naming that compilers can miss.",
  },
];

export default function LandingPage() {
  return (
    <div className="dark archone-root">
      <main className="archone-page">
        <section className="archone-hero rough-corner">
          <Badge variant="outline">ArcHone CLI</Badge>
          <h1>
            <strong>ArcHone</strong> - ARChitecture HONEr
          </h1>
          <p>
            ArcHone is a Windows-based CLI code analyzer built for pedagogy. It
            goes beyond syntax checks by highlighting bad practices and code
            smells with actionable static-analysis feedback.
          </p>
          <div className="archone-actions">
            <Button asChild size="lg" className="rounded-none w-44">
              <Link href="/get-started">Get Started</Link>
            </Button>
          </div>
        </section>

        <section className="archone-grid" aria-label="ArcHone feature overview">
          {features.map((feature) => (
            <Card key={feature.title} className="rough-corner archone-card">
              <CardHeader>
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{feature.body}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </section>

        {/* <section className="archone-meta rough-corner">
          <p>
            Placeholder docs sections: Installation, Rule Catalog, Sample
            Reports, and Best-Practice Playbooks.
          </p>
        </section> */}
      </main>
    </div>
  );
}
