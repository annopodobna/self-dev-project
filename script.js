function loadTabContent(htmlFilePath) {
  fetch(htmlFilePath)
    .then((response) => response.text())
    .then((text) => (document.getElementById("main").innerHTML = text));
}

document.addEventListener("DOMContentLoaded", () => {
  const mainPageContent = "/main-page.html";
  loadTabContent(mainPageContent);
});

function changeUrl(url) {
  window.history.pushState({}, "", url);
}

function onMenuClick(event) {
  event.preventDefault();
  const href = event.target.href + ".html";
  loadTabContent(href);
  changeUrl(event.target.href);
  // zamiast pushState --> color na włączony button
  // 1 metoda/funkcja na wszystkie przyciski, bez mapy routes
}

/* 
document.addEventListener("DOMContentLoaded", () => {
  const mainSection = document.getElementById("main");

  // this is an object! remember that; object can map a name with a value
  const routes = {
    "/sprawy-budowlane": "/sprawy-budowlane.html",
    "/sprawy-koncepcyjne": "/sprawy-koncepcyjne.html",
    "/sprawy-papierkowe": "/sprawy-papierkowe.html",
    "/sprawy-projektowe": "/sprawy-projektowe.html",
    "/": "/main-page.html",
  };

  // load content based on the path
  // read up about async functions!!!
  async function loadContent(path) {
    const filePath = routes[path];

    if (filePath) {
      try {
        const response = await fetch(filePath);
        const html = await response.text();
        mainSection.innerHTML = html;
      } catch (error) {
        console.error("Failed to load content:", error);
        mainSection.innerHTML = "<h2>Error loading content.</h2>";
      }
    } else {
      mainSection.innerHTML = "<h2>404 - Page Not Found</h2>";
    }
  }

  // Initial load: load content based on the current URL
  loadContent(window.location.pathname);

  // Add event listener for navigation clicks
  document.addEventListener("click", (event) => {
    // Check if the clicked element is a link that should be handled by our router
    if (event.target.tagName === "A" && routes[event.target.pathname]) {
      event.preventDefault(); // Prevent the default link behavior (full page reload)

      const path = event.target.pathname;
      history.pushState({}, "", path); // Update the URL
      loadContent(path); // Load the new content
    }
  });

  // Listen for back/forward button presses in the browser
  window.addEventListener("popstate", () => {
    loadContent(window.location.pathname);
  });
});
*/
