document.addEventListener('DOMContentLoaded', function () {
    const images = document.querySelectorAll('#cajaimagenes img');
    const dropZones = document.querySelectorAll('.caja');

    images.forEach(image => {
        image.addEventListener('dragstart', dragStart);
    });

    dropZones.forEach(zone => {
        zone.addEventListener('dragover', dragOver);
        zone.addEventListener('drop', drop);
    });

    function dragStart(e) {
        e.dataTransfer.setData('text/plain', e.target.id);
        setTimeout(() => {
            e.target.classList.add('hide');
        }, 0);
    }

    function dragOver(e) {
        e.preventDefault();
    }

    function drop(e) {
        e.preventDefault();
        const id = e.dataTransfer.getData('text');
        const draggable = document.getElementById(id);
        draggable.classList.remove('hide');
        e.target.appendChild(draggable);
    }
});

function reinicio() {
    window.location.reload();
}
