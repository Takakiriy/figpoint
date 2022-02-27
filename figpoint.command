
# chmod +x trimming.command
this_script_path="$0"
this_folder="${this_script_path%/*}"
export  NODE_PATH=${this_folder}/node_modules

node ${this_folder}/build/figpoint.js $*
