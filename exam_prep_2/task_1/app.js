// Write the missing JavaScript code to make the Blog application work as expected.
// You should be able to create new articles. Each article has author, title, category and content. When you click the [Create] button, a new article item should be added to the articles section. The new item should have the following structure:
// Append two buttons, which are in a div element with class 'buttons' to each article item [Delete] button should have the following classes: 'btn' and 'delete' [Archive] button should have the following classes: 'btn' and 'archive' When you click the [Archive] button you should move the article to the ol in the archive section. Archive section
// should be sorted by title. Important! Do not move the entire article, but only the title of the article.



function solve(){
   const form = document.querySelector('aside form');
   const creator = form.querySelector('#creator');
   const title = form.querySelector('#title');
   const category = form.querySelector('#category');
   const content = form.querySelector('#content');
   const createBtn = form.querySelector('.btn');
   const container = document.querySelector('main section');
   const archiveSection = document.querySelector('.archive-section ol');

   createBtn.addEventListener('click', (e) => {
      e.preventDefault();
      createArticle(title.value, category.value, creator.value, content.value, container);
   });

   function createArticle(title, category, creator, content, container){
      let article = createEl('article');
      let h1 = createEl('h1', title);
      let pCategory = createEl('p',`Category:`);
      let strongCategory = createEl('strong', category);
      let pCreator = createEl('p', 'Creator:');
      let strongCreator = createEl('strong', creator);
      let pText = createEl('p', content);
      let divBtns = createEl('div');
      let btnDel = createEl('button', 'Delete');
      let btnArchive = createEl('button', 'Archive');
     

      divBtns.classList.add('buttons');
      btnDel.className = 'btn delete';
      btnArchive.className = 'btn archive';
      divBtns.appendChild(btnDel);
      divBtns.appendChild(btnArchive);

      pCategory.appendChild(strongCategory);
      pCreator.appendChild(strongCreator);
      article.appendChild(h1);
      article.appendChild(pCategory);
      article.appendChild(pCreator);
      article.appendChild(pText);
      article.appendChild(divBtns);
      container.appendChild(article);

      btnDel.addEventListener('click', (e) => {
         const article = e.target.parentElement.parentElement;
         article.remove();
      });

      btnArchive.addEventListener('click', archiveArticle);
      
   }

   function archiveArticle(e){
      let article = e.target.parentElement.parentElement;
      let archiveOl = document.querySelector('.archive-section ol');

      let archiveLi = Array.from(archiveOl.querySelectorAll('li'));
      let text = article.querySelector('h1').textContent;

      let newLi = createEl('li', text);

      archiveLi.push(newLi);
      archiveLi.sort((a,b) => a.textContent.localeCompare(b.textContent))
               .forEach(l => archiveOl.appendChild(l));
   
      article.remove();
   }

   function createEl(el, text, classN){
      let element = document.createElement(el);
      if(text){
          element.textContent = text;
      }
      if(classN) element.classList.add(classN);
      return element;
   }
   
}
