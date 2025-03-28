// Config function for orb grid
let data = [
		['Contoso Florida', 'Proseware LCD17W E202 Black', 'Proseware, Inc.', 'Economy', 'Monitors', 4, 509.55],
		['Contoso New Jersey', 'Adventure Works CRT15 E101 Black', 'Adventure Works', 'Economy', 'Monitors', 4, 351],
		['Contoso Japan', 'WWI Projector 480p LCD12 Silver', 'Wide World Importers', 'Regular', 'Projectors & Screens', 9, 2038.1],
		['Contoso Quebec', 'Proseware Screen 80in E1010 Black', 'Proseware, Inc.', 'Economy', 'Projectors & Screens', 4, 419.65],
		['Contoso North America Online Store', 'Adventure Works LCD15 E100 White', 'Adventure Works', 'Economy', 'Monitors', 4, 381.15],
		['Contoso Massachusetts', 'WWI CRT17 E106 Black', 'Wide World Importers', 'Economy', 'Monitors', 4, 391.05],
		['Contoso Iran', 'WWI Projector 480p LCD12 Silver', 'Wide World Importers', 'Regular', 'Projectors & Screens', 9, 2038.1],
		['Contoso Denmark', 'WWI Screen 85in E1010 White', 'Wide World Importers', 'Economy', 'Projectors & Screens', 4, 549.05],
		['Contoso South Carolina', 'Proseware Screen 80in E1010 Silver', 'Proseware, Inc.', 'Economy', 'Projectors & Screens', 4, 425.1],
		['Contoso Colorado', 'Contoso Projector 480p M481 White', 'Contoso, Ltd', 'Regular', 'Projectors & Screens', 9, 4416.15],
		['Contoso Slovenia', 'Contoso Screen 85in E085 White', 'Contoso, Ltd', 'Economy', 'Projectors & Screens', 4, 542.1],
		['Contoso Thailand', 'Proseware Projector 1080p LCD86 Silver', 'Proseware, Inc.', 'Deluxe', 'Projectors & Screens', 9, 20655],
		['Contoso Shanghai', 'Contoso Screen 80in E080 White', 'Contoso, Ltd', 'Economy', 'Projectors & Screens', 4, 419.65],
		['Contoso Alberta', 'Proseware Projector 480p LCD12 White', 'Proseware, Inc.', 'Regular', 'Projectors & Screens', 9, 2061],
		['Contoso Australia', 'Proseware Screen 85in E1010 Silver', 'Proseware, Inc.', 'Economy', 'Projectors & Screens', 4, 542.1],
		['Contoso Scotland', 'Proseware Scan Jet Digital Flat Bed Scanner M300 Grey', 'Proseware, Inc.', 'Regular', 'Printers, Scanners & Fax', 9, 1076.9],
		['Contoso Virginia', 'Proseware Mobile Receipt and Document Scanner M200 Grey', 'Proseware, Inc.', 'Regular', 'Printers, Scanners & Fax', 9, 1026.6],
		['Contoso Beijing', 'Proseware Laser Jet All in one X300 White', 'Proseware, Inc.', 'Regular', 'Printers, Scanners & Fax', 9, 1927.2],
		['Contoso Alberta', 'Proseware Projector 480p LCD12 Black', 'Proseware, Inc.', 'Regular', 'Projectors & Screens', 9, 2026.65],
		['Contoso Beijing', 'Proseware Ink Jet Instant PDF Sheet-Fed Scanner M300 Grey', 'Proseware, Inc.', 'Regular', 'Printers, Scanners & Fax', 9, 1440],
		['Contoso Poland', 'Proseware Scan Jet Digital Flat Bed Scanner M300 Grey', 'Proseware, Inc.', 'Regular', 'Printers, Scanners & Fax', 9, 1082.95],
		['Contoso Canada', 'Proseware Projector 1080p DLP86 Black', 'Proseware, Inc.', 'Deluxe', 'Projectors & Screens', 9, 21991.2],
		['Contoso Syria', 'Proseware Wireless Photo All-in-One Printer M390 Grey', 'Proseware, Inc.', 'Regular', 'Printers, Scanners & Fax', 9, 1654.4],
		['Contoso Poland', 'Proseware 23ppm Laser Printer with Wireless and Wired Network Interfaces M680 Black', 'Proseware, Inc.', 'Regular', 'Printers, Scanners & Fax', 9, 1734.6],
		['Contoso the Netherlands', 'WWI Desktop PC1.80 E1800 White', 'Wide World Importers', 'Economy', 'Desktops', 12, 2724.315],
		['Contoso Quebec', 'Adventure Works Laptop15 M1500 Black', 'Adventure Works', 'Regular', 'Laptops', 9, 6151.2],
		['Contoso the Netherlands', 'Adventure Works Desktop PC1.80 ED182 Silver', 'Adventure Works', 'Regular', 'Desktops', 27, 13472.305],
		['Contoso Malta', 'Adventure Works Desktop PC1.60 ED160 Brown', 'Adventure Works', 'Economy', 'Desktops', 12, 3212.405],
		['Contoso Iran', 'WWI Desktop PC1.80 E1802 White', 'Wide World Importers', 'Economy', 'Desktops', 12, 3598.8],
		['Contoso South Carolina', 'Adventure Works Desktop PC1.80 ED182 Silver', 'Adventure Works', 'Regular', 'Desktops', 27, 13472.305],
		['Contoso Maryland', 'Fabrikam Laptop19W M9800 Black', 'Fabrikam, Inc.', 'Regular', 'Laptops', 9, 10671.1],
		['Contoso Europe', 'Fabrikam Laptop13.3 M3000 Red', 'Fabrikam, Inc.', 'Regular', 'Laptops', 9, 3382],
		['Contoso Connecticut', 'WWI Laptop16 M0160 Black', 'Wide World Importers', 'Regular', 'Laptops', 9, 5331.1],
		['Contoso Maryland', 'Fabrikam Laptop16W M6080 Black', 'Fabrikam, Inc.', 'Regular', 'Laptops', 9, 8654.65],
		['Contoso Switzerland', 'Fabrikam Laptop15 M5000 White', 'Fabrikam, Inc.', 'Regular', 'Laptops', 9, 6256.05],
		['Contoso South Korea', 'Fabrikam Laptop19 M9000 Black', 'Fabrikam, Inc.', 'Regular', 'Laptops', 9, 9836.05],
		['Contoso Virginia', 'Adventure Works Desktop PC1.80 ED180 Black', 'Adventure Works', 'Regular', 'Desktops', 27, 9944.55],
		['Contoso Quebec', 'Proseware LCD17 E200 White', 'Proseware, Inc.', 'Economy', 'Monitors', 4, 386.1],
		['Contoso Alaska', 'WWI Desktop PC1.60 E1600 Black', 'Wide World Importers', 'Economy', 'Desktops', 12, 2595.41],
		['Contoso Canada', 'Adventure Works Desktop PC1.80 ED180 White', 'Adventure Works', 'Regular', 'Desktops', 27, 9963],
		['Contoso North America Online Store', 'WWI Desktop PC1.60 E1600 Black', 'Wide World Importers', 'Economy', 'Desktops', 12, 2606.4075],
		['Contoso Guangdong', 'Adventure Works Desktop PC1.60 ED160 White', 'Adventure Works', 'Economy', 'Desktops', 12, 3185.41],
		['Contoso North America Online Store', 'Adventure Works LCD17W E203 Black', 'Adventure Works', 'Economy', 'Monitors', 4, 516],
		['Contoso Alaska', 'Adventure Works LCD15 E100 Black', 'Adventure Works', 'Economy', 'Monitors', 4, 381.15],
		['Contoso Thailand', 'Adventure Works Desktop PC1.80 ED180 White', 'Adventure Works', 'Regular', 'Desktops', 27, 9963],
		['Contoso New Jersey', 'Adventure Works CRT19 E10 Black', 'Adventure Works', 'Economy', 'Monitors', 4, 269.1],
		['Contoso Malta', 'Proseware LCD17 E200 Black', 'Proseware, Inc.', 'Economy', 'Monitors', 4, 381.15],
		['Contoso New York', 'Proseware CRT17 E104 Black', 'Proseware, Inc.', 'Economy', 'Monitors', 4, 224.2],
		['Contoso Florida', 'Adventure Works Desktop PC1.80 ED180 White', 'Adventure Works', 'Regular', 'Desktops', 27, 9889.2],
		['Contoso Scotland', 'The Phone Company Touch Screen Phones - CRT M11 Gold', 'The Phone Company', 'Economy', 'Touch Screen Phones ', 4, 718.2],
		['Contoso Maine', 'Contoso Touch Screen Phones Capacitive M908 Black', 'Contoso, Ltd', 'Regular', 'Touch Screen Phones ', 9, 2756.6],
		['Contoso Virginia', 'The Phone Company Touch Screen Phones Capacitive M908 Gold', 'The Phone Company', 'Regular', 'Touch Screen Phones ', 9, 2725.8],
		['Contoso Malta', 'The Phone Company Sharp Touch Screen Phones M910 Grey', 'The Phone Company', 'Regular', 'Touch Screen Phones ', 9, 2678.9],
		['Contoso the Netherlands', 'Contoso Private Automatic Branch Exchange M65 Black', 'Contoso, Ltd', 'Regular', 'Home & Office Phones', 9, 343.112],
		['Contoso Guangdong', 'Contoso Sharp Touch Screen Phones M910 Black', 'Contoso, Ltd', 'Regular', 'Touch Screen Phones ', 9, 2663.85],
		['Contoso the Netherlands', 'The Phone Company Touch Screen Phones Capacitive M908 Grey', 'The Phone Company', 'Regular', 'Touch Screen Phones ', 9, 2710.4],
		['Contoso Alaska', 'The Phone Company Touch Screen Phones - LCD M12 Gold', 'The Phone Company', 'Economy', 'Touch Screen Phones ', 4, 800],
		['Contoso Slovenia', 'The Phone Company Touch Screen Phones SAW/On-wall M806 Grey', 'The Phone Company', 'Regular', 'Touch Screen Phones ', 9, 2637],
		['Contoso Connecticut', 'Contoso Private Automatic Branch Exchange M65 Black', 'Contoso, Ltd', 'Regular', 'Home & Office Phones', 9, 343.112],
		['Contoso Malta', 'The Phone Company Touch Screen Phones Infrared M901 Gold', 'The Phone Company', 'Regular', 'Touch Screen Phones ', 18, 5340],
		['Contoso Massachusetts', 'Contoso Private Automatic Branch Exchange M65 Black', 'Contoso, Ltd', 'Regular', 'Home & Office Phones', 9, 345.0615],
		['Contoso Connecticut', 'The Phone Company PDA Phone 3.7 inches M340 Silver', 'The Phone Company', 'Deluxe', 'Smart phones & PDAs ', 9, 2953.5],
		['Contoso New Jersey', 'The Phone Company PDA Palm 4.7 inch L850 Black', 'The Phone Company', 'Deluxe', 'Smart phones & PDAs ', 9, 3562.1],
		['Contoso Catalog Store', 'The Phone Company PDA Wifi 4.7-inch L290 Black', 'The Phone Company', 'Deluxe', 'Smart phones & PDAs ', 9, 3382],
		['Contoso the Netherlands', 'The Phone Company PDA Phone 3.5 inches M320 White', 'The Phone Company', 'Regular', 'Smart phones & PDAs ', 9, 2661.1],
		['Contoso Catalog Store', 'The Phone Company Sharp Touch Screen Phones M910 Black', 'The Phone Company', 'Regular', 'Touch Screen Phones ', 9, 2693.95],
		['Contoso Connecticut', 'The Phone Company PDA Phone Unlocked 3.5 inches M530 Black', 'The Phone Company', 'Regular', 'Smart phones & PDAs ', 9, 2412],
		['Contoso Scotland', 'The Phone Company PDA Phone Unlocked 3.5 inches M530 Silver', 'The Phone Company', 'Regular', 'Smart phones & PDAs ', 9, 2398.6],
		['Contoso New Jersey', 'The Phone Company PDA Wifi 4.7-inch L290 White', 'The Phone Company', 'Deluxe', 'Smart phones & PDAs ', 9, 3344],
		['Contoso Denmark', 'The Phone Company PDA Phone Unlocked 3.5 inches M530 Black', 'The Phone Company', 'Regular', 'Smart phones & PDAs ', 9, 2412],
		['Contoso Quebec', 'The Phone Company PDA Phone Unlocked 3.7 inches M510 White', 'The Phone Company', 'Regular', 'Smart phones & PDAs ', 9, 2094.4],
		['Contoso the Netherlands', 'The Phone Company Smart phones 6-LINE SCREEN M21 Gold', 'The Phone Company', 'Regular', 'Smart phones & PDAs ', 9, 2070],
		['Contoso Guangdong', 'The Phone Company Smart phones without camera E100 White', 'The Phone Company', 'Economy', 'Smart phones & PDAs ', 4, 496.65],
		['Contoso Poland', 'Cigarette Lighter Adapter for Contoso Phones E110 Black', 'Contoso, Ltd', 'Economy', 'Cell phones Accessories', 80, 1997.9505],
		['Contoso Shanghai', 'The Phone Company Smart phones without camera E100 Gold', 'The Phone Company', 'Economy', 'Smart phones & PDAs ', 4, 490.2],
		['Contoso Massachusetts', 'Cigarette Lighter Adapter for Contoso Phones E110 Red', 'Contoso, Ltd', 'Economy', 'Cell phones Accessories', 80, 1999.2]
    ];

