var chalk = require('chalk');

var Tool = {};
// ============== log function ===================
// type can choose 'module/unit/err'
Tool.log = function(type, msg){
    if(msg === undefined){
        // 默认可以省略type参数
        msg = type;
        type = 'default';
    }

    switch(type){
        case 'module':
            msg = '# ' + chalk.cyan(msg);
            break;
        case 'unit':
            msg = '+ ' + chalk.magenta(msg);
            break;
        case 'err':
            msg = '\`' + chalk.red(msg) + '\`';
            break;
        case 'single':
            msg = ' - ' + msg;
            break;
        default:
            msg = '\`\`\`' + chalk.white(msg) + '\`\`\`';
            break;
    }

    console.log(msg);
};

// ============= show raw string ==================
// showRaw can choose true/false , if show raw string
Tool.showRaw = function(showRaw, msg){
    // 函数只传入一个参数则这个参数为msg
    if(msg === undefined){
        msg =showRaw;
        showRaw = false;
    }

    if(showRaw){
        msg += msg.replace(/\$/, '\\$')
                 .replace(/\{/, '\\{')
                 .replace(/\}/, '\\}');
    }

    return msg;
};

module.exports = Tool;