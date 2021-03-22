class myDate{
    constructor(_day,_month,_year) {
        this.day=_day;
        this.month=_month;
        this.year=_year;
    }
    getday(){
        return this.day;
    }
    getmonth(){
        return this.month;
    }
    getyear(){
        return this.year;
    }
}
let date = new myDate(2,2,2007);
console.log(date);

