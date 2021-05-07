new Vue({
    el:"#app1",
    data: {
        bpi: null
},
filters: {
    currency_decimal(value){
        return value.toFixed(2)
    }
},
mounted: function(){
    axios.get("https://api.coindesk.com/v1/bpi/currentprice.json")
    .then(response => (this.bpi = response.data.bpi))
    .catch(error => {console.log(error))
    }

    })