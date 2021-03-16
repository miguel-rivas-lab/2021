import { createNode, setPosition } from './node-manager.ts';
import $ from "jquery";

export default {
  $doc: document,
  tooltipText: '',
  tooltipContentNode: '',

  init($parentElement = $(document), tooltipText = null) {
    let $nodeTarget;
    let $nodes;
    if (tooltipText) {
      this.tooltipText = tooltipText;
      $nodeTarget = $parentElement;
      $nodes = $parentElement;
    } else {
      $nodeTarget = $parentElement.find('[data-c-tooltip]').addBack('[data-c-tooltip]');
      $nodes = $parentElement.find('[data-c-tooltip]').addBack('[data-c-tooltip]');
    }
    $nodes.off('.ctooltip');
    $nodeTarget.on('mouseenter.ctooltip', (e) => this.createTooltipContainer(e));
    $nodes.on('mouseleave.ctooltip', this.deleteTooltipContainer.bind(this));

    return this;
  },

  getTooltipText(event, selector) {
    const target = event.currentTarget;
    return target.getAttribute(selector);
  },

  createTooltipContainer(event) {
    const hasTooltip = $('aside#tooltip-container').length;

    if (!hasTooltip) {
      const customClass = event.currentTarget.getAttribute('data-c-tooltip-class');
      const isJSON = event.currentTarget.getAttribute('data-c-tooltip-json') === "true";

      const asideParams = {
        type: 'aside',
        attributes: [
          { name: 'id', value: 'tooltip-container' }
        ]
      };
      if (customClass) {
        asideParams['attributes'].push({ name: 'class', value: customClass });
      }

      let tooltipText = this.tooltipText || this.getTooltipText(event, 'data-c-tooltip');
      const isEmpty = tooltipText === "";

      if (!isEmpty) {
        const asideNode = createNode(asideParams);
        if (isJSON) {
          tooltipText = JSON.parse(`{"options" : ${tooltipText}}`);
          tooltipText.options.map(
            (item) => {
              let contentParams = {
                text: item.text,
                type: item.tag,
                parent: asideNode
              };
              this.tooltipContentNode = createNode(contentParams);
            }
          );
        } else {
          const contentParams = {
            text: tooltipText,
            type: 'p',
            parent: asideNode
          };
          this.tooltipContentNode = createNode(contentParams);
        }

        setPosition(event, asideNode, 5, 0, 'relative');
      }
    }
  },

  deleteTooltipContainer() {
    const tooltipContainer = this.$doc.getElementById('tooltip-container');
    if (tooltipContainer) {
      tooltipContainer.remove();
    }
  }
}