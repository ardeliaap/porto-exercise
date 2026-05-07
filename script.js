document.addEventListener("DOMContentLoaded", () => {
    // 1. Scroll Reveal Animation
    const revealElements = document.querySelectorAll(".reveal");

    const revealCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("active");
            }
        });
    };

    const revealOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const revealObserver = new IntersectionObserver(revealCallback, revealOptions);
    const year = new Date().getFullYear();
    document.getElementById("year").textContent = year;

    revealElements.forEach(el => {
        revealObserver.observe(el);
    });

    // 2. Developer Toggle Logic
    const devToggle = document.getElementById("devToggle");
    const htmlElement = document.documentElement;
    const heroDefault = document.getElementById("heroDefault");
    const heroDevMode = document.getElementById("heroDevMode");
    const themeLabel = document.getElementById("themeLabel");

    if (devToggle) {
        devToggle.addEventListener("change", (e) => {
            const isDevMode = e.target.checked;

            // Add a brief glitch effect to the body for a "terminal boot" feel
            document.body.classList.add("animate-glitch");
            setTimeout(() => {
                document.body.classList.remove("animate-glitch");
            }, 300);

            if (isDevMode) {
                // Switch to Dark Mode
                htmlElement.setAttribute("data-theme", "dark");
                themeLabel.textContent = "ON";

                // Tailwind colors: When ON, change text color
                themeLabel.classList.add("text-[var(--accent-secondary)]");

                // Swap hero content
                heroDefault.classList.add("hidden");
                heroDevMode.classList.remove("hidden");

                // Add boot animation to the terminal code block
                heroDevMode.classList.add("animate-boot");
                setTimeout(() => {
                    heroDevMode.classList.remove("animate-boot");
                }, 600);
            } else {
                // Switch to Default Playful Mode
                htmlElement.removeAttribute("data-theme");
                themeLabel.textContent = "OFF";
                themeLabel.classList.remove("text-[var(--accent-secondary)]");

                // Swap hero content back
                heroDevMode.classList.add("hidden");
                heroDefault.classList.remove("hidden");
            }
        });
    }
});
