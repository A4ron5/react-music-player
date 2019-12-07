import { actions } from '../action';

export const calcClickedTime = (e, duration, bar) => {
  const clickPositionInPage = e.pageX;
  const barStart = bar.current.getBoundingClientRect().left + window.scrollX;
  const barWidth = bar.current.offsetWidth;
  const clickPositionInBar = clickPositionInPage - barStart;
  const timePerPixel = duration / barWidth;
  return timePerPixel * clickPositionInBar;
}

export const handleTimeDrag = (e, duration, bar, dispatch) => {
  dispatch(actions.setClickedTime(calcClickedTime(e, duration, bar)));

  const updateTimeOnMove = eMove => {
    dispatch(actions.setClickedTime(calcClickedTime(eMove, duration, bar)));
  };

  document.addEventListener("mousemove", updateTimeOnMove);

  document.addEventListener("mouseup", () => {
    document.removeEventListener("mousemove", updateTimeOnMove);
  });
}