var config = function() {
    return {
        width: 1110,
        height: 645,
        dataSource: data,
        dataHeadersLocation: 'columns',
        theme: 'red',
        toolbar: {
            visible: true
        },
        grandTotal: {
            rowsvisible: true,
            columnsvisible: true
        },
        subTotal: {
            visible: true,
            collapsed: true
        },
        fields: [
            {
                name: '6',
                caption: 'Amount',
                dataSettings: {
                    aggregateFunc: 'avg',
                    formatFunc: function(value) {
                        return Number(value).toFixed(0);
                    }
                }
            },
            {
                name: '0',
                caption: 'Entity'
            },
            {
                name: '1',
                caption: 'Product',
            },
            {
                name: '2',
                caption: 'Manufacturer',
                sort: {
                    order: 'asc'
                }
            },
            {
                name: '3',
                caption: 'Class'
            },
            {
                name: '4',
                caption: 'Category',
                sort: {
                    order: 'desc'
                }
            },
            {
                name: '5',
                caption: 'Quantity'
            }
        ],
        rows    : [ 'Manufacturer', 'Category' ],
        columns : [ 'Class' ],
        data    : [ 'Quantity', 'Amount' ],
        preFilters : {
            'Manufacturer': { 'Matches': /n/ },
            'Amount'      : { '>':  40 }
        }
    };
};

