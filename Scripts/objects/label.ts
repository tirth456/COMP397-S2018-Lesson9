namespace objects {
  export class Label extends createjs.Text {
    // member variables
    public isCentered: boolean;
    public width: number;
    public height: number;
    public halfWidth: number;
    public halfHeight: number;

    // Constructors

    /**
     * Creates an instance of Label.
     * @param {string} text
     * @param {string} fontSize
     * @param {string} fontFamily
     * @param {string} fontColour
     * @param {number} [x=0]
     * @param {number} [y=0]
     * @param {boolean} [isCentered=false]
     * @memberof Label
     */
    constructor(
      text: string,
      fontSize: string,
      fontFamily: string,
      fontColour: string,
      x: number = 0,
      y: number = 0,
      isCentered: boolean = false
    ) {
      super(text, fontSize + " " + fontFamily, fontColour);

      this.isCentered = isCentered;

      this._initialize(); // intialize class member variables

      if (isCentered) {
        this.regX = this.halfWidth;
        this.regY = this.halfHeight;
      }

      this.x = x;
      this.y = y;
    }

    /**
     * This method initializes class member variables
     *
     * @private
     * @memberof Label
     * @returns {void}
     */
    private _initialize(): void {
      this.width = this.getBounds().width;
      this.height = this.getBounds().height;
      this.halfWidth = this.width * 0.5;
      this.halfHeight = this.height * 0.5;
    }

    public Start(): void {}

    public update(): void {}
  }
}
