const checkComplete=()=>{
    const i = document.createElement('i');
    i.classList.add('far', 'fa-check-square', 'icon');//los espacios dividen la clase en varios parámetros
    i.addEventListener('click', completeTask);
    return i;
};

const completeTask=(e)=>{
    const element = e.target;
    element.classList.toggle('fas');
    element.classList.toggle('completeIcon');
    element.classList.toggle('far');
};

export default checkComplete;