// Store toggler instances
var orbTogglers = [];

// Toggler constructor
function Toggler(options) {
    var self = this;
    this.options = options;
    
    this.openMenu = function(force) {
        if(force || self.collapsed) {
            // close all open menus except current one
            for(var i = 0; i < orbTogglers.length; i++) {
                if(orbTogglers[i] != self) {
                    orbTogglers[i].closeMenu();
                }
            }

            self.collapsed = false;
            self.options.onOpen(self.options.menu, self.options.isCompactMode());
        }
        self.options.menu.scrollTop = 0;
    };

    this.closeMenu = function() {
        if(!self.collapsed && self.options.isCompactMode()) {
            self.collapsed = true;
            self.options.onClose(self.options.menu);
        }
        self.options.menu.scrollTop = 0;
    };

    this.ensureMenu = function() {
        if(!self.options.isCompactMode()) {
            self.openMenu(true);
        } else {
            self.closeMenu();
        }
    };

    // Initialize the toggler
    orbTogglers.push(self);

    addEventListener(window, 'resize', self.ensureMenu);
    addEventListener(document, 'click', self.closeMenu);

    self.options.button = self.options.button || self.options.menu;

    addEventListener(self.options.button, 'click', function(e) {
        if(self.collapsed) {
            self.openMenu();

            if(e.stopPropagation) {
                e.stopPropagation();
            } else {
                e.cancelBubble = true;
            }

            if(e.preventDefault) {
                e.preventDefault();
            } else {
                e.returnValue = false;
            }
        }
    });

    self.collapsed = self.options.isCompactMode();
}

