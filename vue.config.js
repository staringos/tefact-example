// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path')

function resolve (dir) {
    return path.join(__dirname, dir)
}

module.exports = {
    chainWebpack: config => {
        console.log("chainWebpack");

        const types = ['vue-modules', 'vue', 'normal-modules', 'normal']
        types.forEach(type => addStyleResource(config.module.rule('scss').oneOf(type)))

        config.resolve.alias
            .set('TEFACT_EDITOR', resolve('./node_modules/@tefact/editor/src'))
    },
}

function addStyleResource (rule) {
    rule.use('style-resource')
        .loader('style-resources-loader')
        .options({
            patterns: [
                path.resolve(__dirname, './src/assets/style/variable.scss'),
            ],
        })
}