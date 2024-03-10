document.addEventListener('DOMContentLoaded', function() {
    
    //Getting elements
    const events = document.getElementsByClassName('event');
    const articles = document.getElementsByClassName('first-picture');
    const headerLink = document.getElementsByClassName('headerLink');
    const headerArrow = document.getElementsByClassName('fa-solid fa-arrow-right');

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

    //Header arrow moviment
    const arrowMovment = () => {
        headerLink[0].addEventListener('mouseenter', () => {
            headerArrow[0].classList.add('moveRight');
        });

        headerLink[0].addEventListener('mouseleave', () => {
            headerArrow[0].classList.remove('moveRight');
        });

    }

    arrowMovment();


    //Efect for blogs articles
    window.addEventListener('scroll', function(event){
           
        if (isInViewport(articlesArray[0])) {
            
            articlesArray.forEach((img, index) => {
                img.classList.add('afect');
            });
        }
    });
 
    
    // Events showing up
    window.addEventListener('scroll', function() {

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
