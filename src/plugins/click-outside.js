export default {
    /*
    * vue 3
    */
    beforeMount(el, binding, vnode) {
        el.clickOutsideEvent = function (event) {
            console.log(event.target)
            if (!(el == event.target || el.contains(event.target))) {
                vnode.context[binding.expression](event);
            }
        };
        document.body.addEventListener('click', el.clickOutsideEvent);
        document.addEventListener('touchstart', el.clickOutsideEvent)
    },
    unmounted(el) {
        document.body.removeEventListener('click', el.clickOutsideEvent);
        document.removeEventListener('touchstart', el.clickOutsideEvent)

    }
}
