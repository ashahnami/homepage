export default function Home() {
  return (
    <div className="min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <header>
          <h1>Armin Shahnami</h1>
        </header>

        <section id="projects">
            <h2>Projects</h2>

            <ul>
                <li>
                    <a href="https://github.com/ashahnami/paper-trader">paper-trader</a> - Paper Trading Platform
                </li>

                <li>
                    <a href="https://github.com/ashahnami/typing-game">typing-game</a> - Typing Test Game 
                </li>
            </ul>

            <h3>Misc</h3>

            <ul>
                <li>
                    <a href="https://github.com/ashahnami/dotfiles">dotfiles</a> - Personal Linux configuration files
                </li>
            </ul>

            <p>Other repositories are on <a href="https://github.com/ashahnami">github.com/ashahnami</a>.</p>
        </section>

        <section id="contact">
            <h2>Contact</h2>

            <ul>
                <li>
                    <a href="https://github.com/ashahnami">github.com/ashahnami</a>
                </li>

                <li>
                    <a href="https://www.linkedin.com/in/arminshahnami">linkedin.com/in/arminshahnami</a>
                </li>
            </ul>
        </section>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        Armin Shahnami © 2023
      </footer>
    </div>
  );
}
