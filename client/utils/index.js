import calculateDistance from "./distance.js"
import calculateSuggestedPrice from "./ride-price-suggestion.js"
import getGasPrice from "./gas-price.js"
async function main() {
    let gasPrice = await getGasPrice("OH");
    let distance = await calculateDistance("11025%20NE%208th%20St%20Bellevue%20WA","700%20Bellevue%20Way%20NE%20Bellevue WA");
    let price = calculateSuggestedPrice(distance,gasPrice)
    console.log(price)
}
main()
