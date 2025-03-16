export async function fetchProductData() {
    return {
        name: 'Мереживна накидка',
        image: 'https://musegarden.store/image/catalog/01032024/nezalu%20/peach/k%20(19).jpg',
        description: [
            'Якісний гіпоалергенний матеріал',
            'Вирівнювання, приховування недоліків',
            'Акція: -50 грн на другу покупку',
        ],
        discountTimer: {
            hours: 15,
            minutes: 23,
            seconds: 15,
        },
        prices: {
            regular: '275 грн',
            discounted: '249 грн',
        },
    };
}