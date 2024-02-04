// Add custom JavaScript here
function typingEffect(){
    const text = "I am Mahadari Sandeep";
    const element = document.getElementById('typing-text');
    const delay = 100;
    for(let i=0; i< text.length;i++){
        setTimeout(() => {
            element.textContent += text.charAt(i);
        }, delay*i);
    }
}

document.addEventListener('DOMContentLoaded', typingEffect);
