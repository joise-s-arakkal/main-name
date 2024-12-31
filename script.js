// Function to get query parameters from the URL
function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

// Get the 'name' parameter from the URL
const name = getQueryParam('name');

// If a name is provided, display it stylishly
if (name) {
    const nameDisplay = document.getElementById('nameDisplay');
    nameDisplay.textContent = name;
}
