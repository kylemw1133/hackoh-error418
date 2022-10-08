export default function calculateSuggestedPrice(miles, avgGasPrice) {
    //TODO: use past rides in area to compute estimated price
    let gasMileage = 20;
    let appFeePercent = .05
    let definitiveCost = (miles/gasMileage)*avgGasPrice
    let driverFee = definitiveCost*5
    let appFee = appFeePercent*(driverFee+definitiveCost)
    let estimatedPrice = definitiveCost+driverFee+appFee
    let priceObj = {
        "driverFee":driverFee,
        "appFee": appFee,
        "totalPrice": estimatedPrice

    }
    return priceObj
}
