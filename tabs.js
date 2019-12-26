const toggleActiveTab = (num) => {
    let activeHeader = document.querySelector('.tab-header.active'),
            activeTab = document.querySelector('.tab.active');

    // Remove Current Active Header
    activeHeader.classList.remove('active');

    // Set New Active Header
    document.querySelector(`#tab-header-${num}`).classList.add('active');

    // Remove Current Active Tab
    activeTab.classList.remove('active');

    // Set New Active Tab
    document.querySelector(`#tab-${num}`).classList.add('active');
}