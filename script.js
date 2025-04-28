// 音乐播放器逻辑
let playlist = [
    { title: 'Counting Stars', url: 'music/1.mp3' },
    { title: 'Life Force', url: 'music/2.mp3' },
    { title: 'Chess', url: 'music/3.mp3' }
];

let currentTrack = 0;
let isPlaying = false;
const audio = new Audio();

function togglePlay() {
    const playPauseBtn = document.getElementById('playPauseBtn');
    const nowPlaying = document.getElementById('now-playing');
    const errorMessage = document.getElementById('error-message');
    const retryBtn = document.getElementById('retryBtn');
    
    if (isPlaying) {
        audio.pause();
        playPauseBtn.textContent = '▶';
        nowPlaying.textContent = '已暂停';
        isPlaying = false;
    } else {
        try {
            errorMessage.style.display = 'none';
            retryBtn.style.display = 'none';
            audio.src = playlist[currentTrack].url;
            audio.play().then(() => {
                playPauseBtn.textContent = '⏸';
                nowPlaying.textContent = '正在播放: ' + playlist[currentTrack].title;
                isPlaying = true;
            }).catch(error => {
                console.error('播放错误:', error);
                nowPlaying.textContent = '播放出错: ' + error.message;
                errorMessage.style.display = 'inline';
                retryBtn.style.display = 'inline';
                isPlaying = false;
            });
        } catch (error) {
            nowPlaying.textContent = '播放出错';
            errorMessage.style.display = 'inline';
            retryBtn.style.display = 'inline';
        }
    }
}

function nextTrack() {
    currentTrack = (currentTrack + 1) % playlist.length;
    if (isPlaying) {
        togglePlay();
        togglePlay();
    } else {
        audio.src = playlist[currentTrack].url;
        document.getElementById('now-playing').textContent = '准备播放: ' + playlist[currentTrack].title;
    }
}

function previousTrack() {
    currentTrack = (currentTrack - 1 + playlist.length) % playlist.length;
    if (isPlaying) {
        togglePlay();
        togglePlay();
    } else {
        audio.src = playlist[currentTrack].url;
        document.getElementById('now-playing').textContent = '准备播放: ' + playlist[currentTrack].title;
    }
}

function retryLoadMusic() {
    const errorMessage = document.getElementById('error-message');
    const retryBtn = document.getElementById('retryBtn');
    const nowPlaying = document.getElementById('now-playing');
    
    errorMessage.style.display = 'none';
    retryBtn.style.display = 'none';
    nowPlaying.textContent = '正在加载...';
    
    // 完全重置音频对象
    audio.pause();
    audio.currentTime = 0;
    audio.src = playlist[currentTrack].url;
    audio.load();
    
    // 添加加载事件监听
    audio.onloadeddata = function() {
        togglePlay();
    };
    
    // 添加错误处理
    audio.onerror = function() {
        nowPlaying.textContent = '加载失败: ' + playlist[currentTrack].title;
        errorMessage.style.display = 'inline';
        retryBtn.style.display = 'inline';
    };
}

function changeVolume(value) {
    audio.volume = value / 100;
}

function toggleMute() {
    const volumeIcon = document.getElementById('volumeIcon');
    if (audio.volume > 0) {
        audio.volume = 0;
        volumeIcon.textContent = '🔇';
    } else {
        audio.volume = 1;
        volumeIcon.textContent = '🔊';
    }
}

// 初始化音量
window.addEventListener('DOMContentLoaded', function() {
    audio.volume = 1;
    document.getElementById('volumeSlider').value = 100;
    
    // 为播放按钮添加事件监听
    document.getElementById('playPauseBtn').addEventListener('click', togglePlay);
    document.getElementById('retryBtn').addEventListener('click', retryLoadMusic);
});