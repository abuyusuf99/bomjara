const bomjara = {
    name: "Василий",
    inventory:{
        money: 27,
        bottles: 0
    },
    meal: 40,
    stamina: 60,

    
    buy: function(){
        if(this.inventory.money < 4){
            console.log('У меня нет денег')

        }
        if(this.meal < 100){
        this.inventory.money-=4
        this.meal+=5
        this.stamina++
        }
    },
    sell: function(number){
        this.inventory.bottles-=number
        this.inventory.money+=number
    },
    searchBottles: function(){
        this.inventory.bottles+=4
        this.stamina-=5
        },

    sleep: function(){
    if(this.stamina === 100){
        console.log("Я не хочу спать")
    }
    else{
        this.stamina+=50
        this.meal-=10
    }
    },
    status: function(){
        console.log(`Имя:${this.name} Деньги:${this.inventory.money} Еда:${this.meal} Выносливость: ${this.stamina} Бутылки:${this.inventory.bottles}`)
           },
           
}
bomjara.buy()
bomjara.buy()
bomjara.buy()
bomjara.searchBottles()
bomjara.searchBottles()
bomjara.sell(5)
bomjara.status()