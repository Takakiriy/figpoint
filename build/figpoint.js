var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import * as fs from 'fs'; // file system
import sharp from 'sharp';
import * as path from "path";
import * as commander from 'commander';
main();
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        commander.program.version('0.1.0')
            .helpOption()
            .argument('<input_image_path>')
            .argument('<x>')
            .argument('<y>')
            .option('-t, --title <s>')
            .option('-p, --pointer <s>', 'The pointer image file path', process.env.FIGPOINT_POINTER)
            .option('--output-folder <s>', 'The output folder path', process.env.FIGPOINT_OUTPUT_FOLDER)
            .parse(process.argv);
        const programArguments = commander.program.args;
        const programOptions = commander.program.opts();
        const inputImagePath = programArguments[0];
        const x = parseInt(programArguments[1]);
        const y = parseInt(programArguments[2]);
        const title = programOptions['title'];
        const pointerFilePath = programOptions.pointer;
        const outputFolderPath = programOptions.outputFolder;
        const inputImage = path.parse(inputImagePath);
        const outputImagePath = (title) ?
            `${outputFolderPath}/${inputImage.name}_${title}_${x}_${y}_${inputImage.ext}` :
            `${outputFolderPath}/${inputImage.name}_${x}_${y}_${inputImage.ext}`;
        const pointer = yield sharp(pointerFilePath).metadata();
        fs.mkdirSync(outputFolderPath, { recursive: true });
        sharp(inputImagePath)
            .composite([{
                input: pointerFilePath,
                left: x - pointer.width / 2,
                top: y - pointer.height / 2,
            }])
            .toFile(outputImagePath);
    });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlncG9pbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvZmlncG9pbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsT0FBTyxLQUFLLEVBQUUsTUFBTSxJQUFJLENBQUMsQ0FBQyxjQUFjO0FBQ3hDLE9BQU8sS0FBSyxNQUFNLE9BQU8sQ0FBQztBQUMxQixPQUFPLEtBQUssSUFBSSxNQUFNLE1BQU0sQ0FBQztBQUM3QixPQUFPLEtBQUssU0FBUyxNQUFNLFdBQVcsQ0FBQztBQUV2QyxJQUFJLEVBQUUsQ0FBQztBQUVQLFNBQWdCLElBQUk7O1FBQ2hCLFNBQVMsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQzthQUM3QixVQUFVLEVBQUU7YUFDWixRQUFRLENBQUMsb0JBQW9CLENBQUM7YUFDOUIsUUFBUSxDQUFDLEtBQUssQ0FBQzthQUNmLFFBQVEsQ0FBQyxLQUFLLENBQUM7YUFDZixNQUFNLENBQUMsaUJBQWlCLENBQUM7YUFDekIsTUFBTSxDQUFDLG1CQUFtQixFQUFFLDZCQUE2QixFQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLENBQUM7YUFDeEYsTUFBTSxDQUFDLHFCQUFxQixFQUFFLHdCQUF3QixFQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsc0JBQXNCLENBQUM7YUFDM0YsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN6QixNQUFPLGdCQUFnQixHQUFHLFNBQVMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDO1FBQ2pELE1BQU8sY0FBYyxHQUFHLFNBQVMsQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDakQsTUFBTyxjQUFjLEdBQUcsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDNUMsTUFBTyxDQUFDLEdBQUcsUUFBUSxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDekMsTUFBTyxDQUFDLEdBQUcsUUFBUSxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDekMsTUFBTyxLQUFLLEdBQUcsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3ZDLE1BQU8sZUFBZSxHQUFHLGNBQWMsQ0FBQyxPQUFPLENBQUM7UUFDaEQsTUFBTyxnQkFBZ0IsR0FBRyxjQUFjLENBQUMsWUFBWSxDQUFDO1FBQ3RELE1BQU8sVUFBVSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsY0FBYyxDQUFDLENBQUM7UUFDL0MsTUFBTyxlQUFlLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQzlCLEdBQUcsZ0JBQWdCLElBQUksVUFBVSxDQUFDLElBQUksSUFBSSxLQUFLLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQztZQUMvRSxHQUFHLGdCQUFnQixJQUFJLFVBQVUsQ0FBQyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUM7UUFDekUsTUFBTyxPQUFPLEdBQUcsTUFBTSxLQUFLLENBQUMsZUFBZSxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDekQsRUFBRSxDQUFDLFNBQVMsQ0FBQyxnQkFBZ0IsRUFBRSxFQUFDLFNBQVMsRUFBRSxJQUFJLEVBQUMsQ0FBQyxDQUFDO1FBRWxELEtBQUssQ0FBQyxjQUFjLENBQUM7YUFDaEIsU0FBUyxDQUFDLENBQUM7Z0JBQ1IsS0FBSyxFQUFFLGVBQWU7Z0JBQ3RCLElBQUksRUFBRSxDQUFDLEdBQUcsT0FBTyxDQUFDLEtBQU0sR0FBRyxDQUFDO2dCQUM1QixHQUFHLEVBQUcsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxNQUFPLEdBQUcsQ0FBQzthQUNoQyxDQUFDLENBQUM7YUFDRixNQUFNLENBQUMsZUFBZSxDQUFDLENBQUM7SUFDakMsQ0FBQztDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgZnMgZnJvbSAnZnMnOyAvLyBmaWxlIHN5c3RlbVxyXG5pbXBvcnQgc2hhcnAgZnJvbSAnc2hhcnAnO1xyXG5pbXBvcnQgKiBhcyBwYXRoIGZyb20gXCJwYXRoXCI7XHJcbmltcG9ydCAqIGFzIGNvbW1hbmRlciBmcm9tICdjb21tYW5kZXInO1xyXG5cclxubWFpbigpO1xyXG5cclxuYXN5bmMgZnVuY3Rpb24gIG1haW4oKSB7XHJcbiAgICBjb21tYW5kZXIucHJvZ3JhbS52ZXJzaW9uKCcwLjEuMCcpXHJcbiAgICAgICAgLmhlbHBPcHRpb24oKVxyXG4gICAgICAgIC5hcmd1bWVudCgnPGlucHV0X2ltYWdlX3BhdGg+JylcclxuICAgICAgICAuYXJndW1lbnQoJzx4PicpXHJcbiAgICAgICAgLmFyZ3VtZW50KCc8eT4nKVxyXG4gICAgICAgIC5vcHRpb24oJy10LCAtLXRpdGxlIDxzPicpXHJcbiAgICAgICAgLm9wdGlvbignLXAsIC0tcG9pbnRlciA8cz4nLCAnVGhlIHBvaW50ZXIgaW1hZ2UgZmlsZSBwYXRoJywgcHJvY2Vzcy5lbnYuRklHUE9JTlRfUE9JTlRFUilcclxuICAgICAgICAub3B0aW9uKCctLW91dHB1dC1mb2xkZXIgPHM+JywgJ1RoZSBvdXRwdXQgZm9sZGVyIHBhdGgnLCBwcm9jZXNzLmVudi5GSUdQT0lOVF9PVVRQVVRfRk9MREVSKVxyXG4gICAgICAgIC5wYXJzZShwcm9jZXNzLmFyZ3YpO1xyXG4gICAgY29uc3QgIHByb2dyYW1Bcmd1bWVudHMgPSBjb21tYW5kZXIucHJvZ3JhbS5hcmdzO1xyXG4gICAgY29uc3QgIHByb2dyYW1PcHRpb25zID0gY29tbWFuZGVyLnByb2dyYW0ub3B0cygpO1xyXG4gICAgY29uc3QgIGlucHV0SW1hZ2VQYXRoID0gcHJvZ3JhbUFyZ3VtZW50c1swXTtcclxuICAgIGNvbnN0ICB4ID0gcGFyc2VJbnQocHJvZ3JhbUFyZ3VtZW50c1sxXSk7XHJcbiAgICBjb25zdCAgeSA9IHBhcnNlSW50KHByb2dyYW1Bcmd1bWVudHNbMl0pO1xyXG4gICAgY29uc3QgIHRpdGxlID0gcHJvZ3JhbU9wdGlvbnNbJ3RpdGxlJ107XHJcbiAgICBjb25zdCAgcG9pbnRlckZpbGVQYXRoID0gcHJvZ3JhbU9wdGlvbnMucG9pbnRlcjtcclxuICAgIGNvbnN0ICBvdXRwdXRGb2xkZXJQYXRoID0gcHJvZ3JhbU9wdGlvbnMub3V0cHV0Rm9sZGVyO1xyXG4gICAgY29uc3QgIGlucHV0SW1hZ2UgPSBwYXRoLnBhcnNlKGlucHV0SW1hZ2VQYXRoKTtcclxuICAgIGNvbnN0ICBvdXRwdXRJbWFnZVBhdGggPSAodGl0bGUpID9cclxuICAgICAgICBgJHtvdXRwdXRGb2xkZXJQYXRofS8ke2lucHV0SW1hZ2UubmFtZX1fJHt0aXRsZX1fJHt4fV8ke3l9XyR7aW5wdXRJbWFnZS5leHR9YCA6XHJcbiAgICAgICAgYCR7b3V0cHV0Rm9sZGVyUGF0aH0vJHtpbnB1dEltYWdlLm5hbWV9XyR7eH1fJHt5fV8ke2lucHV0SW1hZ2UuZXh0fWA7XHJcbiAgICBjb25zdCAgcG9pbnRlciA9IGF3YWl0IHNoYXJwKHBvaW50ZXJGaWxlUGF0aCkubWV0YWRhdGEoKTtcclxuICAgIGZzLm1rZGlyU3luYyhvdXRwdXRGb2xkZXJQYXRoLCB7cmVjdXJzaXZlOiB0cnVlfSk7XHJcblxyXG4gICAgc2hhcnAoaW5wdXRJbWFnZVBhdGgpXHJcbiAgICAgICAgLmNvbXBvc2l0ZShbe1xyXG4gICAgICAgICAgICBpbnB1dDogcG9pbnRlckZpbGVQYXRoLFxyXG4gICAgICAgICAgICBsZWZ0OiB4IC0gcG9pbnRlci53aWR0aCEgLyAyLFxyXG4gICAgICAgICAgICB0b3A6ICB5IC0gcG9pbnRlci5oZWlnaHQhIC8gMixcclxuICAgICAgICB9XSlcclxuICAgICAgICAudG9GaWxlKG91dHB1dEltYWdlUGF0aCk7XHJcbn1cclxuIl19