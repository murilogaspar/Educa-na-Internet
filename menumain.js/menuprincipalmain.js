let menuIsOpened = false;

/* Mapeando o botão nav ul.button que é o que está no css*/
const button = document.querySelector('nav ul.button');

/* Mapeando o botão nav ul.menu que é o que está no css*/
const menu = document.querySelector('nav ul.menu');

/* o button é do html , puxou o botão e adiciona o evento click */
button.addEventListener("click", () => {
    /* se o menu estiver com o display flex */
    if (!menuIsOpened){
        menu.style.display ='flex';
        menuIsOpened = true;
    } else{
        /* se o menu estiver com o display none */
        menu.style.display = 'none';
        menuIsOpened = false;
    }
})

