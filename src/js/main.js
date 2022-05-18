import ProductData from "./productData";
import ProductList from "./productList";
import Alert from "./Alert";

const productData = new ProductData("tents");
const alert = new Alert();

alert.displayAlerts("alerts-container");
const listElement = document.querySelector(".product-list");
const myList = new ProductList("tents", productData, listElement);

myList.init();
