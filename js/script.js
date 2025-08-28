// Emergency services data
const services = [
  { name: "National Emergency Number", subtitle: "National Emergency", number: "999", icon: "emergency.png" },
  { name: "Police Helpline Number", subtitle: "Police", number: "999", icon: "police.png" },
  { name: "Fire Service Number", subtitle: "Fire Service", number: "999", icon: "fire-service.png" },
  { name: "Ambulance Service", subtitle: "Ambulance Service", number: "1994-999999", icon: "ambulance.png" },
  { name: "Anti-Corruption Helpline", subtitle: "Anti-Corruption", number: "106", icon: "emergency.png" },
  { name: "Women & Child Helpliner", subtitle: "Women & Child Helpline", number: "109", icon: "emergency.png" },
  { name: "Electricity Helpline", subtitle: "Electricity Outage", number: "16216", icon: "emergency.png" },
  { name: "Brac Helpline", subtitle: "Brac", number: "16445", icon: "brac.png" },
  { name: "Bangladesh Railway Helpline", subtitle: "Bangladesh Railways", number: "163", icon: "Bangladesh-Railway.png" }
];

let heartCount = 0;
let coinCount = 100;
let copyCount = 0;

// DOM refs
const heartCountEl = document.getElementById("heartCount");
const coinCountEl = document.getElementById("coinCount");
const copyCountEl = document.getElementById("copyCount");
const historyList = document.getElementById("historyList");
const cardContainer = document.getElementById("cardContainer");

// Render service cards
services.forEach(service => {
  const card = document.createElement("div");
  card.className = "bg-white shadow-md rounded-xl p-4 text-start relative hover:shadow-lg transition";

  card.innerHTML = `
    <div class="w-10 h-10 bg-red-100 rounded-xl flex items-center justify-center mb-2">
      <img src="./assets/${service.icon}" class="w-5 h-5" />
    </div>
    <button class="absolute top-2 right-2 text-gray-600 hover:text-red-500 text-xl heart-btn">♡</button>
    <h3 class="font-semibold text-base">${service.name}</h3>
    <p class="text-sm text-gray-500">${service.subtitle}</p>
    <p class="text-2xl font-bold mt-2">${service.number}</p>
    <span class="inline-block mt-2 bg-gray-100 text-gray-400 px-2 py-1 text-xs rounded-full">All</span>
    <div class="grid grid-cols-2 gap-3 mt-4">
  <button class="copy-btn bg-gray-100 px-4 py-2 rounded text-sm text-center" data-number="${service.number}">
    <i class="fa-solid fa-copy text-gray-400"></i> Copy
  </button>
  <button class="call-btn bg-[#00A63E] hover:bg-green-400 text-white px-4 py-2 rounded text-sm text-center"
          data-name="${service.name}" data-subtitle="${service.subtitle}" data-number="${service.number}">
    <i class="fa-solid fa-phone"></i> Call
  </button>
</div>
  `;

  cardContainer.appendChild(card);
});

// Add heart functionality
document.querySelectorAll(".heart-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    heartCount++;
    heartCountEl.textContent = heartCount;
  });
});

// Copy functionality
document.querySelectorAll(".copy-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    const number = btn.dataset.number;
    navigator.clipboard.writeText(number).then(() => {
      alert(`Copied: ${number}`);
      copyCount++;
      copyCountEl.textContent = copyCount;
    });
  });
});

// Call functionality
document.querySelectorAll(".call-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    const name = btn.dataset.name;
    const subtitle = btn.dataset.subtitle;
    const number = btn.dataset.number;

    if (coinCount < 20) {
      alert("Not enough coins to make a call.");
      return;
    }

    alert(`Calling: ${subtitle} (${number})`);
    coinCount -= 20;
    coinCountEl.textContent = coinCount;

        const li = document.createElement("li");
    li.className = " bg-[rgba(250,250,250,1)] p-3 rounded-lg shadow flex justify-between items-center mb-2";

    li.innerHTML = `
      <div>
        <h4 class="font-semibold text-lg text-gray-800">${name}</h4>
        <p class="text-lg text-gray-600">${number}</p>
      </div>
      <span class="text-lg font-semibold">${new Date().toLocaleTimeString()}</span>
    `;

    historyList.prepend(li);
  });
});


// Clear history
function clearHistory() {
  historyList.innerHTML = '';
}