let menu=document.querySelector('.menu_logo').addEventListener('click', ()=> {
 
    //   select li lists
     let phoneMenu=document.querySelector('.phone_menu_site');
       phoneMenu.classList.add('show_menu_site');
 
     let contains=phoneMenu.classList.contains('show_menu_site');

      let leaveLogo=document.querySelector('.arrow_right_logo');
      leaveLogo.onclick= () => {
              leaveLogo.parentElement.classList.add('leave_menu_site');


      }

      if (contains) {
        leaveLogo.parentElement.classList.remove('leave_menu_site');
         phoneMenu.classList.add('show_menu_site');
      }else{
        leaveLogo.parentElement.classList.add('leave_menu_site');
       phoneMenu.classList.remove('show_menu_site');

      }

     

    
        
     
            


})
 
  
//  form input letter spacing section

         const labels=document.querySelectorAll('label');

labels.forEach(label => {
  label.innerHTML = label.innerText
      .split('')
      .map((letter, idx) => `<span style="transition-delay:${idx * 50}ms">${letter}</span>`)
      .join('')
})