@cc.RegisterComponent
class HelloWorld extends cc.Component {
    @cc.Property(cc.Label)
    label: cc.Label;

    @cc.Property('Hello, World!')
    text: string;

    @cc.Property(cc.EditBox)
    editbox: cc.EditBox;
    
    fromTypescript = ' From typescript!';

    onLoad() {
        this.label.string = this.text + this.fromTypescript;
        this.editbox.string = 'editbox';
    }

    update() {
    }

    onButtonClick() {
        console.log(`editbox.string = ${this.editbox.string}`);
    }
}
