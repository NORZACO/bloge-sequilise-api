

class TutorialFilter {
    constructor(formId, searchInputId, sortSelectId, pageSelectId, pageNumberId) {
        this.form = document.getElementById(formId);
        this.searchInput = document.getElementById(searchInputId);
        this.sortSelect = document.getElementById(sortSelectId);
        this.pageSelect = document.getElementById(pageSelectId);
        this.pageNumber = document.getElementById(pageNumberId);
    }

    // http://127.0.0.1:3000/tutorials?search-input=the&sort-select=title&page-size-select=1&page-number=2

    /* 

    http://localhost:3000/tutorials?
    
    description=the&
    sort=title:asc&
    page=2&
    size=1#

    */
    applyFilter() {
        // Construct the base URL for the tutorials endpoint
        let url = 'http://localhost:3000/tutorials';

        // Get the search term from the search input and add it to the URL as a query parameter
        const searchTerm = this.searchInput.value.trim();
        if (searchTerm) {
            url += `?description=${searchTerm}`;
        }

        // Get the selected sorting property and direction from the sort select and add it to the URL as a query parameter
        const sortProperty = this.sortSelect.value;
        if (sortProperty) {
            const sortDirection = this.sortSelect.options[this.sortSelect.selectedIndex].dataset.direction;
            url += `&sort=${sortProperty}:${sortDirection}`;
        }

        // Get the selected page size from the page size select and add it to the URL as a query parameter
        const pageSize = this.pageSelect.value;
        if (pageSize) {
            url += `&size=${pageSize}`;
        }

        // Get the current page number from the page filter input and add it to the URL as a query parameter
        const currentPage = this.pageNumber.value;
        if (currentPage) {
            url += `&page=${currentPage}`;
        }

        // Update the URL of the current page to the constructed URL
        window.location.href = url;
    }

    init() {
        // Attach an event listener to the form that captures the user's input and constructs the URL for the tutorials endpoint
        this.form.addEventListener('submit', (event) => {
            event.preventDefault(); // prevent the default form submission behavior
            this.applyFilter();
        });
    }
}


// document.addEventListener('DOMContentLoaded', () => {
//     const tutorialFilter = new TutorialFilter('tutorial-filter-form', 'search-input', 'sort-select', 'page-size-select', 'page-number');
//     tutorialFilter.init();
//   });

// http://localhost:3000/tutorials?description=the&sort=title:asc&page=2&size=1#

document.addEventListener('DOMContentLoaded', () => {
    const tutorialFilter = new TutorialFilter(
        'tutorial-filter-form', 
        'description', 
        'sort', 
        'size', 
        'page'
        );
    tutorialFilter.init();
});
