import webpack from 'webpack';
import webpackConfig from '../webpack.config';
import chalk from 'chalk';

const bundler = webpack(webpackConfig);

bundler.run((err, stats) => {

    if (err) {
        console.log(chalk.red(err));
        return 1;
    }

    let jsonStats = stats.toJson();
    
    if (jsonStats.hasErrors) {
        console.log(chalk.red("ERRORS:"));
        jsonStats.errors.map((error) => console.log(error));
    }

    if (jsonStats.hasWarnings) {
        console.log(chalk.yellow("WARNINGS:"));
        jsonStats.warnings.map((warning) => console.log(warning));
    }

    console.log(chalk.green("Build completed in ./build..."));
});