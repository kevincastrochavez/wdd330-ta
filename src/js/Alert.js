export default class Alert {
  constructor() {}

  async displayAlerts(element) {
    const data = await fetch("../json/alerts.json");
    const response = await data.json();

    if (response) {
      const alertsContainer = document.getElementById(element);
      const section = document.createElement("section");
      section.classList.add("alert-list");

      response.map((alert) => {
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
