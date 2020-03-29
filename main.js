let status = 0; //0:stop, 1:start
let time = 0;
let startBtn = document.getElementById("startBtn");
let stopBtn = document.getElementById("stopBtn");
let resetBtn = document.getElementById("resetBtn");
let timerLabel = document.getElementById("timerLabel");

//start
function start() {
    //start
    status = 1;
    //startを押せないようにする
    startBtn.disabled = true;

    timer();
}

//stop
function stop() {
    //stop
    status = 0;
    //startを押せるようにする
    startBtn.disabled = false;
    stopBtn.disabled = true;
    stopBtn.disabled = false;
}

//reset
function reset() {
    //stop
    status = 0;
    //timeを0に戻す
    time = 0;
    //timerLabelをリセット
    timerLabel.innerHTML = '00:00:00';
    //startを押せるようにする
    startBtn.disabled = false;
    resetBtn.disabled = true;
    resetBtn.disabled = false;
}

function timer() {
    //startしている時のみ実行
    if (status === 1) {
        setTimeout(function() {
            time++;

            //時・分・秒を計算
            let hour = Math.floor(time/10/60/60);
            let min = Math.floor(time/10/60);
            let sec = Math.floor(time/10);

            //時が1桁の場合,先頭に0をつける
            if (hour < 10) hour = "0" + hour;

            //分が60分以上の場合,
            if (min >= 60) min = min % 60;

            // 分が１桁の場合,先頭に0をつける
            if (min < 10) min = "0" + min;

            //秒が60秒以上の場合,
            if (sec >= 60) sec = sec % 60;

            // 秒が１桁の場合,先頭に０をつける
            if (sec < 10) sec = "0" + sec;

            //25分後に背景色を変える
            if (min === 25 || min === 55) {
                document.body.style.backgroundColor = "lightgreen";
            }
            else if (min === '00' || min === 30) {
                document.body.style.backgroundColor = "aqua";
            }

            // timerLabelを更新
            timerLabel.innerHTML = hour + ":" + min + ":" + sec;

            // 再びtimer()を呼び出す
            timer();
        }, 100);
    }
}

document.onkeydown = function(event) { 
    if (event) {
        if (event.keyCode == 32 || event.which == 32) {
            if(status == 1) {
                stop();
            } else if (status == 0) {
                start();
            }
        }
    }
}