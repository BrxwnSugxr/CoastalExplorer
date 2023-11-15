document.addEventListener('DOMContentLoaded', function () {
  const expandableItems = document.querySelectorAll('.expandable-item');

  expandableItems.forEach(function (item) {
    item.addEventListener('click', function () {
      // Toggle the 'expanded' class on the clicked item
      item.classList.toggle('expanded');

      // Toggle the visibility of the expandable content
      const expandableContent = item.querySelector('.expandable-content');
      if (expandableContent) {
        expandableContent.style.display =
          expandableContent.style.display === 'block' ? 'none' : 'block';
      }

      // Close other expanded items
      expandableItems.forEach(function (otherItem) {
        if (otherItem !== item && otherItem.classList.contains('expanded')) {
          otherItem.classList.remove('expanded');
          const otherExpandableContent = otherItem.querySelector(
            '.expandable-content'
          );
          if (otherExpandableContent) {
            otherExpandableContent.style.display = 'none';
          }
        }
      });
    });

    // Ensure that none of the items are expanded initially
    item.classList.remove('expanded');
    const expandableContent = item.querySelector('.expandable-content');
    if (expandableContent) {
      expandableContent.style.display = 'none';
    }
  });
});
