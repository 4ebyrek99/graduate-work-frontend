// eslint-disable-next-line no-undef
module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:vue/vue3-essential"
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "vue"
    ],
    "rules": {
        "indent": [
            "error",
            4
        ],
        "linebreak-style": [
            "error",
            "windows"
        ],
        "quotes": [
            "error",
            "double",
            { allowTemplateLiterals: true }
        ],
        "semi": [
            "error",
            "never"
        ],
        "no-unused-vars": ["warn"],

        // Vue
        "vue/multi-word-component-names": ["off"],
        "vue/html-indent": ["error", 4],
        "vue/component-name-in-template-casing": ["error", "PascalCase", {
            registeredComponentsOnly: true
        }],
        "vue/attribute-hyphenation": ["error", "always"],
        "vue/html-quotes": ["error", "double"],
        "vue/max-attributes-per-line": ["error",],
        "vue/first-attribute-linebreak": ["error"],
        "vue/html-closing-bracket-newline": ["error"],
        "vue/html-closing-bracket-spacing": ["error"],
        "vue/no-multi-spaces": ["error"],
        "vue/prop-name-casing": ["error", "camelCase"],
        "vue/require-default-prop": ["off"],
        "vue/require-prop-types": ["off"],
        "vue/singleline-html-element-content-newline": ["off"],
        "vue/this-in-template": ["warn", "never"],
        "vue/match-component-file-name": ["warn", {extensions: ["vue"]}],
        "vue/no-multiple-objects-in-class": ["error"],
        "vue/no-static-inline-styles": ["warn"],
        "vue/no-useless-mustaches": ["error"],
        "vue/no-useless-v-bind": ["error"],
        "vue/padding-line-between-blocks": ["error", "always"]
    }
}
