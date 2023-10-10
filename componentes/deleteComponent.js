const deleteIcon=()=>{
    const i = document.createElement('i');//crea la etiqueta de ícono
    i.classList.add('fas', 'fa-trash-alt', 'trashIcon', 'icon');//da estilo a la etiqueta
    i.addEventListener('click', deleteTask);//llama a la función de eliminación
    return i;
};

const deleteTask=(eve)=>{//función de funcionalidad de eliminación
    const padre = eve.target.parentElement;
    padre.remove();
};

export default deleteIcon;