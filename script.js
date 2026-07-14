/**
 * 显示或隐藏透明点击区域。
 * 方便开发时确认点击区域的位置。
 */
function toggleDebug() {
  const prototype = document.getElementById("prototype");

  if (!prototype) {
    return;
  }

  prototype.classList.toggle("debug");
}

/**
 * 切换浏览器全屏。
 */
async function toggleFullscreen() {
  try {
    if (!document.fullscreenElement) {
      await document.documentElement.requestFullscreen();
    } else {
      await document.exitFullscreen();
    }
  } catch (error) {
    console.error("无法切换全屏：", error);
  }
}