function getShippingCost(country) {
    let message
    switch (country) {
        case 'China':
            message = 100;
            break
        case 'Chile':
            message = 250;
            break
        case 'Australia':
            message = 170;
            break
        case 'Jamaica':
            message = 120;
            break
        default:
            message = 'Sorry, there is no delivery to your country';
    }

    if (typeof message === 'number') {
        return `Shipping to ${country} will cost ${message} credits`;
    } else {
        return message;
    }
}

console.log(getShippingCost("Australia")); // "Shipping to Australia will cost 170 credits"
console.log(getShippingCost("Germany")); // "Sorry, there is no delivery to your country"
console.log(getShippingCost("China")); // "Shipping to China will cost 100 credits"
console.log(getShippingCost("Chile")); // "Shipping to Chile will cost 250 credits"
console.log(getShippingCost("Jamaica")); // "Shipping to Jamaica will cost 120 credits"
console.log(getShippingCost("Sweden")); // "Sorry, there is no delivery to your country"