// Helper functions
function addEventListener(element, eventName, callback) {
    if (element && element.addEventListener) {
        element.addEventListener(eventName, callback);
    }
    else if (element && element.attachEvent) {
        element.attachEvent('on' + eventName, callback);
    }
    else if (element) {
        element['on' + eventName] = callback;
    }
}

function getWindowSize() {
    var win = window,
        d = document,
        e = d.documentElement,
        g = d.getElementsByTagName('body')[0],
        w = win.innerWidth || e.clientWidth || g.clientWidth,
        h = win.innerHeight|| e.clientHeight|| g.clientHeight;
    return { width: w, height: h};
}

function getStyle(element, styleProp) {
    if(element && styleProp) {
        if (element.currentStyle) {
            return element.currentStyle[styleProp];
        } else if (window.getComputedStyle) {
            return window.getComputedStyle(element, null).getPropertyValue(styleProp);
        }
    }
    return null;
}

// Window load event handler
window.onload = function() {
    var pgridElem = document.getElementById('demo-pgrid');
    var sideMenuElement = document.getElementById('sidenav');
    var topMenuButton = document.getElementById('linkstoggle');
    var topMenuElement = document.getElementById('headerlinks');

    if(pgridElem) {
        console.log("ORB", orb)
        new orb.pgridwidget(config()).render(pgridElem);
    }

    if(sideMenuElement) {
        new Toggler({
            menu: sideMenuElement,
            onOpen: function(elem, compactMode) {
                elem.style.overflow = 'auto';
                elem.style.height = 'auto';

                if(compactMode) {
                    var menuHeight = elem.offsetHeight;
                    elem.style.height = Math.min((getWindowSize().height - 74 - 24), menuHeight) + 'px';
                }
            },
            onClose: function(elem) {
                elem.style.overflow = 'hidden';
                elem.style.height = '30px';
            },
            isCompactMode: function() {
                return getStyle(sideMenuElement, 'cursor') === 'pointer';
            }
        });
    }

    if(topMenuElement) {
        new Toggler({
            button: topMenuButton,
            menu: topMenuElement,
            onOpen: function(elem) {
                topMenuElement.style.height = 'auto';
                topMenuButton.style.borderRadius = '3px 3px 0 0';
            },
            onClose: function(elem) {
                topMenuElement.style.height = '27px';
                topMenuButton.style.borderRadius = '3px';
            },
            isCompactMode: function() {
                return getStyle(topMenuButton.parentNode, 'display') === 'block';
            }
        });
    }
};