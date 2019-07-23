module.exports = {
    presets: ['module:metro-react-native-babel-preset'],
    plugins: [
        ['@babel/plugin-proposal-decorators', { legacy: true }],
        ['@babel/plugin-proposal-class-properties', { loose: true }],
        [
            'module-resolver',
            {
                root: ['./src'],
                extensions: ['.js', '.json', '.ts', '.tsx'],
            },
        ],
    ],
};
