import deleteIcon from "./componentes/deleteComponent.js";
import checkComplete from "./componentes/checkComponent.js";

(()=>{//inicio función flecha
    const btn= document.querySelector('[data-form-btn]')

    const createTask = (evento)=>{

        evento.preventDefault(); //Siempre para controlar los elementos
        const input = document.querySelector('[data-form-input]');
        //console.log(input.value);
        const valor=input.value;
        const list=document.querySelector('[data-list]');
        const task = document.createElement('li');//crea el elemento li
        task.classList.add('card');//.classList.add('') añade la clase de css al elemento
        input.value='';
        const taskContent= document.createElement('div');
        const titleTask=document.createElement('span');
        titleTask.classList.add('task');
        titleTask.innerText=valor;
        taskContent.appendChild(checkComplete());
        taskContent.appendChild(titleTask);
        //los `` y los '' y los "" son diferentes, ´´ no existe

        task.appendChild(taskContent);
        task.appendChild(deleteIcon());//se debe llamar con () pq es función ps
        list.appendChild(task);
        console.log("entra");
    };

    btn.addEventListener('click', createTask);//click + nombre función

    
})();//fin función flecha