import { actions } from '../action';
//TODO: fix type any
export const calcClickedTime = (e: any, duration: number, bar: any) => {
  const clickPositionInPage = e.pageX;
  const barStart = bar.current.getBoundingClientRect().left + window.scrollX;
  const barWidth = bar.current.offsetWidth;
  const clickPositionInBar = clickPositionInPage - barStart;
  const timePerPixel = duration / barWidth;
  return timePerPixel * clickPositionInBar;
}

export const handleTimeDrag = (e: any, duration: number, bar: any, dispatch: any) => {
  dispatch(actions.setClickedTime(calcClickedTime(e, duration, bar)));

  const updateTimeOnMove = (eMove: any) => {
    dispatch(actions.setClickedTime(calcClickedTime(eMove, duration, bar)));
  };

  document.addEventListener("mousemove", updateTimeOnMove);

  document.addEventListener("mouseup", () => {
    document.removeEventListener("mousemove", updateTimeOnMove);
  });
}