export function addOffset(map) {
    const mapGetSize = map.getSize();
    console.log('mapGetSize', mapGetSize);

    const offsetY = map.getSize().y * -0.1;

    if (window.matchMedia('(max-width: 1023px)').matches) {
        map.panBy([0, offsetY]);
        console.log('offset was added');
    } else {
        console.log('offset was NOT added');

    }
}