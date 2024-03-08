document.addEventListener('DOMContentLoaded', function() {
    
    //Getting elements
    const events = document.getElementsByClassName('event');
    const articles = document.getElementsByTagName('article');

    //console.log(events[0].getBoundingClientRect().top);

    //From HTML collection to array
    const eventsArray = [...events];
    const articlesArray = [...articles];
    
    // Function to check if an element is in the viewport
    const isInViewport = (element) => {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
        );
    };

    // Events showing up
    window.addEventListener('scroll', function() {
        //console.log(window.scrollY);

        const showingEvent = () => {
            if (isInViewport(eventsArray[0])) {
                eventsArray.forEach((event, index) => {
                    setTimeout(() => event.classList.remove('hidden'), 400 * index);
                });
            }
        };

        showingEvent();
    });
});
