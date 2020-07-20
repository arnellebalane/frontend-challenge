window.addEventListener('load', () => {
  let index = 0;
  const maxIndex = document.querySelectorAll('.SkillSection__Images li').length - 1;

  const sidebar = document.querySelector('.SkillSection__List');
  const sidebarItems = [...sidebar.children];

  const item = document.querySelector('.SkillSection__Images li');
  const itemStyleMap = item.computedStyleMap();
  const itemTotalWidth = itemStyleMap.get('width').value + itemStyleMap.get('margin-right').value;

  const scrollContainer = document.querySelector('.SkillSection__ScrollWrapper');

  function selectItemAtIndex(newIndex) {
    if (newIndex === index) return;

    sidebarItems[index].querySelector('a').classList.remove('SkillSection__Link--active');
    sidebarItems[newIndex].querySelector('a').classList.add('SkillSection__Link--active');

    index = newIndex;
    scrollContainer.scrollTo({
      left: itemTotalWidth * index,
      behavior: 'smooth',
    });
  }

  document.querySelector('.SkillSection__Button--Previous').addEventListener('click', () => {
    selectItemAtIndex(Math.max(index - 1, 0));
  });
  document.querySelector('.SkillSection__Button--Next').addEventListener('click', () => {
    selectItemAtIndex(Math.min(index + 1, maxIndex));
  });

  sidebar.addEventListener('click', (event) => {
    const item = event.target.closest('li');
    if (!item) return;

    event.preventDefault();
    const index = sidebarItems.indexOf(item);
    selectItemAtIndex(index);
  });
});
