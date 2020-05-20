var {
  Conjured,
  BackstagePasses,
  Sulfuras,
  AgedBrie,
  Shop,
  Item
} = require('../src/gilded_rose.js');
describe("GildedRose shop manager", function () {
  var listItems;

  beforeEach(function () {
    listItems = [];
  });


  it("Baisser de 1 la qualité et sellIn d'item normaux", function () {
    listItems.push(new Item("+5 Dexterity Vest", 10, 20));
    listItems.push(new Item("Mana Cake", 3, 6));

    const gildedRose = new Shop(listItems);
    const items = gildedRose.updateQualityForShop();

    var expected = [{
        sellIn: 9,
        quality: 19
      },
      {
        sellIn: 2,
        quality: 5
      }
    ];
    expected.forEach(function (testCase, idx) {
      expect(items[idx].quality).toBe(testCase.quality);
      expect(items[idx].sellIn).toBe(testCase.sellIn);
    });
  });

  it("Augmenter la qualité de 1 pour Aged Brie et Backstage passes", function () {
    listItems.push(new AgedBrie("Aged Brie", 20, 30));
    listItems.push(new BackstagePasses("Backstage passes to a TAFKAL80ETC concert", 20, 30));

    const gildedRose = new Shop(listItems);
    const items = gildedRose.updateQualityForShop();

    var expected = [{
        sellIn: 19,
        quality: 31
      },
      {
        sellIn: 19,
        quality: 31
      },
    ];
    expected.forEach(function (testCase, idx) {
      expect(items[idx].quality).toBe(testCase.quality);
      expect(items[idx].sellIn).toBe(testCase.sellIn);
    });
  });

  it("Augmenter la qualité de 3 quand il reste 5 jours ou moins pour Aged Brie et Backstage passes", function () {
    listItems.push(new AgedBrie("Aged Brie", 4, 30));
    listItems.push(new BackstagePasses("Backstage passes to a TAFKAL80ETC concert", 4, 30));

    const gildedRose = new Shop(listItems);
    const items = gildedRose.updateQualityForShop();

    var expected = [{
        sellIn: 3,
        quality: 33
      },
      {
        sellIn: 3,
        quality: 33
      },
    ];
    expected.forEach(function (testCase, idx) {
      expect(items[idx].quality).toBe(testCase.quality);
      expect(items[idx].sellIn).toBe(testCase.sellIn);
    });
  });

  it("la qualité de Sulfuras ne se modifie pas", function () {
    listItems.push(new Sulfuras("+5 Dexterity Vest"));
    listItems.push(new Sulfuras("Mana Cake"));

    const gildedRose = new Shop(listItems);
    const items = gildedRose.updateQualityForShop();

    var expected = [{
        quality: 80
      },
      {
        quality: 80
      }
    ];
    expected.forEach(function (testCase, idx) {
      expect(items[idx].quality).toBe(testCase.quality);
    });
  });

  it("la qualité de Conjured se dégrade de deux fois plus vite", function () {
    listItems.push(new Conjured("Aged Brie", 11, 30));
    listItems.push(new Conjured("Aged Brie", 14, 30));

    const gildedRose = new Shop(listItems);
    const items = gildedRose.updateQualityForShop();

    var expected = [{
        sellIn: 10,
        quality: 28
      },
      {
        sellIn: 13,
        quality: 28
      }
    ];
    expected.forEach(function (testCase, idx) {
      expect(items[idx].quality).toBe(testCase.quality);
    });
  });

  it("la qualité de Conjured se dégrade de 4 à partir de zéro", function () {
    listItems.push(new Conjured("Aged Brie", -4, 30));
    listItems.push(new Conjured("Aged Brie", 0, 30));

    const gildedRose = new Shop(listItems);
    const items = gildedRose.updateQualityForShop();

    var expected = [{
        sellIn: -5,
        quality: 26
      },
      {
        sellIn: -1,
        quality: 26
      }
    ];
    expected.forEach(function (testCase, idx) {
      expect(items[idx].quality).toBe(testCase.quality);
    });
  });
});