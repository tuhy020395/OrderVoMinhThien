document.addEventListener('DOMContentLoaded', () => {
    var ctx = document.getElementById('chartDoughnut');
    var data = {
        labels: [
          "Đặt hàng TQ",
          "NK chính nghạch",
          "Thanh toán hộ"
        ],
        datasets: [
          {
            data: [75, 11, 14],
            backgroundColor: [
              "#1a8917",
              "#076007",
              "#f2994a"
            ],
            hoverBackgroundColor: [
              "#1a8917",
              "#076007",
              "#f2994a"
            ]
          }]
      };

    if(ctx) {
      var promisedDeliveryChart = new Chart(document.getElementById('chartDoughnut'), {
        type: 'doughnut',
        data: data,
        options: {
            responsive: true,
            legend: {
                display: false
            }
        }
      });
    }
});

document.addEventListener('DOMContentLoaded', () => {
    var ctx = document.getElementById('statisticalChart');
    var data = {
        labels: ["01/07", "05/07", "10/07", "15/07", "20/07", "25/07", "31/07"],
        datasets: [{
            label: 'Counts',
            data: [140, 180, 150, 190, 190, 250, 260],
            fill: false,
            lineTension: 0.1,
            backgroundColor: 'rgba(75,192,192,0.4)',
            borderWidth: 3,
            borderColor: 'rgba(26, 137, 23, 1)',
            borderCapStyle: 'round',
            borderJoinStyle: 'round',
            pointBorderColor: 'rgba(26, 137, 23, 1)',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(26, 137, 23, 1)',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 3,
            pointHitRadius: 20,
            pointStyle: 'circle',
        }]
    };

    if(ctx) {
        var myChart = new Chart.Line(ctx, {
            data: data,
            options: {
                legend: {
                    display: false
                },
                responsive: true,
                scales: {
                yAxes: [{
                    ticks: {
                    min: 140,
                    max: 260
                    }
                }]
                }
            }
        });
    }
});

function cloneNode(elem, item) {
    const itm = document.getElementById(item);
    const cln = itm.cloneNode(true);
    document.getElementById(elem).appendChild(cln)
}

document.addEventListener('DOMContentLoaded', () => {
    const addClassify = document.getElementById('addClassify');
    if(addClassify) {
        addClassify.addEventListener('click', () => {
            cloneNode('listProduct', 'itemProduct');
        })
    }

    const addProduct = document.getElementById('addProduct');
    if(addProduct) {
        addProduct.addEventListener('click', () => {
            cloneNode('listCardProduct', 'itemCardProduct');
        })
    }

    const addRequirement = document.getElementById('addRequirement');
    if(addRequirement) {
        addRequirement.addEventListener('click', () => {
            cloneNode('listRequirement', 'itemRequirement');
        })
    }

    const addDeclare = document.getElementById('addDeclare');
    if(addDeclare) {
        addDeclare.addEventListener('click', () => {
            cloneNode('listCardDeclare', 'cardDeclare');
        })
    }

    const addAddress = document.getElementById('addAddress');
    if(addAddress) {
        addAddress.addEventListener('click', () => {
            cloneNode('listAddress', 'cardAddress');
        })
    }
});

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.sidebar .dropdown').forEach(el => {
        const dropdown = el;
        const arrows = document.createElement("i");
        const back = el.querySelector('.title-sub-menu');
        arrows.classList.add('fa', 'fa-angle-right');
        dropdown.querySelector('a').appendChild(arrows);
        back.addEventListener('click', function () {
            dropdown.classList.remove('show-sub-menu');
        })
        arrows.addEventListener('click', e => {
            e.preventDefault();
            let text = el.querySelector('a').textContent;
            back.querySelector('.tt').textContent = text;
            dropdown.classList.toggle('show-sub-menu');
        });
    });
});

const tabsMoveTo = target => {
    const tabLink = target;
    const tabLinkSiblings = tabLink.parentElement.children;
    const tabContent = document.querySelector(tabLink.getAttribute('data-tab'));
    if (!tabContent) {
        console.warn('tabContent not found!');
        return;
    }
    const tabContentSiblings = tabContent.parentElement.children;
    for (const tabLinkSibling of tabLinkSiblings) {
        if (tabLinkSibling.classList.contains('active')) {
            tabLinkSibling.classList.remove('active');
        }
    }
    tabLink.classList.add('active');
    for (const tabContentSibling of tabContentSiblings) {
        if (tabContentSibling.classList.contains('active')) {
            tabContentSibling.classList.remove('active');
        }
    }
    tabContent.classList.add('active');
    if (tabContent.querySelector('.swiper-container')) {
        window.dispatchEvent(new Event('resize'));
    }
};
document.addEventListener('click', e => {
    e.target.closest('.tab-link') && tabsMoveTo(e.target.closest('.tab-link'));
});
document.querySelectorAll('.tab-link.active').forEach(el => tabsMoveTo(el));

const body = document.getElementById('body');
const mainMenuBtn = document.getElementById('header-menu-btn');
const mainMenu = document.getElementById('sideBar');
const mainMenuOverlay = document.getElementById('sidebarOverlay');
if (mainMenu && mainMenuBtn) {
    mainMenuBtn.addEventListener('click', () => {
        body.classList.toggle('stop-scroll');
        mainMenuBtn.classList.toggle('active');
        mainMenu.classList.toggle('active');
    });
    if (mainMenuOverlay) {
        mainMenuOverlay.addEventListener('click', () => {
            mainMenuBtn.classList.remove('active');
            mainMenu.classList.remove('active');
            body.classList.toggle('stop-scroll');
        });
    }
}

const toogleService = document.getElementById('toogleService');
const listService = document.getElementById('listService');
const cart = document.querySelector('.cart');
if(toogleService && listService) {
    toogleService.addEventListener('click', () => {
        listService.classList.toggle('active');
        cart.classList.toggle('active')
    })
}  