 import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-analytics.js";
    function login() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  firebase.auth().signInWithEmailAndPassword(email, password)
    .then(userCredential => {
      document.getElementById("auth-message").innerText = "Login successful!";
      window.location.href = "dashboard.html"; // Go to dashboard
    })
    .catch(error => {
      document.getElementById("auth-message").innerText = error.message;
    });
}

function signup() {
  const email = document.getElementById("signupEmail").value;
  const password = document.getElementById("signupPassword").value;

  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(userCredential => {
      document.getElementById("auth-message").innerText = "Signup successful! Please login.";
    })
    .catch(error => {
      document.getElementById("auth-message").innerText = error.message;
    });
}

function showSignup() {
  document.getElementById("signup").style.display = "block";
}
// Show/hide password toggles
document.getElementById("showPasswordLogin").addEventListener("change", function () {
  const pwd = document.getElementById("password");
  pwd.type = this.checked ? "text" : "password";
});

document.getElementById("showPasswordSignup").addEventListener("change", function () {
  const pwd = document.getElementById("signupPassword");
  pwd.type = this.checked ? "text" : "password";
});
gsap.from('.frontend-projects .section-title', {
  x: -100,
  opacity: 0,
  duration: 1,
  delay: 4.8,
  scrollTrigger: {
    trigger: '.frontend-projects',
    start: 'top 90%',
  }
});

gsap.from('.frontend-title', {
  x: 100,
  opacity: 0,
  duration: 1,
  delay: 5.2,
  stagger: 0.3,
  scrollTrigger: {
    trigger: '.frontend-title',
    start: 'top 90%',
  }
});

gsap.from('.frontend-description li', {
  y: 40,
  opacity: 0,
  duration: 1,
  delay: 5.6,
  stagger: 0.2,
  scrollTrigger: {
    trigger: '.frontend-description',
    start: 'top 90%',
  }
});
gsap.from('.course-card', {
  y: 50,
  opacity: 0,
  duration: 1,
  stagger: 0.2,
  scrollTrigger: {
    trigger: '.course-list',
    start: 'top 90%',
  }
});
gsap.from('.lesson-content h2', {
  x: -100,
  opacity: 0,
  duration: 1,
  stagger: 0.3,
  scrollTrigger: {
    trigger: '.lesson-content',
    start: 'top 80%',
  }
});


