// Récupérer l'état du mode sombre depuis le stockage synchronisé
chrome.storage.sync.get("darkMode", function (items) {
  if (items["darkMode"]) {
    document.body.classList.add("dark-mode");
  }
});

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.message === "toggle_dark_mode") {
    document.body.classList.toggle("dark-mode");

    // Mettez à jour l'état du mode sombre dans le stockage synchronisé
    var darkModeState = document.body.classList.contains("dark-mode");
    chrome.storage.sync.set({ "darkMode": darkModeState });

    // Mettez à jour le texte du bouton dans la popup après le basculement
    sendResponse({ darkMode: darkModeState });
  }
});
