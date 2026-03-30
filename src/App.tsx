import { Link, Route, Switch } from "wouter";
import DocumentationPage from "./documentation-page";
import LandingPage from "./landing-page";

function App() {
  return (
    <Switch>
      <Route path="/" component={LandingPage} />
      <Route path="/get-started" component={DocumentationPage} />
      <Route path="/rules" component={DocumentationPage} />
      <Route>
        <div className="dark archone-root">
          <main className="archone-page">
            <section className="archone-hero rough-corner">
              <h1>Page not found</h1>
              <p>The route you opened does not exist in this docs prototype.</p>
              <Link href="/" className="underline underline-offset-4">
                Return to landing page
              </Link>
            </section>
          </main>
        </div>
      </Route>
    </Switch>
  );
}

export default App;
