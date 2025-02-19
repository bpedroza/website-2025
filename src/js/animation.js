export const animateDesktop = (scrollPos, el) => {
  const scrollProgress = Math.min(1, getScrollProgress(scrollPos));
  const isScrolledBottom = scrollProgress === 1;

  const newSkewX = getNewPosition(12, 0, scrollProgress);
  const newSkewY = getNewPosition(-5, 0, scrollProgress);
  const newScale = getNewPosition(0.75, 1, scrollProgress);
  const newWidth = getNewPosition(35, 95, scrollProgress);
  const newHeight = getNewPosition(50, 90, scrollProgress);
  const newRight = getNewPosition(10, 3, scrollProgress);
  const newTop = getNewPosition(130, 170, scrollProgress);

  el.style.transform = `skew(${newSkewX}deg, ${newSkewY}deg) scale(${newScale})`;
  el.style.width = `${newWidth}%`;
  el.style['max-height'] = `${newHeight}%`;
  el.style.right = `${newRight}%`;
  el.style.top = `${newTop}px`;

  if (isScrolledBottom) {
    el.style.overflow = 'scroll';
  } else {
    el.style.overflow = 'hidden';
  }
}

/**
 * Give the start position and desired end position get a new value based on scroll position.
 * @param {number} startPos 
 * @param {number} endPos 
 * @param {number} scrollProgress 
 * @returns {number}
 */
function getNewPosition(startPos, endPos, scrollProgress) {
  const distance = endPos - startPos;
  const moveAmount = distance * scrollProgress;

  return startPos + moveAmount;
}

/**
 * Return a number between 0 and 1 to indicate scroll progress
 * @param {number} scrollPos 
 * @returns {number}
 */
function getScrollProgress(scrollPos) {
  const maxScroll = document.body.scrollHeight - window.innerHeight;
  
  return scrollPos / maxScroll;
}