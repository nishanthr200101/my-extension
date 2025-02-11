// popup.js
document.addEventListener('DOMContentLoaded', () => {
  console.log("DOM fully loaded and parsed");

  document.getElementById('fullPageBtn').addEventListener('click', () => {
    console.log("Full Page button clicked");
    chrome.runtime.sendMessage({ action: "takeScreenshot" }, (response) => {
      if (response.image) {
        // Open a new tab with the screenshot image and download options
        const newTab = window.open('about:blank'); // Set a specific URL for the new page
        newTab.document.body.innerHTML = `
          <header style="background-color: black; display: flex; justify-content: space-between; align-items: center; padding: 10px;">
            <h1 style="color: white;">Screenshot Preview</h1>
            <div>
              <button id="downloadImage" style="margin: 5px; padding: 10px; background-color: #0073e6; color: white; border: none; cursor: pointer;">Download as Image</button>
              <button id="downloadPDF" style="margin: 5px; padding: 10px; background-color: #0073e6; color: white; border: none; cursor: pointer;">Download as PDF</button>
            </div>
          </header>
          <img src="${response.image}" alt="Screenshot" style="width:100%; height:auto; display: block; margin: 0 auto;">
          <script>
            document.getElementById('downloadImage').onclick = function() {
              const link = document.createElement('a');
              link.href = "${response.image}";
              link.download = 'screenshot.png'; // Default filename
              link.click();
            };
            
            document.getElementById('downloadPDF').onclick = function() {
              const pdf = new jsPDF();
              pdf.addImage("${response.image}", 'PNG', 0, 0);
              pdf.save('screenshot.pdf'); // Default filename
            };
          <\/script>
        `;
        console.log("Screenshot taken and opened in new tab with download options");
      } else {
        console.error("Failed to take screenshot");
      }
    });
  });

  document.getElementById('visibleAreaBtn').addEventListener('click', () => {
    console.log("Visible Area button clicked");
    chrome.runtime.sendMessage({ action: "takeScreenshot" }, (response) => {
      if (response.image) {
        // Open a new tab with the screenshot image and download options
        const newTab = window.open('about:blank'); // Set a specific URL for the new page
        newTab.document.body.innerHTML = `
          <header style="background-color: black; display: flex; justify-content: space-between; align-items: center; padding: 10px;">
            <h1 style="color: white;">Screenshot Preview</h1>
            <div>
              <button id="downloadImage" style="margin: 5px; padding: 10px; background-color: #0073e6; color: white; border: none; cursor: pointer;">Download as Image</button>
              <button id="downloadPDF" style="margin: 5px; padding: 10px; background-color: #0073e6; color: white; border: none; cursor: pointer;">Download as PDF</button>
            </div>
          </header>
          <img src="${response.image}" alt="Screenshot" style="width:100%; height:auto; display: block; margin: 0 auto;">
          <script>
            document.getElementById('downloadImage').onclick = function() {
              const link = document.createElement('a');
              link.href = "${response.image}";
              link.download = 'screenshot.png'; // Default filename
              link.click();
            };
            
            document.getElementById('downloadPDF').onclick = function() {
              const pdf = new jsPDF();
              pdf.addImage("${response.image}", 'PNG', 0, 0);
              pdf.save('screenshot.pdf'); // Default filename
            };
          <\/script>
        `;
        console.log("Screenshot taken and opened in new tab with download options");
      } else {
        console.error("Failed to take screenshot");
      }
    });
  });
});
