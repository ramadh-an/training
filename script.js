const button = document.querySelector('button');
const gallery = document.querySelector('.gallery');
const h2 = document.querySelector('h2');

button.addEventListener('click', function() {
    const r = Math.round(Math.random() * 255 + 1);
    const g = Math.round(Math.random() * 255 + 1);
    const b = Math.round(Math.random() * 255 + 1);
    
    h2.style.color = 'rgb('+ r +','+ g +', '+ b +')';
    button.style.backgroundColor = 'rgb('+ r +','+ g +', '+ b +')';
    gallery.style.borderColor = 'rgb('+ r +','+ g +', '+ b +')';
    gallery.style.backgroundColor = 'rgb('+ r +','+ g +', '+ b +')';
});