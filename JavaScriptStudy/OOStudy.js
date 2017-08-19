/**
 * Created by ender on 2017/6/9.
 */

var book = {
    _year: 2004,
    edition: 1
}

Object.defineProperty(book, "year", {
    get: function () {
        return this._year;
    },
    set: function (newYear) {
        if (newYear > 2004) {
            this._year = newYear;
            this.edition = newYear - 2004;
        }
    }
});

book.year = 2006;
console.log(book.edition);