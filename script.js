document.addEventListener('DOMContentLoaded', () => {
    loadPieces();
});

function loadPieces() {
    const pieces = [
        { id: 1, name: 'Motor', quantity: 10, supplier: 'Fornecedor A' },
        { id: 2, name: 'Hélice', quantity: 20, supplier: 'Fornecedor B' },
        { id: 3, name: 'Bateria', quantity: 5, supplier: 'Fornecedor C' }
    ];

    const piecesList = document.getElementById('piecesList');
    piecesList.innerHTML = '';

    pieces.forEach(piece => {
        const li = document.createElement('li');
        li.textContent = `${piece.name} - Quantidade: ${piece.quantity} - Fornecedor: ${piece.supplier}`;
        piecesList.appendChild(li);
    });
}

function searchPieces() {
    const searchTerm = document.getElementById('search').value.toLowerCase();
    const piecesList = document.getElementById('piecesList');
    const items = piecesList.getElementsByTagName('li');

    for (let i = 0; i < items.length; i++) {
        const item = items[i];
        if (item.textContent.toLowerCase().includes(searchTerm)) {
            item.style.display = '';
        } else {
            item.style.display = 'none';
        }
    }
}
