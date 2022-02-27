var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import * as child_process from 'child_process';
const scriptPath = '../build/figpoint.js';
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        yield callChildProccess(`node ${scriptPath} ../test/figure_1.png  404 70  ` +
            `--pointer ../test/pointer_100x100.png ` +
            `--output-folder ../_output `);
    });
}
// callChildProccess
function callChildProccess(commandLine, option) {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise((resolveFunction, rejectFunction) => __awaiter(this, void 0, void 0, function* () {
            const returnValue = new ProcessReturns();
            try {
                const childProcess = child_process.exec(commandLine, 
                // on close the "childProcess" (2)
                (error, stdout, stderr) => {
                    returnValue.stdout = stdout;
                    returnValue.stderr = stderr;
                    resolveFunction(returnValue);
                });
                if (option && childProcess.stdin) {
                    if (option.inputLines) {
                        yield new Promise(resolve => setTimeout(resolve, 300));
                        for (const inputLine of option.inputLines) {
                            console.log(inputLine);
                            childProcess.stdin.write(inputLine + "\n");
                            yield new Promise(resolve => setTimeout(resolve, 200));
                        }
                    }
                    childProcess.stdin.end();
                }
                // on close the "childProcess" (1)
                childProcess.on('close', (exitCode) => {
                    returnValue.exitCode = exitCode;
                });
                childProcess.on('exit', (exitCode) => {
                    returnValue.exitCode = exitCode;
                });
            }
            catch (e) {
                throw Error(`Error in the command line ${commandLine}`);
            }
        }));
    });
}
// ProcessOption
class ProcessOption {
}
// ProcessReturns
class ProcessReturns {
    constructor() {
        this.exitCode = 0;
        this.stdout = '';
        this.stderr = '';
    }
}
main();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlncG9pbnRfdGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9maWdwb2ludF90ZXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLE9BQU8sS0FBSyxhQUFhLE1BQU0sZUFBZSxDQUFDO0FBRS9DLE1BQU8sVUFBVSxHQUFHLHNCQUFzQixDQUFDO0FBRTNDLFNBQWdCLElBQUk7O1FBQ25CLE1BQU0saUJBQWlCLENBQUMsUUFBUSxVQUFVLGlDQUFpQztZQUMxRSx3Q0FBd0M7WUFDeEMsNkJBQTZCLENBQUMsQ0FBQztJQUNqQyxDQUFDO0NBQUE7QUFFRCxvQkFBb0I7QUFDcEIsU0FBZ0IsaUJBQWlCLENBQUMsV0FBbUIsRUFBRyxNQUFzQjs7UUFDN0UsT0FBUyxJQUFJLE9BQU8sQ0FBRSxDQUFPLGVBQWUsRUFBRSxjQUFjLEVBQUUsRUFBRTtZQUMvRCxNQUFPLFdBQVcsR0FBRyxJQUFJLGNBQWMsRUFBRSxDQUFDO1lBQzFDLElBQUk7Z0JBQ0gsTUFBTyxZQUFZLEdBQUcsYUFBYSxDQUFDLElBQUksQ0FBRSxXQUFXO2dCQUVwRCxrQ0FBa0M7Z0JBQ2xDLENBQUMsS0FBeUMsRUFBRSxNQUFjLEVBQUUsTUFBYyxFQUFFLEVBQUU7b0JBQzdFLFdBQVcsQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO29CQUM1QixXQUFXLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztvQkFDNUIsZUFBZSxDQUFDLFdBQVcsQ0FBQyxDQUFDO2dCQUM5QixDQUFDLENBQ0QsQ0FBQztnQkFDRixJQUFJLE1BQU0sSUFBSSxZQUFZLENBQUMsS0FBSyxFQUFFO29CQUVqQyxJQUFJLE1BQU0sQ0FBQyxVQUFVLEVBQUU7d0JBQ3RCLE1BQU0sSUFBSSxPQUFPLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxVQUFVLENBQUMsT0FBTyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUM7d0JBQ3ZELEtBQUssTUFBTSxTQUFTLElBQUksTUFBTSxDQUFDLFVBQVUsRUFBRTs0QkFDMUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQzs0QkFDdkIsWUFBWSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxDQUFDOzRCQUMzQyxNQUFNLElBQUksT0FBTyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsVUFBVSxDQUFDLE9BQU8sRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDO3lCQUN2RDtxQkFDRDtvQkFDRCxZQUFZLENBQUMsS0FBSyxDQUFDLEdBQUcsRUFBRSxDQUFDO2lCQUN6QjtnQkFFRCxrQ0FBa0M7Z0JBQ2xDLFlBQVksQ0FBQyxFQUFFLENBQUMsT0FBTyxFQUFFLENBQUMsUUFBZ0IsRUFBRSxFQUFFO29CQUM3QyxXQUFXLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztnQkFDakMsQ0FBQyxDQUFDLENBQUM7Z0JBQ0gsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxRQUFnQixFQUFFLEVBQUU7b0JBQzVDLFdBQVcsQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO2dCQUNqQyxDQUFDLENBQUMsQ0FBQzthQUNIO1lBQUMsT0FBTyxDQUFDLEVBQUU7Z0JBQ1gsTUFBTSxLQUFLLENBQUMsNkJBQTZCLFdBQVcsRUFBRSxDQUFDLENBQUM7YUFDeEQ7UUFDRixDQUFDLENBQUEsQ0FBQyxDQUFDO0lBQ0osQ0FBQztDQUFBO0FBRUQsZ0JBQWdCO0FBQ2hCLE1BQU0sYUFBYTtDQUVsQjtBQUVELGlCQUFpQjtBQUNqQixNQUFNLGNBQWM7SUFBcEI7UUFDQyxhQUFRLEdBQVcsQ0FBQyxDQUFDO1FBQ3JCLFdBQU0sR0FBVyxFQUFFLENBQUM7UUFDcEIsV0FBTSxHQUFXLEVBQUUsQ0FBQztJQUNyQixDQUFDO0NBQUE7QUFFRCxJQUFJLEVBQUUsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGNoaWxkX3Byb2Nlc3MgZnJvbSAnY2hpbGRfcHJvY2Vzcyc7XHJcblxyXG5jb25zdCAgc2NyaXB0UGF0aCA9ICcuLi9idWlsZC9maWdwb2ludC5qcyc7XHJcblxyXG5hc3luYyBmdW5jdGlvbiAgbWFpbigpIHtcclxuXHRhd2FpdCBjYWxsQ2hpbGRQcm9jY2Vzcyhgbm9kZSAke3NjcmlwdFBhdGh9IC4uL3Rlc3QvZmlndXJlXzEucG5nICA0MDQgNzAgIGAgK1xyXG5cdFx0YC0tcG9pbnRlciAuLi90ZXN0L3BvaW50ZXJfMTAweDEwMC5wbmcgYCArXHJcblx0XHRgLS1vdXRwdXQtZm9sZGVyIC4uL19vdXRwdXQgYCk7XHJcbn1cclxuXHJcbi8vIGNhbGxDaGlsZFByb2NjZXNzXHJcbmFzeW5jIGZ1bmN0aW9uICBjYWxsQ2hpbGRQcm9jY2Vzcyhjb21tYW5kTGluZTogc3RyaW5nLCAgb3B0aW9uPzogUHJvY2Vzc09wdGlvbik6IFByb21pc2U8UHJvY2Vzc1JldHVybnM+IHtcclxuXHRyZXR1cm4gICBuZXcgUHJvbWlzZSggYXN5bmMgKHJlc29sdmVGdW5jdGlvbiwgcmVqZWN0RnVuY3Rpb24pID0+IHtcclxuXHRcdGNvbnN0ICByZXR1cm5WYWx1ZSA9IG5ldyBQcm9jZXNzUmV0dXJucygpO1xyXG5cdFx0dHJ5IHtcclxuXHRcdFx0Y29uc3QgIGNoaWxkUHJvY2VzcyA9IGNoaWxkX3Byb2Nlc3MuZXhlYyggY29tbWFuZExpbmUsXHJcblxyXG5cdFx0XHRcdC8vIG9uIGNsb3NlIHRoZSBcImNoaWxkUHJvY2Vzc1wiICgyKVxyXG5cdFx0XHRcdChlcnJvcjogY2hpbGRfcHJvY2Vzcy5FeGVjRXhjZXB0aW9uIHwgbnVsbCwgc3Rkb3V0OiBzdHJpbmcsIHN0ZGVycjogc3RyaW5nKSA9PiB7XHJcblx0XHRcdFx0XHRyZXR1cm5WYWx1ZS5zdGRvdXQgPSBzdGRvdXQ7XHJcblx0XHRcdFx0XHRyZXR1cm5WYWx1ZS5zdGRlcnIgPSBzdGRlcnI7XHJcblx0XHRcdFx0XHRyZXNvbHZlRnVuY3Rpb24ocmV0dXJuVmFsdWUpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0KTtcclxuXHRcdFx0aWYgKG9wdGlvbiAmJiBjaGlsZFByb2Nlc3Muc3RkaW4pIHtcclxuXHJcblx0XHRcdFx0aWYgKG9wdGlvbi5pbnB1dExpbmVzKSB7XHJcblx0XHRcdFx0XHRhd2FpdCBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHNldFRpbWVvdXQocmVzb2x2ZSwgMzAwKSk7XHJcblx0XHRcdFx0XHRmb3IgKGNvbnN0IGlucHV0TGluZSBvZiBvcHRpb24uaW5wdXRMaW5lcykge1xyXG5cdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhpbnB1dExpbmUpO1xyXG5cdFx0XHRcdFx0XHRjaGlsZFByb2Nlc3Muc3RkaW4ud3JpdGUoaW5wdXRMaW5lICsgXCJcXG5cIik7XHJcblx0XHRcdFx0XHRcdGF3YWl0IG5ldyBQcm9taXNlKHJlc29sdmUgPT4gc2V0VGltZW91dChyZXNvbHZlLCAyMDApKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0Y2hpbGRQcm9jZXNzLnN0ZGluLmVuZCgpO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHQvLyBvbiBjbG9zZSB0aGUgXCJjaGlsZFByb2Nlc3NcIiAoMSlcclxuXHRcdFx0Y2hpbGRQcm9jZXNzLm9uKCdjbG9zZScsIChleGl0Q29kZTogbnVtYmVyKSA9PiB7XHJcblx0XHRcdFx0cmV0dXJuVmFsdWUuZXhpdENvZGUgPSBleGl0Q29kZTtcclxuXHRcdFx0fSk7XHJcblx0XHRcdGNoaWxkUHJvY2Vzcy5vbignZXhpdCcsIChleGl0Q29kZTogbnVtYmVyKSA9PiB7XHJcblx0XHRcdFx0cmV0dXJuVmFsdWUuZXhpdENvZGUgPSBleGl0Q29kZTtcclxuXHRcdFx0fSk7XHJcblx0XHR9IGNhdGNoIChlKSB7XHJcblx0XHRcdHRocm93IEVycm9yKGBFcnJvciBpbiB0aGUgY29tbWFuZCBsaW5lICR7Y29tbWFuZExpbmV9YCk7XHJcblx0XHR9XHJcblx0fSk7XHJcbn1cclxuXHJcbi8vIFByb2Nlc3NPcHRpb25cclxuY2xhc3MgUHJvY2Vzc09wdGlvbiB7XHJcblx0aW5wdXRMaW5lcz86IHN0cmluZ1tdO1xyXG59XHJcblxyXG4vLyBQcm9jZXNzUmV0dXJuc1xyXG5jbGFzcyBQcm9jZXNzUmV0dXJucyB7XHJcblx0ZXhpdENvZGU6IG51bWJlciA9IDA7XHJcblx0c3Rkb3V0OiBzdHJpbmcgPSAnJztcclxuXHRzdGRlcnI6IHN0cmluZyA9ICcnO1xyXG59XHJcblxyXG5tYWluKCk7Il19