class MenuMobile {
    constructor(nav, navButton) {
        this.nav = document.querySelector(nav);
        this.navButton = document.querySelector(navButton);
        this.activeClass = 'active';

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.nav.classList.toggle(this.activeClass);
    }

    addEventClickButtonMenu() {
        this.navButton.addEventListener('click', this.handleClick);
    }   

    init() {
        if (this.navButton) {
            this.addEventClickButtonMenu();            
        }

        return this;
    }
}

const menuMobile = new MenuMobile('.nav-mobile', '.menu-button-mobile');

menuMobile.init();