buttons.forEach(btn) =>{
    btn.addEventListener("click", () => {
        if(!.btn.id.match('erase')){
            realTimesScreenValue.push(btn.value)
            currentInput.innerHTML = realTimesScreenValue.join('');
            if(btn.classList.contains('num_btn')){
                answerScreen.innerHTML = eval(realTimesScreenValue.join(''));
            }
            }
            //when erase button is clicked
            if(btn.id.match('erase')){
                realTimesScreenValue.pop();
                currentInput.innerHTML = realTimesScreenValue.join('');
                answerScreen.innerHTML = eval(realTimesScreenValue.join(''));
            }
            //when clicked button is evaluate button
            if(btn.id.match('evaluate')){
                currentInput.className = 'answerScreen';
                answerScreen.className = 'currentInput';
                answerScreen.style.color = "white";
            }
            //prevent undefined error in the screen
            if(type eval(realTimesScreenValue.join('')) =='undefined'){
                answerScreen.innerHTML = 0
            }
    })
})