import * as fs from 'fs'; // file system
import sharp from 'sharp';
import * as path from "path";
import * as commander from 'commander';

main();

async function  main() {
    commander.program.version('0.1.0')
        .helpOption()
        .argument('<input_image_path>')
        .argument('<x>')
        .argument('<y>')
        .option('-t, --title <s>')
        .option('-p, --pointer <s>', 'The pointer image file path', process.env.FIGPOINT_POINTER)
        .option('--output-folder <s>', 'The output folder path', process.env.FIGPOINT_OUTPUT_FOLDER)
        .parse(process.argv);
    const  programArguments = commander.program.args;
    const  programOptions = commander.program.opts();
    const  inputImagePath = programArguments[0];
    const  x = parseInt(programArguments[1]);
    const  y = parseInt(programArguments[2]);
    const  title = programOptions['title'];
    const  pointerFilePath = programOptions.pointer;
    const  outputFolderPath = programOptions.outputFolder;
    const  inputImage = path.parse(inputImagePath);
    const  outputImagePath = (title) ?
        `${outputFolderPath}/${inputImage.name}_${title}_${x}_${y}_${inputImage.ext}` :
        `${outputFolderPath}/${inputImage.name}_${x}_${y}_${inputImage.ext}`;
    const  pointer = await sharp(pointerFilePath).metadata();
    fs.mkdirSync(outputFolderPath, {recursive: true});

    sharp(inputImagePath)
        .composite([{
            input: pointerFilePath,
            left: x - pointer.width! / 2,
            top:  y - pointer.height! / 2,
        }])
        .toFile(outputImagePath);
}
