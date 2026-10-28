
import "./App.css";

const features = [
  {
    number: "01",
    title: "Build your narrative",
    description:
      "Arrange dialogue, narration and scene changes into your own story.",
    symbol: "✦",
  },
  {
    number: "02",
    title: "Set the atmosphere",
    description:
      "Combine character portraits, backgrounds and sound effects.",
    symbol: "◈",
  },
  {
    number: "03",
    title: "Share your archive",
    description:
      "Save your replay and share a reading link with your fellow players.",
    symbol: "↗",
  },
];

const workflow = [
  ["01", "Create a case", "Start a new replay project."],
  ["02", "Arrange the evidence", "Build scenes with dialogue blocks."],
  ["03", "Publish your story", "Share your finished replay online."],
];

function App() {
  return (
    <div className="app-shell">
      <header className="site-header">
        <a className="brand" href="#home" aria-label="ReplayForge home">
          <span className="brand-mark">R</span>
          <span className="brand-name">
            REPLAY<span>FORGE</span>
            <small>THE TRPG ARCHIVE</small>
          </span>
        </a>

        <nav className="main-nav" aria-label="Main navigation">
          <a href="#features">Features</a>
          <a href="#how-it-works">How it works</a>
          <a href="#preview">Replay preview</a>
        </nav>

        <a className="header-link" href="#how-it-works">
          ENTER THE ARCHIVE <span>↗</span>
        </a>
      </header>

      <main>
        <section className="hero section-container" id="home">
          <div className="hero-copy">
            <div className="eyebrow">
              <span className="status-dot" />
              YOUR STORIES DESERVE AN ARCHIVE
            </div>

            <h1>
              Every session
              <br />
              leaves a <em>story.</em>
            </h1>

            <p className="hero-description">
              Turn your TRPG session logs into atmospheric visual replays.
              Arrange dialogue, characters and scenes, then share your story
              with the people who were there.
            </p>

            <div className="hero-actions">
              <a className="button button-primary" href="#how-it-works">
                Discover the process <span>↗</span>
              </a>
              <a className="button button-secondary" href="#preview">
                View a sample replay
              </a>
            </div>

            <div className="hero-note">
              <span>✳</span>
              MADE FOR KEEPING STORIES ALIVE
            </div>
          </div>

          <div className="hero-visual" id="preview">
            <div className="file-label">
              <span>ARCHIVE FILE / 001</span>
              <span>CLASSIFIED</span>
            </div>

            <div className="scene-preview">
              <div className="scene-sky" />
              <div className="scene-moon" />
              <div className="scene-mist mist-one" />
              <div className="scene-mist mist-two" />
              <div className="scene-hill hill-back" />
              <div className="scene-hill hill-front" />

              <div className="scene-caption">
                <span>SCENE 01</span>
                <span>THE WOODS AFTER MIDNIGHT</span>
              </div>
            </div>

            <div className="replay-dialogue">
              <div className="dialogue-heading">
                <span className="dialogue-symbol">✦</span>
                <span>THE INVESTIGATOR</span>
                <span className="dialogue-line" />
              </div>

              <p>
                "There is something in these woods.
                <br />
                I can hear it breathing."
              </p>

              <div className="dialogue-footer">
                <span>REPLAY TRANSCRIPT</span>
                <span>01 / 08</span>
              </div>
            </div>

            <div className="floating-stamp">
              <span>CASE</span>
              <strong>017</strong>
              <span>ARCHIVED</span>
            </div>

            <div className="visual-caption">
              <span>FIG. 001 — REPLAY RECONSTRUCTION</span>
              <span>EST. 1926</span>
            </div>
          </div>
        </section>

        <div className="archive-divider">
          <span />
          <p>EVERY ROLL OF THE DICE LEAVES A TRACE</p>
          <span />
        </div>

        <section className="features section-container" id="features">
          <div className="section-heading">
            <div>
              <p className="eyebrow">TOOLS FOR STORYTELLERS</p>
              <h2>Make the story <em>yours.</em></h2>
            </div>
            <p className="section-intro">
              A little less paperwork.
              <br />
              A little more storytelling.
            </p>
          </div>

          <div className="feature-grid">
            {features.map((feature) => (
              <article className="feature-card" key={feature.number}>
                <div className="feature-card-top">
                  <span>{feature.number} / 03</span>
                  <span className="feature-symbol">{feature.symbol}</span>
                </div>

                <h3>{feature.title}</h3>
                <p>{feature.description}</p>

                <span className="feature-rule" />
              </article>
            ))}
          </div>
        </section>

        <section
          className="workflow section-container"
          id="how-it-works"
        >
          <div className="workflow-heading">
            <p className="eyebrow">FROM SESSION TO STORY</p>
            <h2>Your next chapter <em>starts here.</em></h2>
            <p>
              Three simple steps to turn your session records into a replay
              worth revisiting.
            </p>
          </div>

          <div className="workflow-list">
            {workflow.map(([number, title, description]) => (
              <article className="workflow-item" key={number}>
                <span className="workflow-number">{number}</span>
                <div>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </div>
                <span className="workflow-arrow">↗</span>
              </article>
            ))}
          </div>
        </section>

        <section className="closing section-container">
          <span className="closing-ornament">✳</span>
          <p className="eyebrow">THE ARCHIVE AWAITS</p>
          <h2>
            Some stories deserve
            <br />
            more than a chat log.
          </h2>
          <a className="button button-primary" href="#home">
            Return to the beginning <span>↑</span>
          </a>
        </section>
      </main>

      <footer className="site-footer">
        <a className="footer-brand" href="#home">
          REPLAYFORGE
        </a>
        <p>A PERSONAL ARCHIVE FOR IMAGINED WORLDS.</p>
        <span>BUILT FOR THE STORIES WE KEEP.</span>
      </footer>
    </div>
  );
}

export default App;
