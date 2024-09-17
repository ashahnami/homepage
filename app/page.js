export default function Home() {
  return (
    <div className="max-w-2xl p-8 mx-auto font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 justify-center">
        <header>
          <div className="text-3xl text-center">Armin Shahnami</div>
        </header>

        <section id="projects">
            <div className="text-xl">Projects</div>

            <ul>
                <li>
                    <a href="https://github.com/ashahnami/paper-trader" className="font-medium text-blue-400 hover:underline">paper-trader</a> - Paper Trading Platform
                </li>

                <li>
                    <a href="https://github.com/ashahnami/typing-game" className="font-medium text-blue-400 hover:underline">typing-game</a> - Typing Test Game 
                </li>
            </ul>

            <div className="text-lg mt-2">Misc</div>

            <ul>
                <li>
                    <a href="https://github.com/ashahnami/dotfiles" className="font-medium text-blue-400 hover:underline">dotfiles</a> - Personal Linux configuration files
                </li>
            </ul>

            <p>Other repositories can be found at <a href="https://github.com/ashahnami" className="font-medium text-blue-400 hover:underline">github.com/ashahnami</a>.</p>
        </section>

        <section id="contact">
            <div className="text-xl">Contact</div>

            <ul>
                <li>
                    <a href="https://github.com/ashahnami" className="font-medium text-blue-400 hover:underline">github.com/ashahnami</a>
                </li>

                <li>
                    <a href="https://www.linkedin.com/in/arminshahnami" className="font-medium text-blue-400 hover:underline">linkedin.com/in/arminshahnami</a>
                </li>
            </ul>
        </section>
      </main>

      <footer className="fixed bottom-0 left-0 m-2 w-screen text-center">
        Armin Shahnami © 2024
      </footer>
    </div>
  );
}
