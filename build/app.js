var Hachisch;
(function (Hachisch) {
    var App = (function () {
        function App() {
            this.show();
        }
        App.prototype.show = function () {
            if (/view=show/.test(location.hash)) {
                $('#test').removeClass('hide');
            }
        };
        return App;
    })();
    Hachisch.App = App;

    new App();
})(Hachisch || (Hachisch = {}));
//# sourceMappingURL=app.js.map
