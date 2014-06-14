/// <reference path="../../definitions/jquery.d.ts" />

module Hachisch {

    export class App {

        constructor() {
            this.show();
        }

        private show() {
            if(/view=show/.test(location.hash)) {
                $('#test').removeClass('hide');
            }
        }

    }

    new App();

}
