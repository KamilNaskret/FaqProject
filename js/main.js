const options = [...document.querySelectorAll('[data-option] p')];
const optionDesc = [...document.querySelectorAll('[data-optionDesc]')];
const pinOp = [...document.querySelectorAll('[data-option]')];
const arrows = [...document.querySelectorAll('[data-option] img')];


console.log(options);

options.forEach((option) => {
    option.addEventListener('click',(e) => {
        let index = options.indexOf(e.target);
        // optionDesc.forEach((item) => item.classList.remove('show'));
        if(optionDesc[index].classList.contains('show')){
            optionDesc[index].classList.remove('show');
            arrows[index].classList.remove('rotate');
        }else{
        optionDesc[index].classList.add('show');
        arrows[index].classList.add('rotate');
        }
        console.log(optionDesc);
    })
})