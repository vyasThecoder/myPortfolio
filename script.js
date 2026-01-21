function renderAboutSkills() {
  const aboutSkillsData = [
    { title: "Frontend Development", description: "Modern & responsive UI" },
    { title: "UI / UX", description: "Clean & user-friendly design" },
    { title: "Performance", description: "Fast and optimized websites" },
  ];

  const aboutSkillsContainer = document.querySelector("#aboutShowSkill");
  aboutSkillsContainer.innerHTML = "";

  aboutSkillsData.forEach((skill) => {
    aboutSkillsContainer.innerHTML += `
      <div class="p-5 bg-slate-900 border border-slate-800 rounded-2xl 
                  hover:border-cyan-400 
                  hover:shadow-[0_0_30px_rgba(34,211,238,0.25)] 
                  transition-all duration-300">
        <h3 class="text-white font-semibold mb-2">${skill.title}</h3>
        <p class="text-gray-300 text-sm">${skill.description}</p>
      </div>
    `;
  });
}

renderAboutSkills();

function renderSkillsSection() {
  const skillsData = [
    {
      title: "Frontend Fundamentals",
      iconClass: "ri-code-s-slash-line",
      skills: [
        "HTML5",
        "CSS3",
        "JavaScript (ES6+)",
        "DOM Manipulation",
        "Browser Rendering",
      ],
    },
    {
      title: "API & Backend Basics",
      iconClass: "ri-cloud-line",
      skills: [
        "REST APIs",
        "Fetch API",
        "JSON",
        "Authentication (JWT / Basics)",
        "Firebase (Auth & Firestore)",
      ],
    },
    {
      title: "Frameworks & Libraries",
      iconClass: "ri-reactjs-line",
      skills: ["React.js", "Next.js (Basics)", "GSAP", "Axios"],
    },
    {
      title: "State Management",
      iconClass: "ri-database-2-line",
      skills: ["Context API", "Redux", "Redux Toolkit"],
    },
    {
      title: "Developer Tools",
      iconClass: "ri-tools-line",
      skills: ["Git", "GitHub", "VS Code", "Chrome DevTools", "NPM / Yarn"],
    },
    {
      title: "Styling & UI",
      iconClass: "ri-paint-brush-line",
      skills: [
        "Tailwind CSS",
        "Bootstrap",
        "Responsive Design",
        "Flexbox",
        "CSS Grid",
        "UI Animations",
      ],
    },
    {
      title: "Performance & Optimization",
      iconClass: "ri-speed-up-line",
      skills: [
        "Lazy Loading",
        "Code Splitting",
        "SEO Basics",
        "Web Performance Optimization",
      ],
    },
    {
      title: "Testing & Build Tools",
      iconClass: "ri-bug-line",
      skills: ["Basic Testing Concepts", "Vite", "Webpack (Basics)"],
    },
  ];

  const skillsContainer = document.querySelector("#skillCardWrapper");
  skillsContainer.innerHTML = "";

  skillsData.forEach((category) => {
    skillsContainer.innerHTML += `
      <div class="skill-card p-6 rounded-2xl border border-slate-700 sticky top-5
        shadow-md hover:shadow-xl bg-gray-950
        hover:border-cyan-400 transition-all duration-500">

        <!-- Heading -->
        <div class="flex items-center gap-3 mb-4">
          <i class="${category.iconClass} text-cyan-400 text-2xl"></i>
          <h3 class="text-slate-100 font-semibold text-lg md:text-sm">
            ${category.title}
          </h3>
        </div>

        <!-- Skills -->
        <ul class="flex flex-wrap gap-2">
          ${category.skills
            .map(
              (skill) => `
                <li class="px-3 py-2 text-xs rounded-full 
                  bg-slate-800/40 text-slate-200 border border-slate-700 
                  hover:border-cyan-400 transition">
                  ${skill}
                </li>
              `,
            )
            .join("")}
        </ul>

      </div>
    `;
  });

  // GSAP Scroll Animation
  document.querySelectorAll(".skill-card").forEach((card) => {
    gsap.to(card, {
      scale: 0.7,
      opacity: 0,
      ease: "power2.out",
      scrollTrigger: {
        trigger: card,
        start: "top 2%",
        end: "top -20%",
        scrub: true,
      },
    });
  });
}

renderSkillsSection();

