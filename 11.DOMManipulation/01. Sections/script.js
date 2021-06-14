function create(words) {
   function create(words) {
      const content = document.getElementById('content');
   
      for(let word of words){
         let div = document.createElement('div');
         let p = document.createElement('p');
         p.textContent = word;
         p.style.display = 'none';
   
        div.appendChild(p);
         content.appendChild(div);
      }
   
      content.addEventListener('click', (e)=>{
          if(e.target.tagName === 'DIV'){
              e.target.children[0].style.display = 'block';
          }
      });
   }
}