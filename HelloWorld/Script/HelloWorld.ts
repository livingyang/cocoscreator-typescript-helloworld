@cc.RegisterComponent
class HelloWorld extends cc.Component {
    @cc.Property(cc.Label)
    label: cc.Label;

    @cc.Property('Hello, World!')
    text: string;

    fromTypescript = ' From typescript!';

    onLoad() {
        this.label.string = this.text + this.fromTypescript;
    }

    update() {
    }
}
