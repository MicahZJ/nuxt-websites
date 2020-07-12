<template>
  <video-player
    ref="videoPlayer"
    :options="playerOptions"
    class="video-player vjs-custom-skin"
    :playsinline="playsinline"
    @play="onPlayerPlay($event)"
    @pause="onPlayerPause($event)"
    @ended="onPlayerEnded($event)"
    @loadeddata="onPlayerLoadeddata($event)"
    @waiting="onPlayerWaiting($event)"
    @playing="onPlayerPlaying($event)"
    @timeupdate="onPlayerTimeupdate($event)"
    @canplay="onPlayerCanplay($event)"
    @canplaythrough="onPlayerCanplaythrough($event)"
    @ready="playerReadied"
    @statechanged="playerStateChanged($event)"
  ></video-player>
</template>

<script>
export default {
  data() {
    return {
      playsinline: true,
      playerOptionsS: {
        // 播放器配置
        muted: false, // 是否静音
        language: "zh-CN",
        // aspectRatio: '16:9',
        playbackRates: [0.7, 1.0, 1.5, 2.0], // 播放速度
        controls: true,
        preload: "auto", // 视频预加载
        fluid: true,
        sources: [
          {
            type: "video/mp4",
            src:
              "https://cdn.theguardian.tv/webM/2015/07/20/150716YesMen_synd_768k_vp8.webm"
          }
        ],
        poster: "/imgs/choice/avator.png", // 封面图
        notSupportedMessage: "此视频暂无法播放，请稍后再试"
      },
      playerOptions: {
        playbackRates: [0.5, 1.0, 1.5, 2.0, 4.0, 8.0], // 可选择的播放速度
        autoplay: true, // 如果true,浏览器准备好时开始回放。
        muted: false, // 默认情况下将会消除任何音频。
        loop: false, // 视频一结束就重新开始。
        preload: "auto", // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
        language: "zh-CN",
        aspectRatio: "16:9", // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
        fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
        sources: [
          {
            type: "",
            src: "http://www.shkjem.com/video/kj.mp4" // url地址
          }
        ],
        // poster: "../../assets/images/home_top.jpg", //你的封面地址
        // width: document.documentElement.clientWidth,
        notSupportedMessage: "此视频暂无法播放，请稍后再试", // 允许覆盖Video.js无法播放媒体源时显示的默认信息。
        controlBar: {
          timeDivider: true, // 当前时间和持续时间的分隔符
          durationDisplay: true, // 显示持续时间
          remainingTimeDisplay: false, // 是否显示剩余时间功能
          fullscreenToggle: true // 全屏按钮
        }
      }
    };
  },
  computed: {
    player() {
      return this.$refs.videoPlayer.player;
    }
  },
  mounted() {
    // console.log("this is current player instance object", this.myVideoPlayer);
  },
  methods: {
    // 监听播放
    onPlayerPlay(player) {
      // console.log('player play!', player)
    },
    // 监听暂停
    onPlayerPause(player) {
      // console.log('player pause!', player)
    },
    // 监听停止
    onPlayerEnded(player) {
      // console.log('player ended!', player)
    },
    // 监听加载完成
    onPlayerLoadeddata(player) {
      // console.log('player Loadeddata!', player)
    },
    // 监听视频缓存等待
    onPlayerWaiting(player) {
      // console.log('player Waiting!', player)
    },
    // 监听视频暂停后播放
    onPlayerPlaying(player) {
      // console.log('player Playing!', player)
    },
    // 监听视频播放时长更新
    onPlayerTimeupdate(player) {
      // console.log('player Timeupdate!', player.currentTime())
    },
    onPlayerCanplay(player) {
      console.log("player Canplay!", player);
    },
    onPlayerCanplaythrough(player) {
      // console.log('player Canplaythrough!', player)
    },
    // 监听状态改变
    playerStateChanged(playerCurrentState) {
      // console.log('player current update state', playerCurrentState)
    },
    // 监听播放器准备就绪
    playerReadied(player) {
      // console.log('example 01: the player is readied', player)
    }
  }
};
</script>

<style lang="scss" scoped></style>
