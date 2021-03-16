export const createNode = (obj) => {
  const type = obj.type || 'div';
  const parent = obj.parent || document.body;
  const node = document.createElement(type);

  const hasText = obj.text !== undefined;
  if (hasText) {
    node.appendChild(document.createTextNode(obj.text));
  }

  const hasAttributes = obj.attributes !== '';
  if (hasAttributes) {
    for (const currentAttribute in obj.attributes) {
      const attr = document.createAttribute(obj.attributes[currentAttribute].name);
      attr.value = obj.attributes[currentAttribute].value;
      node.setAttributeNode(attr);
    }
  }

  parent.appendChild(node);
  return node;
}

export const setPosition = (event, node, leftAdjustment = 0, topAdjustment = 0, position = 'fixed') => {
  const isFixed = position === 'fixed';
  const isRelative = position === 'relative';
  const isAbsolute = position === 'absolute';

  // window values
  const winHeight = window.innerHeight;
  const winWidth = window.innerWidth;
  const scrollTop = isAbsolute ? document.documentElement.scrollTop : 0;
  const scrollBottom = scrollTop + winHeight;

  // floatingElement container
  const floatingElement = node;
  const floatingElementWidth = floatingElement.offsetWidth;
  const floatingElementHeight = floatingElement.offsetHeight || floatingElement.scrollHeight;

  // hovering element currently target
  const target = event.currentTarget;
  const cursorPosY = event.clientY || target.getBoundingClientRect().top;

  const targetLeft = target.getBoundingClientRect().left;
  const targetTop = isRelative ? target.getBoundingClientRect().top : scrollTop + cursorPosY;
  const targetWidth = target.offsetWidth;
  const targetHeight = target.offsetHeight;

  const floatingElementBottomCorner = targetTop + targetHeight + floatingElementHeight + topAdjustment;
  const floatingElementTopCorner = targetTop + targetHeight + topAdjustment;

  // tooltip on top by default unless default placement already defined
  if (floatingElement.id === 'tooltip-container' && !floatingElement.className.match(/left|right|bottom/)) {
    floatingElement.classList.add('top');
  }

  // value for floatingElement left side position for Top/Bottom placements
  const floatingElementOnTopEdgeLeft = targetLeft - floatingElementWidth / 2 + targetWidth / 2;
  const floatingElementOnTopEdgeRight = floatingElementOnTopEdgeLeft + floatingElementWidth;
  // value for floatingElement top side position for Top placement
  const floatingElementOnTopEdgeTop = targetTop - floatingElementHeight - 5;
  // value for floatingElement left side position for Left placement
  const floatingElementOnLeftEdgeLeft = targetLeft - floatingElementWidth - leftAdjustment;
  // value for floatingElement top side position for Left/Right placement
  const floatingElementOnLeftEdgeTop = targetTop + topAdjustment;
  // value for floatingElement left side position for Right placement
  const floatingElementOnRightEdgeLeft = targetLeft + targetWidth + leftAdjustment;
  // value for floatingElement top side position for Bottom placement
  const floatingElementOnBottomEdgeTop = targetTop + targetHeight + 5;

  let isOnTopEdge, isOnBottomEdge, floatingElementLeft, floatingElementTop;

  if (isFixed) {
    isOnTopEdge = floatingElementTopCorner > scrollTop;
    isOnBottomEdge = floatingElementBottomCorner > scrollBottom;
  } else {
    isOnTopEdge = (floatingElement.classList.contains('top') || floatingElementOnTopEdgeTop < winHeight) &&
      floatingElementOnTopEdgeLeft > 0 && floatingElementOnTopEdgeLeft < winWidth &&
      floatingElementOnTopEdgeRight > 0 && floatingElementOnTopEdgeRight < winWidth;
    isOnBottomEdge = (floatingElement.classList.contains('bottom') || floatingElementBottomCorner < winHeight) &&
      floatingElementOnTopEdgeLeft > 0 && floatingElementOnTopEdgeLeft < winWidth &&
      floatingElementOnTopEdgeRight > 0 && floatingElementOnTopEdgeRight < winWidth;
  }
  const isOnLeftEdge = floatingElement.classList.contains('left') ||
    floatingElementOnTopEdgeLeft > 0 && floatingElementOnTopEdgeLeft < winWidth;
  const isOnRightEdge = floatingElement.classList.contains('right') ||
    floatingElementOnTopEdgeRight > 0 && floatingElementOnTopEdgeRight < winWidth;

  if (isOnTopEdge && !floatingElement.className.match(/left|right|bottom/)) {
    floatingElementLeft = floatingElementOnTopEdgeLeft;
    floatingElementTop = floatingElementOnTopEdgeTop;
    floatingElement.classList.remove(...['left', 'right', 'bottom'])
    if (!floatingElement.classList.contains('top')) {
      floatingElement.classList.add('top');
    }
  } else if (isOnLeftEdge && !floatingElement.className.match(/right|bottom/)) {
    floatingElementLeft = floatingElementOnLeftEdgeLeft;
    floatingElementTop = floatingElementOnLeftEdgeTop;
    floatingElement.classList.remove(...['top', 'right', 'bottom'])
    if (!floatingElement.classList.contains('left')) {
      floatingElement.classList.add('left');
    }
  } else if (isOnRightEdge && !floatingElement.className.match(/bottom/)) {
    floatingElementLeft = floatingElementOnRightEdgeLeft;
    floatingElementTop = floatingElementOnLeftEdgeTop;
    floatingElement.classList.remove(...['top', 'left', 'bottom'])
    if (!floatingElement.classList.contains('right')) {
      floatingElement.classList.add('right');
    }
  } else if (isOnBottomEdge) {
    floatingElementLeft = floatingElementOnTopEdgeLeft;
    floatingElementTop = floatingElementOnBottomEdgeTop;
    floatingElement.classList.remove(...['top', 'left', 'right'])
    if (!floatingElement.classList.contains('bottom')) {
      floatingElement.classList.add('bottom');
    }
  }

  floatingElement.style.top = floatingElementTop + 'px';
  floatingElement.style.left = floatingElementLeft + 'px';
};