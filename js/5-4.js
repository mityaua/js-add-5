function Car({ brand, model, price }) {
  this.brand = brand;
  this.model = model;
  this.price = price;
}

// Выполни рефакторинг функции - конструктора Car так, чтобы она принимала один параметр - объект со свойсвами brand, model и price.
// Деструктуризируй объект в сигнатуре(подписи) функции.