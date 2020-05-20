class Item {
  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
  updateQuality() {
    if (this.quality <= 0 || this.quality >= 50) return false;
    this.sellIn <= 0 ? (this.quality -= 2) : (this.quality -= 1);
    this.sellIn -= 1;
  }
}

class Shop {
  constructor(items = []) {
    this.items = items;
  }
  updateQualityForShop() {
    for (var i = 0; i < this.items.length; i++) {
      this.items[i].updateQuality();
    }
    return this.items;
  }
}

class AgedBrie {
  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
  updateQuality() {

    if (this.quality <= 0 || this.quality >= 50) return false;
    if (this.sellIn > 10) {
      this.quality += 1;
    } else if (this.sellIn <= 10 && this.sellIn > 5) {
      this.quality += 2;
    } else if (this.sellIn <= 5 && this.sellIn > 0) {
      this.quality += 3;
    } else {
      this.quality = 0;
    }
    this.sellIn -= 1;
  }
}

class Sulfuras {
  constructor(name, quality = 80) {
    this.name = name;
    this.quality = quality;
  }
}

class BackstagePasses {
  constructor(name, sellIn, quality) {
    this.name = name;
    this.quality = quality;
    this.sellIn = sellIn;
  }
  updateQuality() {
    if (this.quality <= 0 || this.quality >= 50) return false;
    if (this.sellIn > 10) {
      this.quality += 1;
    } else if (this.sellIn <= 10 && this.sellIn > 5) {
      this.quality += 2;
    } else if (this.sellIn <= 5 && this.sellIn > 0) {
      this.quality += 3;
    } else {
      this.quality = 0;
    }
    this.sellIn -= 1;
  }
}

class Conjured {
  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
  updateQuality() {
    this.sellIn <= 0 ? (this.quality -= 4) : (this.quality -= 2);
    this.sellIn -= 1;
  }
}

module.exports = {
  Item,
  Shop,
  AgedBrie,
  Sulfuras,
  BackstagePasses,
  Conjured
}