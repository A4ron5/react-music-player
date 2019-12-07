export const calcClickedTime = (e, duration, bar) => {
  const clickPositionInPage = e.pageX;
  const barStart = bar.current.getBoundingClientRect().left + window.scrollX;
  const barWidth = bar.current.offsetWidth;
  const clickPositionInBar = clickPositionInPage - barStart;
  const timePerPixel = duration / barWidth;
  return timePerPixel * clickPositionInBar;
}