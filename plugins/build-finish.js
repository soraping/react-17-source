class BuileFinishPlugin {
    constructor(options) {
        this.options = options;
    }
    apply(compiler){
        console.log('compiler ----- options:', this.options);
    }
}

module.exports = BuileFinishPlugin