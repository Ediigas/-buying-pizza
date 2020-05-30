//Funções anonimas pra organização do codigo!
const c = (el)=> document.querySelector(el);
const cs = (el)=> document.querySelectorAll(el);
    
// Prenchimento das pizzas e selection
pizzaJson.map((item, index)=> {
    let pizzaItem = c('.models .pizza-item') .cloneNode(true);

    pizzaItem.querySelector('.pizza-item--img img').src = item.img;
    pizzaItem.querySelector('.pizza-item--price') .innerHTML= `R$ ${item.price.toFixed(2)}`;
    pizzaItem.querySelector('.pizza-item--name') .innerHTML= item.name;
    pizzaItem.querySelector('.pizza-item--desc') .innerHTML= item.description;

    //Aqui abre o modal, carrinho,quantidade, tamanhos etc...
    pizzaItem.querySelector('a').addEventListener('click', (e)=>{
        e.preventDefault();
        
        c('.pizzaWindowArea').style.opacity = 0;
        c('.pizzaWindowArea').style.display = "flex";

        //Animação para abrir o o window
        setTimeout(()=>{
              c('.pizzaWindowArea').style.opacity = 1;
        }, 200);
      
        

    });
    
   

    c('.pizza-area').append(pizzaItem);
});

//modal,carrinho etc...