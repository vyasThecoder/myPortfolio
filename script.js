const projectArray = [
  {
    name: "Memory Flip Game",
    description:
      "Memory game with flip animations, timer, and score built using Tailwind, JS, and GSAP. Responsive and interactive for all devices.",
    demoLink: "https://vyasthecoder.github.io/Memory-Flip-Game/",
  },
  {
    name: "Quiz App",
    description:
      "A simple Quiz App built with HTML, CSS, and JavaScript. It lets users answer questions and shows the score instantly.",
    demoLink: "https://vyasthecoder.github.io/quizApp/",
  },
  {
    name: "World Clock Visualizer",
    description:
      "An interactive tool to view real-time clocks for multiple cities worldwide. Built with HTML, Tailwind CSS, and JavaScript, featuring a responsive design and dark mode toggle.",
    demoLink: "https://vyasthecoder.github.io/worldClock/",
  },
  {
    name: "Habit Tracker",
    description:
      "A simple and interactive Habit Tracker to help you build good habits and stay consistent daily. Track your progress, set goals, and visualize your streaks easily",
    demoLink: "https://vyasthecoder.github.io/Habit-Tracker/",
  },
];

function projectsList() {
  let projectBox = document.querySelector("#project-grid");
  let cartProject = "";
  projectArray.forEach((val) => {
    cartProject += ` 
      <div
        class="bg-gray-800 p-5 rounded-xl shadow-lg hover:shadow-cyan-500/20 transition-shadow"
      >
        <h3 class="text-xl font-semibold text-cyan-400">${val.name}</h3>
        <p class="text-sm text-gray-300">${val.description}</p>
        <div class="mt-3">
          <a href="${val.demoLink}" target="_blank" rel="noopener noreferrer">
            <button
              class="bg-cyan-900 hover:bg-cyan-700 font-medium text-white px-4 py-2 rounded active:scale-95 transition text-sm"
            >
              Live Demo
            </button>
          </a>
        </div>
      </div>`;
  });

  projectBox.innerHTML = cartProject;
}

projectsList();

// Typewriter
const textEl = document.getElementById("typewriter");
const words = ["Abhishek Vyas"];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function type() {
  const current = words[wordIndex];
  const currentText = current.substring(0, charIndex);
  textEl.textContent = currentText;

  if (!isDeleting && charIndex < current.length) {
    charIndex++;
    setTimeout(type, 150);
  } else if (isDeleting && charIndex > 0) {
    charIndex--;
    setTimeout(type, 80);
  } else {
    isDeleting = !isDeleting;
    setTimeout(type, 1000);
  }
}

type();

// GSAP animations (unchanged)
gsap.registerPlugin(ScrollTrigger);

gsap.from("#hero-text", {
  x: "-100%",
  duration: 1,
  ease: "power2.out",
});

gsap.from("#hero-img", {
  opacity: 0,
  scale: 0.8,
  duration: 1.2,
  ease: "back.out(1.7)",
});

gsap.from("#icon1", { y: 100, duration: 1, delay: 0.5, ease: "power3.out" });
gsap.from("#icon2", { y: 100, duration: 1, delay: 1.0, ease: "power3.out" });
gsap.from("#icon3", { y: 100, duration: 1, delay: 1.5, ease: "power3.out" });

gsap.to("#about-box", {
  scrollTrigger: {
    trigger: "#aboutContent",
    start: "top 60%",
    end: "bottom top",
    toggleActions: "play reverse play reverse",
  },
  opacity: 1,
  x: 0,
  duration: 1.2,
  ease: "power2.out",
});

gsap.from("#project-grid > div", {
  scrollTrigger: {
    trigger: "#project-grid",
    start: "top 90%",
  },
  opacity: 0,
  y: 50,
  duration: 1,
  stagger: 0.2,
  ease: "power2.out",
});

gsap.from("#contact", {
  scrollTrigger: {
    trigger: "#contact",
    start: "top 85%",
    toggleActions: "play reverse play reverse",
  },
  opacity: 0,
  y: 50,
  duration: 1.2,
  ease: "bounce.out",
});