function renderProjectsSection() {
  const projectsData = [
    {
      image: "assets/cityCare-project.png",
      title: "Hospital Website Clone",
      description:
        "A modern and fully responsive hospital website with smooth animations and an interactive, professional UI.",
      technologies: [
        "HTML",
        "Tailwind CSS",
        "JavaScript",
        "GSAP",
        "ScrollTrigger",
      ],
      liveLink: "https://vyasthecoder.github.io/city-care-clone/",
    },
    {
      image: "assets/recipe-project.png",
      title: "Recipe Website Clone",
      description:
        "A responsive recipe search app that shows ingredients and cooking steps using live API data.",
      technologies: ["HTML", "Tailwind CSS", "JavaScript", "API"],
      liveLink: "https://vyasthecoder.github.io/Recipe-clone/",
    },
    {
      image: "assets/todo-project.png",
      title: "To-Do List Clone",
      description:
        "A clean and animated to-do list app built with GSAP for smooth user interactions.",
      technologies: ["HTML", "Tailwind CSS", "JavaScript", "GSAP"],
      liveLink: "https://vyasthecoder.github.io/toDo-Clone/",
    },
  ];

  const projectsContainer = document.querySelector("#projectCardWrapper");
  projectsContainer.innerHTML = "";

  projectsData.forEach((project, index) => {
    projectsContainer.innerHTML += `
      <div class="project-card w-full flex flex-col md:flex-row gap-5 p-6 rounded-2xl 
        bg-slate-900 border border-slate-700
        hover:border-cyan-400 
        hover:shadow-[0_0_30px_rgba(34,211,238,0.25)] 
        transition-all">

        <!-- Image & Button -->
        <div class="w-full md:w-1/3 shrink-0">
          <img 
            src="${project.image}" 
            alt="${project.title}" 
            class="w-full h-48 md:h-36 object-cover rounded-xl mb-4"
          />

          <a 
            href="${project.liveLink}" 
            target="_blank"
            class="w-full block text-center py-2 px-4 
              bg-cyan-400 text-slate-900 text-sm rounded-lg 
              font-semibold hover:bg-cyan-300 transition">
            Live Demo
          </a>
        </div>

        <!-- Content -->
        <div class="w-full md:w-2/3">
          <h2 class="text-lg md:text-xl text-slate-100 mb-2 font-semibold">
            ${project.title}
          </h2>

          <p class="text-slate-400 text-xs md:text-sm mb-4">
            ${project.description}
          </p>

          <div class="flex flex-wrap gap-2">
            ${project.technologies
              .map(
                (tech) => `
                  <span class="px-3 py-1 text-xs rounded-full 
                    bg-slate-800 text-slate-200 
                    border border-slate-600 
                    hover:border-cyan-400 transition">
                    ${tech}
                  </span>
                `,
              )
              .join("")}
          </div>
        </div>

      </div>
    `;
  });

  gsap.registerPlugin(ScrollTrigger);

  const projectCards = document.querySelectorAll(".project-card");

  projectCards.forEach((card, index) => {
    const slideDirection = index % 2 === 0 ? -120 : 120;

    gsap.fromTo(
      card,
      {
        x: slideDirection,
        opacity: 0,
        scale: 0.9,
        rotateZ: index % 2 === 0 ? -6 : 6,
      },
      {
        x: 0,
        opacity: 1,
        scale: 1,
        rotateZ: 0,
        ease: "power4.out",
        scrollTrigger: {
          trigger: card,
          start: "top 85%",
          end: "top 45%",
          scrub: 1,
        },
      },
    );
  });
}

renderProjectsSection();

function renderContactIcons() {
  const contactIconsData = [
    {
      iconClass: "ri-phone-fill text-emerald-400",
      link: "tel:+919111042605",
      hoverBgClass: "hover:bg-emerald-500",
      label: "Call",
    },
    {
      iconClass: "ri-whatsapp-line text-green-400",
      link: "https://wa.me/9111042605",
      hoverBgClass: "hover:bg-green-500",
      label: "WhatsApp",
    },
    {
      iconClass: "ri-linkedin-fill text-sky-400",
      link: "https://linkedin.com/in/abhishek-vyas-4a8a342b6",
      hoverBgClass: "hover:bg-sky-500",
      label: "LinkedIn",
    },
  ];

  const contactIconsContainer = document.querySelector("#contactIcons");
  contactIconsContainer.innerHTML = "";

  contactIconsData.forEach((icon) => {
    contactIconsContainer.innerHTML += `
      <a href="${icon.link}" target="_blank"
        class="group bg-slate-900 p-6 rounded-xl 
               flex flex-col items-center justify-center 
               transition-all duration-300
               ${icon.hoverBgClass}">
               
        <i class="${icon.iconClass} text-3xl group-hover:text-white"></i>
        <p class="mt-3 text-white text-sm">${icon.label}</p>
      </a>
    `;
  });
}

renderContactIcons();

function initGoToTopButton() {
  const goTopButton = document.getElementById("goTopBtn");

  // Initial state
  gsap.set(goTopButton, {
    autoAlpha: 0,
    scale: 0.8,
  });

  // Show / hide on scroll
  gsap.to(goTopButton, {
    autoAlpha: 1,
    scale: 1,
    duration: 0.3,
    ease: "power2.out",
    scrollTrigger: {
      trigger: "body",
      start: "top -300px",
      end: "bottom bottom",
      toggleActions: "play none none reverse",
      markers: false,
    },
  });

  // Click → scroll to top
  goTopButton.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
}

initGoToTopButton();

function renderHeroIcons() {
  const heroIconsArr = [
    "assets/imgi_5_html5-original.svg",
    "assets/imgi_6_css3-original.svg",
    "assets/imgi_7_javascript-original.svg",
    "assets/imgi_3_tailwindCss-removebg-preview.png",
    "assets/Bootstrap-img.png",
    "assets/imgi_2_react-original.svg",
  ];

  const heroIcon = document.getElementById("hero-icons");
  if (!heroIcon) return;

  // Clear old icons
  heroIcon.innerHTML = "";

  // Add icons to DOM
  heroIconsArr.forEach((icon) => {
    heroIcon.innerHTML += `
      <img
        src="${icon}"
        alt="tech icon"
        loading="lazy"
        class="icons opacity-0 scale-95 w-10 h-10 object-center"
      />
    `;
  });

  // Select all icons
  const icons = document.querySelectorAll(".icons");

  // GSAP timeline
  const timeline = gsap.timeline({
    defaults: {
      duration: 0.5,
      ease: "power2.out",
    },
  });

  // Animate icons one by one
  icons.forEach((icon, index) => {
    timeline.fromTo(
      icon,
      { opacity: 0, y: 20, scale: 0.5 },
      { opacity: 1, y: 0, scale: 1 },
      index * 0.1, // stagger effect
    );
  });
}

renderHeroIcons();
