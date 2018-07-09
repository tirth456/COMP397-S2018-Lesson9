var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Scenes;
(function (Scenes) {
    var Play = /** @class */ (function (_super) {
        __extends(Play, _super);
        // constructors
        function Play() {
            var _this = _super.call(this) || this;
            _this.Start();
            return _this;
        }
        // private methods
        // public methods
        Play.prototype.Start = function () {
            console.log("%c Starting Start Scene", "font-style:italic; font-size:20px;");
            this._playLabel = new objects.Label("Welcome!", "60px", "Consolas", "#000000", 320, 200, true);
            this._nextButton = new objects.Button("NextButton", 320, 300, true);
            this.Main();
        };
        Play.prototype.Update = function () {
        };
        Play.prototype.Reset = function () {
        };
        Play.prototype.Main = function () {
            this.addChild(this._nextButton);
            this.addChild(this._playLabel);
            this._nextButton.on("click", function () {
                this._playLabel.text = "Clicked!";
            }, this);
        };
        return Play;
    }(objects.Scene));
    Scenes.Play = Play;
})(Scenes || (Scenes = {}));
//# sourceMappingURL=play.js.map