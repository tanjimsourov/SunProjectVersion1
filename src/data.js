
const data = [
    {
        title: 'Daily yield',
    },
    {
        title: 'Monthly yield',
    },
    {
        title: 'Annual yield',
    }
]

const frData = [
    {
        title: 'Rendement du jour',
    },
    {
        title: 'Rendement mensuel',
    },
    {
        title: 'Rendement annuel',
    }
]

const NlData = [
    {
        title: 'Dagopbrengst',
    },
    {
        title: 'Maandopbrengst',
    },
    {
        title: 'Jaaropbrengst',
    }
]

const product1 = [
    {
        price: 8.618,
        img: '/assets/imgs/fridge.png'
    },
    {
        price: 5.387,
        img: '/assets/imgs/washingMachine.png'
    },
    {
        price: 2.122,
        img: '/assets/imgs/table-fan.png'
    },
    {
        price: 120,
        img: '/assets/imgs/stove.png'
    }
]

const product2 = [

    {
        q: '109.879 l',
        title: "Fuel oil",
        img: '/assets/imgs/stookolie.png'
    },
    {
        q: `159.321 m3;`,
        title: 'Natural Gas',
        img: '/assets/imgs/Aardgas.png'
    },
    {
        q: '113 t',
        title: 'Coal',
        img: '/assets/imgs/Steenkool.png'
    }

]
const productNL = [

    {
        q: '109.879 l',
        title: "Stookolie",
        img: '/assets/imgs/stookolie.png'
    },
    {
        q: `159.321 m3;`,
        title: 'Aardgas',
        img: '/assets/imgs/Aardgas.png'
    },
    {
        q: '113 t',
        title: 'Steenkool',
        img: '/assets/imgs/Steenkool.png'
    }

]
const productFR = [

    {
        q: '109.879 l',
        title: "Mazout",
        img: '/assets/imgs/stookolie.png'
    },
    {
        q: `159.321 m3;`,
        title: 'Gaz Naturel',
        img: '/assets/imgs/Aardgas.png'
    },
    {
        q: '113 t',
        title: 'Coal',
        img: '/assets/imgs/Steenkool.png'
    }

]


export function getProduct2(){
    return product2;
}

export function getProductNL(){
    return productNL;
}
export function getProductFR(){
    return productFR;
}

export function getProduct1(){
    return product1;
}

export function getFrData(){
    return frData;
}

export function getNlData(){
    return NlData;
}

export function getData(){
    return data;
}