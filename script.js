// http://api.weatherapi.com/v1/current.json?key=8ae7d154679e4ff1baa181405241009&q=Mumbai&aqi=no

let target = 'Patna'

const fetchResults = async (targetLocation) => {
    let url = `http://api.weatherapi.com/v1/current.json?key=8ae7d154679e4ff1baa181405241009&q=${targetLocation}&aqi=no`

    const res = await fetch(url)

    const data = await res.json()

    console.log(data)
}

fetchResults(target)

