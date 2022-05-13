import {generateDates} from '../mock/waypoint';
import dayjs from 'dayjs';
import {createElement} from '../render';

const createSiteInfoTemplate = (waypoints) => {
  const countTotalPrice = () => {
    let total = 0;
    for (let i = 0; i < waypoints.length; i++){
      total += waypoints[i].price;
    }
    return total;
  };
  const randomDates = generateDates();
  const beginDate = dayjs(randomDates.start).format('MMM D');
  const endDate = dayjs(randomDates.end).format('D');
  return `<section class="trip-main__trip-info  trip-info">
            <div class="trip-info__main">
              <h1 class="trip-info__title">Amsterdam &mdash; Chamonix &mdash; Geneva</h1>
              <p class="trip-info__dates">${beginDate}&nbsp;&mdash;&nbsp;${endDate}</p>
            </div>
            <p class="trip-info__cost">
              Total: &euro;&nbsp;<span class="trip-info__cost-value">${countTotalPrice()}</span>
            </p>
          </section>`;
};

export default class SiteInfoView {
  #element = null;
  #waypoints = null;

  constructor(waypoints) {
    this.#waypoints = waypoints;
  }

  get element(){
    if (!this.#element){
      this.#element = createElement(this.template);
    }

    return this.#element;
  }

  get template(){
    return createSiteInfoTemplate(this.#waypoints);
  }

  removeElement() {
    this.#element = null;
  }
}
