// fetch and render product list
fetch('/api/products')
  .then(r => r.json())
  .then(list => {
    const ul = document.getElementById('products');
    list.forEach(p => {
      const li = document.createElement('li');
      li.textContent = `${p.name} – $${p.price}`;
      ul.appendChild(li);
    });
  });
