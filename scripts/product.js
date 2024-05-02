document.querySelectorAll('.filter-category label').forEach(label => {
    label.addEventListener('click', function() {
      let select = this.nextElementSibling;
      select.style.display = select.style.display === 'none' ? 'block' : 'none';
    });
  });
  