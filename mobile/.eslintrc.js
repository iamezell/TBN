module.exports = {
    "extends": "airbnb",
    "parser": "babel-eslint",
    "plugins": [
        "react",
        "jsx-a11y",
        "import"
    ],
    "rules": {
        "react/jsx-filename-extension": ["error", { "extensions": [".js", ".jsx"] }]
    },
    "env": {
        "es6": true
    }
};