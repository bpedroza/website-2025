export const animateDesktop = (scrollPos, el) => {
  const isScrolledBottom = (window.innerHeight + scrollPos) >= document.body.scrollHeight;

  if(scrollPos % 3 !== 0 && !isScrolledBottom) {
    //try to reduce the workload a bit.
    return;
  }

  const skewX = 12;
  const skewY = -5;
  const scale = 0.75;
  const width = 35;
  const height = 50;
  const right = 10;
  const maxScale = 1;
  const maxWidth = 95;
  const maxHeight = 90;
  const minRight = 3;
  const minTop = 130;
  const maxTop = 170;

  const newSkewX = skewX - Math.min(scrollPos * 0.2, skewX);
  const newSkewY = skewY + Math.min(scrollPos * 0.1, -1 * skewY);
  const newScale = Math.min(scale + scrollPos * 0.01, maxScale);
  const newWidth = Math.min(width + scrollPos / 1.9, maxWidth);
  const newHeight = Math.min(height + scrollPos / 1.6, maxHeight);
  const newRight = Math.max(right - scrollPos / 1.8, minRight);
  const newTop = Math.min(Math.max(scrollPos * 1.4, minTop), maxTop);

  if (newWidth === maxWidth || isScrolledBottom) {
    el.style.overflow = 'scroll';
    el.style.width = `${maxWidth}%`;
    el.style['max-height'] = `${maxHeight}%`;
    el.style.right = `${newRight}%`;
    el.style.top = `${maxTop}px`;
    el.style.transform = `skew(0deg, 0deg) scale(${maxScale})`;

    return;
  } else {
    el.style.overflow = 'hidden';
  }

  el.style.transform = `skew(${newSkewX}deg, ${newSkewY}deg) scale(${newScale})`;
  el.style.width = `${newWidth}%`;
  el.style['max-height'] = `${newHeight}%`;
  el.style.right = `${newRight}%`;
  el.style.top = `${newTop}px`;
}