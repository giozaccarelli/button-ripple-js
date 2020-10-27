const buttons = document.querySelectorAll("a");

buttons.forEach((button) => {
    button.onclick = function(e){
        let x = e.clientX - e.target.offsetLeft;
        let y = e.clientY - e.target.offetTop;
        let ripple = document.createElement("span");

        ripple.style.left = `${x}px`;
        ripple.style.Top = `${y}px`;
        this.appendChild(ripple);

        setTimeout(function(){
            ripple.remove();
        }, 600);
    }
});