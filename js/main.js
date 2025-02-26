// Simple scroll animations
document.addEventListener("DOMContentLoaded", function () {
  // Animate profile image on load
  const profileImage = document.querySelector(".profile-image");
  setTimeout(() => {
    profileImage.style.opacity = "1";
    profileImage.style.transform = "translateY(0)";
  }, 200);

  // Animate buttons sequentially
  const buttons = document.querySelectorAll(".button");
  buttons.forEach((button, index) => {
    setTimeout(() => {
      button.style.opacity = "1";
      button.style.transform = "translateY(0)";
    }, 300 + index * 100);
  });
});

// Optional: Add a subtle hover effect to profile image
const profileImage = document.querySelector(".profile-image");
if (profileImage) {
  profileImage.addEventListener("mouseenter", function () {
    this.style.transform = "scale(1.05)";
  });

  profileImage.addEventListener("mouseleave", function () {
    this.style.transform = "scale(1)";
  });
}

const linkCards = document.querySelectorAll(".link-card");

linkCards.forEach((card) => {
  card.addEventListener("click", function (e) {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const ripple = document.createElement("span");
    ripple.classList.add("ripple");
    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;

    card.appendChild(ripple);

    setTimeout(() => {
      ripple.remove();
    }, 600);
  });
});
