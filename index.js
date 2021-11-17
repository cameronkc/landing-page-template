window.onload=function(){
    const toggle = document.getElementById('checkbox');
    const body = document.body;

    toggle.addEventListener('input', e => {
        
        const isChecked = e.target.checked;

        if (isChecked) {
            body.classList.add('light-theme');
        } else {
            body.classList.remove('light-theme');
        }
    });
}
