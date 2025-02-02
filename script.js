// Fireworks Canvas Setup
const fireworksCanvas = document.getElementById("fireworks");
const ctx = fireworksCanvas.getContext("2d");

fireworksCanvas.width = window.innerWidth;
fireworksCanvas.height = window.innerHeight;

const particles = [];

function createParticle(x, y) {
  const particleCount = 1000; // Increased the number of particles to 100
  for (let i = 0; i < particleCount; i++) {
    particles.push({
      x: x,
      y: y,
      speed: Math.random() * 5 + 2,
      angle: Math.random() * 2 * Math.PI,
      radius: Math.random() * 2 + 1,
      color: `hsl(${Math.random() * 360}, 100%, 50%)`,
      life: Math.random() * 100 + 50,
    });
  }
}

function animateParticles() {
  ctx.clearRect(0, 0, fireworksCanvas.width, fireworksCanvas.height);
  for (let i = particles.length - 1; i >= 0; i--) {
    const particle = particles[i];
    particle.life--;
    if (particle.life <= 0) {
      particles.splice(i, 1);
      continue;
    }

    const vx = Math.cos(particle.angle) * particle.speed;
    const vy = Math.sin(particle.angle) * particle.speed;
    particle.x += vx;
    particle.y += vy;

    ctx.beginPath();
    ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
    ctx.fillStyle = particle.color;
    ctx.fill();
  }
  if (particles.length > 0) {
    requestAnimationFrame(animateParticles);
  }
}

function showFireworks() {
  createParticle(window.innerWidth / 2, window.innerHeight / 2);
  animateParticles();
}

// Vanta Birds Effect
VANTA.BIRDS({
  el: "body",
  mouseControls: true,
  touchControls: true,
  gyroControls: false,
  minHeight: 200.0,
  minWidth: 200.0,
  scale: 1.0,
  scaleMobile: 1.0,
});

// Handle Login
function handleLogin() {
  const formContainer = document.getElementById("form-container");
  const errorMessage = document.getElementById("error-message");
  errorMessage.style.display = "none";
  formContainer.classList.add("tornado");

  setTimeout(() => {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Send login request to PHP server
    fetch('login.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: `username=${encodeURIComponent(username)}&password=${encodeURIComponent(password)}`
    })
    .then(response => response.json())
    .then(data => {
      if (data.status === 'success') {
        // Login successful
        formContainer.classList.add("hidden");
        showFireworks();

        // Redirect to index.php after 5 seconds
        if (data.redirect) {
          setTimeout(() => {
            window.location.href = 'index.php';
          }, 1000); // 5 seconds delay
        }
      } else {
        // Login failed
        errorMessage.style.display = "block";
        showFireworks();
        formContainer.classList.remove("tornado");
      }
    })
    .catch(error => {
      console.error('Error:', error);
      errorMessage.style.display = "block";
      showFireworks();
      formContainer.classList.remove("tornado");
    });
  }, 1000);
}

// Show Sign Up Form
function showSignUp() {
  const loginForm = document.getElementById("login-form");
  const signUpForm = document.getElementById("signup-form");
  const formTitle = document.getElementById("form-title");

  loginForm.classList.add("rotate-left-right");

  setTimeout(() => {
    loginForm.style.display = "none";
    signUpForm.style.display = "block";
    formTitle.textContent = "Sign Up";
    loginForm.classList.remove("rotate-left-right");
  }, 1000);
}

// Show Login Form
function showLogin() {
  const loginForm = document.getElementById("login-form");
  const signUpForm = document.getElementById("signup-form");
  const formTitle = document.getElementById("form-title");

  signUpForm.classList.add("rotate-left-right");

  setTimeout(() => {
    signUpForm.style.display = "none";
    loginForm.style.display = "block";
    formTitle.textContent = "Login";
    signUpForm.classList.remove("rotate-left-right");
  }, 1000);
}

// Handle Sign Up
function handleSignUp() {
  alert("Signed Up Successfully!");
}
