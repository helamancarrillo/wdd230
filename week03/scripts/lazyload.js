function displayLastModified() {
    const lastModified = document.lastModified;
    const lastModifiedElement = document.getElementById('lastModified');
    lastModifiedElement.textContent = `Last Modified: ${lastModified}`;
}

window.onload = displayLastModified;

