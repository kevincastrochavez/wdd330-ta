export default class Alert {
  constructor() {}

  getAlerts() {
    return fetch("../json/alerts.json")
      .then((response) => response.json())
      .then((data) => data);
  }

  async displayAlerts(element) {
    const alerts = await this.getAlerts();

    if (alerts) {
      const alertsContainer = document.getElementById(element);
      const section = document.createElement("section");
      section.classList.add("alert-list");

      alerts.map((alert) => {
        const paragraph = document.createElement("p");
        paragraph.innerHTML = alert.message;
        paragraph.style.backgroundColor = alert.background;
        paragraph.style.color = alert.color;

        section.append(paragraph);
      });

      alertsContainer.append(section);
    }
  }
}
