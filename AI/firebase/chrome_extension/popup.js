const saveBtn = document.getElementById('save-btn');
const categorySelect = document.getElementById('category');
const shoppingList = document.getElementById('shopping-list');

function renderList(items) {
    shoppingList.innerHTML = '';
    items.forEach(({ url, category }) => {
        const li = document.createElement('li');
        li.innerHTML = `<strong>${category}:</strong> <a href="${url}" target="_blank">${url}</a>`;
        shoppingList.appendChild(li);
    });
}

function loadItems() {
    chrome.storage.local.get(['shoppingItems'], (data) => {
        renderList(data.shoppingItems || []);
    });
}

saveBtn.addEventListener('click', async () => {
    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    const url = tab.url;
    const category = categorySelect.value;

    chrome.storage.local.get(['shoppingItems'], (data) => {
        const items = data.shoppingItems || [];
        items.push({ url, category });
        chrome.storage.local.set({ shoppingItems: items }, loadItems);
    });
});

document.addEventListener('DOMContentLoaded', loadItems);
