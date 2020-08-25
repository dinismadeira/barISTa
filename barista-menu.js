bar.cat.create('Recomendado');
var i = 100;
bar.cat.create('Cerveja', [
    bar.item.create(i++, 'Panache 20cl', 0.95, 'panache.jpg'),
    bar.item.create(i++, 'Lata Super Bock 33cl', 1.00, 'lata-super-bock.png', 'Aroma: Rico e complexo, ligeiramente frutado.<br />Aparência: Cor dourada, espuma branca, cremosa, abundante e consistente.<br />Sabor: Suave e moderadamente amargo.<br />Álcool: 5,2% v/v<br />Sugestões: Beber a uma temperatura de 5ºC.'),
    bar.item.create(i++, 'Sagres Media 33cl', 0.95, 'sagres-media.png', 'Tipo: Pilsner<br />Volume de álcool: 5,0% vol.<br /><br />Lançada em 1940, a cerveja Sagres é desde sempre produzida com produtos 100% naturais, segundo métodos tradicionais exclusivos a partir de água, malte, cereais não-maltados e uma rigorosa seleção de lúpulos. No seu fabrico não são utilizados quaisquer aditivos ou conservantes.'),
    bar.item.create(i++, 'Sagres Mini 20cl', 0.75, 'sagres-mini.png'),
    bar.item.create(i++, 'Sagres Mini Preta 20cl', 0.75, 'sages-mini-preta.png'),
    bar.item.create(i++, 'Imperial Sagres 25cl', 0.75, 'imperial-sagres.png', 'Tipo: Pilsner<br />Volume de álcool: 5,0% vol.<br /><br />Lançada em 1940, a cerveja Sagres é desde sempre produzida com produtos 100% naturais, segundo métodos tradicionais exclusivos a partir de água, malte, cereais não-maltados e uma rigorosa seleção de lúpulos. No seu fabrico não são utilizados quaisquer aditivos ou conservantes.'),
    bar.item.create(i++, 'Super Bock (abadia) 20cl', 0.75, 'super-bock-abadia.png'),
    bar.item.create(i++, 'Super Bock (stout) 20cl', 0.75, 'super-bock-stout.png'),
    bar.item.create(i++, 'Super Bock (Green) 33cl', 1.20, 'super-bock-green.png'),
    bar.item.create(i++, 'Chopp Brahma Claro 350ml', 3.2, 'chop-brahma-350.png'),
    bar.item.create(i++, 'Chopp Brahma Black 450ml', 4.0, 'chop-brahma-450.png'),
    bar.item.create(i++, 'Chopp Heineken 350ml', 3.2, 'chopp-heineken-350.png'),
    bar.item.create(i++, 'Cerveja Heineken (long neck)', 4.2, 'heineken-long.png'),
    bar.item.create(i++, 'Norteña 960ml', 5.6, 'nortena.png'),
    bar.item.create(i++, 'Brahma (long neck)', 4.2, 'brahma-long.png'),
    bar.item.create(i++, 'Skol (long neck)', 4.2, 'skol-long.png'),
    bar.item.create(i++, 'Skol Beats (long neck)', 4.2, 'skol-beats.png'),
    bar.item.create(i++, 'Malzbier (long neck)', 4.7, 'malzbier-long.png'),
    bar.item.create(i++, 'Bohemia (long neck)', 4.2, 'bohemia.png'),
    bar.item.create(i++, 'Liber (sem álcool, long neck)', 4.2, 'liber-sem-alcool.png'),
    bar.item.create(i++, 'Stella Artois (long neck)', 4.9, 'stella-artois.png'),
    bar.item.create(i++, 'Budweiser (long neck)', 4.9, 'budweiser.png'),
    bar.item.create(i++, 'Edelweiss (500ml - cerveja de trigo)', 8.3, 'edelweiss.png')
]);
bar.cat.create('Bebidas sem Álcool', [
    bar.item.create(200, 'Café Expresso', 1.2, 'cafe-expresso.png'),
    bar.item.create(201, 'Café com Chantili', 1.7, 'cafe-chantili.png'),
    bar.item.create(202, 'Água Mineral', 1.4, 'agua-mineral.png'),
    bar.item.create(203, 'Água Mineral com Gás', 1.4, 'agua-com-gas.png'),
    bar.item.create(204, 'Água Tónica Frize', 1.8, 'agua-tonica-frize.png'),
    bar.item.create(205, 'Refrigerante 33cl', 1.8, 'refrigerante.png'),
    bar.item.create(206, 'H2OH!', 2, 'H2OH!.png'),
    bar.item.create(207, 'Red Bull® Energy Drink', 4.3, 'redbull.jpg'),
    bar.item.create(208, 'Red Bull® Sugarfree', 4.3, 'redbull.jpg'),
    bar.item.create(209, 'Energético Burn', 4, 'burn.png'),
    bar.item.create(210, 'Dell Valle', 1.8, 'del-valle.png'),
    bar.item.create(211, 'Água de Coco', 2.2, 'agua-de-coco.png')
]);
bar.cat.create('Vinhos');
var i = 400;
bar.cat.create('Licores', [
    bar.item.create(i++, 'Amêndoa Amarga', 3.5, 'amendoa-amarga.png'),
    bar.item.create(i++, 'Sheridan\'s', 4.3, 'sheridans.png'),
    bar.item.create(i++, 'Malibu', 4.3, 'malibu.png'),
    bar.item.create(i++, 'Bailey\'s', 4.3, 'baileys.png'),
    bar.item.create(i++, 'Licor Beirão', 4.3, 'beirao.png'),
    bar.item.create(i++, 'Safari', 4.3, 'safari.png'),
    bar.item.create(i++, 'Tia Maria', 4.3, 'tia-maria.png'),
    bar.item.create(i++, 'Cointreau', 4.3, 'cointreau.png'),
    bar.item.create(i++, 'Cuarenta y Tres', 4.3, 'cuarenta-y-tres.png'),
    bar.item.create(i++, 'Frangélico', 5.7, 'frangelico.png'),
    bar.item.create(i++, 'Absinto Lautrec', 5.3, 'absinto-lautrec.png'),
    bar.item.create(i++, 'Licores Nacionais', 3.7, 'licores.png')
]);
var i = 500;
bar.cat.create('Uísque', [
    bar.item.create(i++, 'Ballantine\'s (gold) 5cl', 3.50, 'ballantines.png'),
    bar.item.create(i++, 'Ballantine\'s (1/2) 3cl', 1.80, 'ballantines.png'),
    bar.item.create(i++, 'Ballantine\'s 5cl', 2.80, 'ballantines.png'),
    bar.item.create(i++, 'Chivas Regal (12 anos) 5cl', 4.50, 'chivas-regal.png'),
    bar.item.create(i++, 'Cutty Sark 5cl', 2.80, 'cutty-sark.png'),
    bar.item.create(i++, 'Four Roses (bourbon) 5cl', 3.00, 'four-roses.png'),
    bar.item.create(i++, 'Grant\'s (15 anos) 5cl', 3.50, 'grants.png'),
    bar.item.create(i++, 'Grant\'s 5cl', 2.80, 'grants.png'),
    bar.item.create(i++, 'J.B. (1/2) 3cl', 1.80, 'JB.png'),
    bar.item.create(i++, 'J.B. 5cl', 2.80, 'JB.png'),
    bar.item.create(i++, 'Jack Daniel\'s 5cl', 4.00, 'jack-daniels.png'),
    bar.item.create(i++, 'Jameson (Iirish) 5cl', 3.00, 'jameson.png'),
    bar.item.create(i++, 'JohnnieWalker (red label) 5cl', 2.80, 'johnniewalker.png'),
    bar.item.create(i++, 'Logan 1/2 (12anos) 3cl', 2.50, 'logan.png'),
    bar.item.create(i++, 'Logan (12 anos) 5cl', 3.50, 'logan.png'),
    bar.item.create(i++, 'Long John (12 anos) 5cl', 3.50, 'long-john.png'),
    bar.item.create(i++, 'Passport Scotch 5cl', 2.80, 'passport-scotch.png'),
    bar.item.create(i++, 'The Famous Grouse 5cl', 3.00, 'the-famous-grouse.png'),
    bar.item.create(i++, 'William Lawson\'s 5cl', 2.80, 'william-lawsons.jpg'),
    bar.item.create(i++, 'Jin Bean 5cl', 3.30, 'jin-bean.png'),
    bar.item.create(i++, 'Bourbon', 3.30, 'bourbon.png')
]);
var i = 600;
bar.cat.create('Aguardentes', [
    bar.item.create(i++, 'Aguardente Genuína 5cl', 2.00),
    bar.item.create(i++, 'Aldeia Nova 5cl', 1.80),
    bar.item.create(i++, 'Antiqua 5cl', 3.00),
    bar.item.create(i++, 'Fundação 5cl', 2.50),
    bar.item.create(i++, 'São Domingos(reserva) 5cl', 3.50),
    bar.item.create(i++, 'Taquilla 5cl', 2.00),
    bar.item.create(i++, 'Taquilla Shot (limão,sal) 3cl', 1.80)
]);
var i = 700;
bar.cat.create('Lanches', [
    bar.item.create(i++, 'Pão c/ manteiga', 0.65, 'pao-manteiga.png'),
    bar.item.create(i++, 'Sandes queijo', 1.05, 'sandes-queijo.png'),
    bar.item.create(i++, 'Sandes fiambre', 1.05, 'sandes-fiambre.png'),
    bar.item.create(i++, 'Sandes mista', 1.45, 'sandes-mista.png'),
    bar.item.create(i++, 'Sandes presunto', 1.50, 'sandes-presunto.png'),
    bar.item.create(i++, 'Sandes ovo', 1.50, 'sandes-ovo.jpg'),
    bar.item.create(i++, 'Sandes panado', 1.75, 'sandes-panado.png'),
    bar.item.create(i++, 'Torrada', 0.85, 'torrada.png'),
    bar.item.create(i++, 'Tosta mista', 1.55, 'tosta-mista.jpg'),
    bar.item.create(i++, 'Tosta queijo', 1.35, 'tosta-queijo.jpg'),
    bar.item.create(i++, 'Tosta fiambre', 1.35, 'tosta-fiambre.jpg'),
    bar.item.create(i++, 'Cachorro', 1.50, 'cachorro.jpg'),
    bar.item.create(i++, 'Bifana', 1.70, 'bifana.png'),
    bar.item.create(i++, 'Prego', 1.90, 'prego.png'),
    bar.item.create(i++, 'Salgados', 0.95, 'salgados.png')
]);
bar.cat.setItems('Recomendado', [bar.item.get(101), bar.item.get(102), bar.item.get(104), bar.item.get(708), bar.item.get(200), bar.item.get(404), bar.item.get(510)]);
