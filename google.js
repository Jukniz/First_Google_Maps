var directionsDisplay;
var directionsService = new google.maps.DirectionsService();

function initialize() {
directionsDisplay = new google.maps.DirectionsRenderer();
    var mapOptions = {
        center: new google.maps.LatLng(39.232253141714885, -4.04296875),
        zoom: 4,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    var map = new google.maps.Map(document.getElementById("map_canvas"),
            mapOptions);
            
             directionsDisplay.setMap(map);
directionsDisplay.setPanel(document.getElementById("directionsPanel"));

var drawingManager = new google.maps.drawing.DrawingManager();
drawingManager.setMap(map);

    var LatJap = new google.maps.LatLng(35.53222622770337, 137.4609375);
    var LatEsp = new google.maps.LatLng(39.232253141714885, -4.04296875);
    var LatChi = new google.maps.LatLng(33.7243396617476, 101.77734375);
    var LatUsa = new google.maps.LatLng(38.41055825094609, -101.07421875);
    var LatEgi = new google.maps.LatLng(24.846565348219734, 29.53125);
        var LatRus = new google.maps.LatLng(61.3546135846894,88.06640625);
        var LatBra= new google.maps.LatLng(-9.79567758282973,-49.921875);
         var LatAus= new google.maps.LatLng(-27.059125784374054,133.9453125);
        

    var markerJapon = new google.maps.Marker({
        position: LatJap,
        map: map,
        title: "Japón"
    });

    var markerEspaña = new google.maps.Marker({
        position: LatEsp,
        map: map,
        title: "España"
    });

    var markerChina = new google.maps.Marker({
        position: LatChi,
        map: map,
        title: "China"
    });

    var markerUsa = new google.maps.Marker({
        position: LatUsa,
        map: map,
        title: "Estados Unidos"
    });

    var markerEgi = new google.maps.Marker({
        position: LatEgi,
        map: map,
        title: "Egipto"
    });
    
     var markerRus = new google.maps.Marker({
        position: LatRus,
        map: map,
        title: "Rusia"
    });
    
     var markerBra = new google.maps.Marker({
        position: LatBra,
        map: map,
        title: "Brasil"
    });
    
    var markerAus = new google.maps.Marker({
        position: LatAus,
        map: map,
        title: "Australia"
    });



    var Japon = '<div id="content">' +
            '<div id="siteNotice">' +
            '</div>' +
            '<h2 id="firstHeading" class="firstHeading">Japón</h2>' +
            '<div id="bodyContent">' +
            '<p>Japón (Nihon o Nippon, oficialmente Nihon-koku  o Nippon-koku, Estado de Japón; significado literal: el país del origen del sol),' +
            'es un país insular del este de Asia. Está ubicado entre el océano Pacífico y el mar del Japón, al este de China, Rusia y la península de Corea. ' +
            'Las principales islas de Japón son Honshu, Hokkaido, Kyushu y Shikoku, que forman el 97% de la superficie total del país, y por otras 6.848 ' +
            'islas menores adyacentes. Tiene una población de 127 millones de personas, la décima más numerosa del mundo. El área metropolitana de' +
            'Tokio, que incluye a la ciudad capital de Tokio y las prefecturas de sus alrededores, es el área urbana más grande del mundo en términos de ' +
            'población, albergando a más de 30 millones de habitantes. Es el segundo país más poblado de Asia Oriental, después de China. ' +
            'Las islas de Japón estuvieron habitadas desde el período Paleolítico superior. Las primeras menciones escritas acontecieron de manera breve ' +
            'en libros de historia de China del siglo I.4 La influencia del mundo exterior seguida de largos períodos de aislamiento ha caracterizado la historia ' +
            'de Japón. Desde que se adoptó una constitución en 1947, la forma de gobierno de Japón ha sido la de una monarquía constitucional, con un ' +
            'emperador y un parlamento elegido, conocido como la Dieta. ' +
            'Conocido como «La tierra del sol naciente», es una de las mayores potencias económicas del mundo. Es miembro de la Organización de las ' +
            'Naciones Unidas, G8, G4 y APEC. También es el sexto país exportador y el octavo importador. ' +
            '<p><center><img src="img/japanese.jpg" width="280" height="180"></center></p>' +
            '<p>Para más información: <a href="http://es.wikipedia.org/wiki/Jap%C3%B3n">http://es.wikipedia.org/wiki/Jap%C3%B3n</a></p>' +
            '</div>' +
            '</div>';

    var España = '<div id="content">' +
            '<div id="siteNotice">' +
            '</div>' +
            '<h2 id="firstHeading" class="firstHeading">España</h2>' +
            '<div id="bodyContent">' +
            'España o el Reino de España es un país soberano, miembro de la Unión Europea, constituido en Estado social y democrático de derecho y cuya forma de gobierno es la monarquía parlamentaria. Su territorio está organizado en 17 comunidades autónomas y dos ciudades autónomas. Su capital es la villa de Madrid.' +
            'Es un país bicontinental que se encuentra situado tanto en Europa occidental como en el norte de África. En Europa ocupa la mayor parte de la península Ibérica, conocida como España peninsular, y el archipiélago de las islas Baleares (en el mar Mediterráneo occidental); en África se hallan las ciudades de Ceuta (en la península Tingitana) y Melilla (en el cabo de Tres Forcas), las islas Canarias (en el océano Atlántico nororiental), las islas Chafarinas, el peñón de Vélez de la Gomera, las islas Alhucemas y la isla de Alborán. El municipio de Llivia, en los Pirineos, constituye un enclave rodeado totalmente por territorio francés. Completa el conjunto de territorios una serie de islas e islotes frente a las propias costas peninsulares. Tiene una extensión de 504.645 km², siendo el cuarto país más extenso del continente, tras Rusia, Ucrania y Francia. Con una altitud media de 650 metros es uno de los países más montañosos de Europa. Su población es de 47.190.493 habitantes, según datos del padrón municipal de 2011. El territorio peninsular comparte fronteras terrestres con Francia y con el principado de Andorra al norte, con Portugal al oeste y con el territorio británico de Gibraltar al sur. En sus territorios africanos, comparte fronteras terrestres y marítimas con Marruecos. Comparte con Francia la soberanía sobre la isla de los Faisanes en la desembocadura del río Bidasoa y cinco facerías pirenaicas.' +
            'De acuerdo con la Constitución española, el castellano o español es la lengua oficial del Estado y todos los españoles tienen el deber de conocerla y el derecho a usarla. En 2006, era la lengua materna del 89% de los españoles. Otras lenguas, también españolas, son reconocidas como cooficiales en diversas comunidades autónomas, conforme a los estatutos de autonomía.' +
            'La economía española es la 14.ª economía mundial en términos de PIB, por delante de Indonesia y de Turquía, y según Eurostat, el PIB per cápita español se situó, en 2011, en el 99% de la media de la Unión Europea, por delante de Chipre. Es el 8.º país del mundo con mayor presencia de multinacionales, tras Japón y por delante de Australia, Hong Kong y Canadá. Además, según el informe de 2010 de la ONU, tiene un índice de desarrollo humano de 0.878, el 23.º mayor del mundo, por delante de otros grandes países europeos, como Italia, Reino Unido o Grecia.5' +
            '<p><center><img src="img/spain.jpg" width="280" height="180"></center></p>' +
            '<p>Para más información: <a href="http://es.wikipedia.org/wiki/Espa%C3%B1a">http://es.wikipedia.org/wiki/Espa%C3%B1a</a></p>' +
            '</div>' +
            '</div>';


    var China = '<div id="content">' +
            '<div id="siteNotice">' +
            '</div>' +
            '<h2 id="firstHeading" class="firstHeading">China</h2>' +
            '<div id="bodyContent">' +
            'La República Popular China, o simplemente China, es un país ubicado en el este del continente asiático. Con una superficie de 9 596 961 km2 y límites con 14 países, es el 4.º más grande del mundo, así como el más poblado con una población de 1 339 724 852 habitantes. Tiene capital en Pekín, pero la ciudad más poblada es Shanghái. El territorio está dividido en 22 provincias, 5 regiones autónomas, 4 municipalidades y 2 regiones administrativas especiales (Hong Kong y Macao). Es miembro de la Organización de las Naciones Unidas (ONU) y del Foro de Cooperación Económica Asia-Pacífico (APEC).' +
            'China es la 2.ª economía y potencia comercial más grande del mundo. Su régimen político está inspirado en el comunismo soviético, siendo un estado unipartidista, liderado por el Partido Comunista de China, sin embargo económicamente es un estado capitalista desde las reformas de 1978 a cargo de Deng Xiaoping. Desde el año 2003 hasta la actualidad (2012) gobierna Hu Jintao como presidente y Wen Jiabao como primer ministro. Ha tenido un crecimiento económico muy rápido, tanto que es posible que sobrepase a la economía estadounidense hacia el año 2016.' +
            'Tradicionalmente, el nombre China se deriva de la dinastía Qin, que reinó desde el 221 hasta el 206 antes de Cristo. Sin embargo, ya en el siglo IV a. C., cuando Alejandro Magno (356-323 a. C.) fue a la conquista de Persia y la India, el territorio más allá de los Himalayas ya era denominado Tsinstán (el ‘país de los tsin’ ?así como Afganistán es el ‘país de los afganos’ o Kazajistán es el ‘país de los kazajos’?).' +
            'Por lo tanto el nombre surge del nombre de la provincia central de Shaanxi, en torno a la cual el actual país se fue incrementando gradualmente.' +
            '<p><center><img src="img/china.jpg" width="280" height="180"></center></p>' +
            '<p>Para más información: <a href="http://es.wikipedia.org/wiki/Rep%C3%BAblica_Popular_China">http://es.wikipedia.org/wiki/Rep%C3%BAblica_Popular_China</a></p>' +
            '</div>' +
            '</div>';

    var Usa = '<div id="content">' +
            '<div id="siteNotice">' +
            '</div>' +
            '<h2 id="firstHeading" class="firstHeading">Estados Unidos</h2>' +
            '<div id="bodyContent">' + 'Estados Unidos de América (en inglés: United States of America; abreviado USA o US); de manera abreviada, Estados Unidos, EUA o EE. UU.; es una república federal constitucional compuesta por 50 estados y un distrito federal. La mayor parte del país se ubica en el centro de América del Norte —donde se encuentran sus 48 estados contiguos y Washington D. C., el distrito de la capital—, entre los océanos Pacífico y el Atlántico, limita con Canadá al norte y con México al sur. El estado de Alaska está en el noroeste del continente, limitando con Canadá al este y separado de Rusia al oeste por el estrecho de Bering. El estado de Hawái es un archipiélago polinesio en medio del océano Pacífico, y es el único estado estadounidense que no se encuentra en América. El país también posee varios territorios en el mar Caribe y en el Pacífico.' +
            'Con 9,83 millones de km² y con más de 308 millones de habitantes, es el tercer o cuarto país más grande por área total y el tercero más grande tanto por la superficie terrestre como por población. Es una de las naciones del mundo étnicamente más diversas y multiculturales, producto de la inmigración a gran escala. Es, por otro lado, la economía nacional más grande del mundo, con un PIB estimado en 14,3 billones de dólares (una cuarta parte del PIB global nominal) y una quinta parte del PIB global en paridad de poder adquisitivo.' +
            'Los pueblos indígenas de origen asiático han habitado lo que hoy es el territorio continental de los Estados Unidos por miles de años. Esta población amerindia fue reducida por las enfermedades y la guerra después del primer contacto con los europeos. Estados Unidos fue fundado por trece colonias británicas, situadas a lo largo de la costa atlántica. El 4 de julio de 1776, emitieron la Declaración de Independencia, que proclamó su derecho a la libre autodeterminación y el establecimiento de una unión cooperativa. Los estados rebeldes derrotaron al Imperio británico en la guerra de independencia, la primera guerra colonial de independencia exitosa.9 La actual Constitución de los Estados Unidos fue adoptada el 17 de septiembre de 1787; su ratificación al año siguiente hizo a los estados parte de una sola república con un gobierno central fuerte. La Carta de Derechos, que comprende diez enmiendas constitucionales que garantizan muchos derechos civiles fundamentales y las libertades, fue ratificada en 1791.' +
            'En el siglo XIX, los Estados Unidos adquirieron territorios de Francia, España, Reino Unido, México y Rusia, además de anexarse la República de Texas y la República de Hawái. En la década de 1860, las disputas entre el sur agrario y el norte industrial sobre los derechos de los estados y la abolición de la esclavitud provocaron la Guerra de Secesión. La victoria del norte evitó una división permanente del país y condujo al final de la esclavitud legal. Para la década de 1870, la economía nacional era la más grande del mundo y la guerra hispano-estadounidense y la Primera Guerra Mundial confirmaron el estatus del país como una potencia militar. Después de la Segunda Guerra Mundial, surgió como el primer país con armas nucleares y un miembro permanente del Consejo de Seguridad de las Naciones Unidas. El final de la Guerra Fría y la disolución de la Unión Soviética dejaron a los Estados Unidos como la única superpotencia. El país representa dos quintas partes del gasto militar mundial y es una fuerza económica, política y cultural, líder en el mundo.' +
            '<p><center><img src="img/usa.jpg" width="280" height="180"></center></p>' +
            '<p>Para más información: <a href="http://es.wikipedia.org/wiki/Estados_Unidos">http://es.wikipedia.org/wiki/Estados_Unidos</a></p>' +
            '</div>' +
            '</div>';


    var Egipto = '<div id="content">' +
            '<div id="siteNotice">' +
            '</div>' +
            '<h2 id="firstHeading" class="firstHeading">Egipto</h2>' +
            '<div id="bodyContent">' +
            'La República Árabe de Egipto, es un país de Oriente Próximo, situado en el extremo noreste de África, que incluye la península del Sinaí (que pertenece al continente asiático). La mayor parte de su superficie la integra el desierto del Sahara, sólo habitado en torno a los oasis. Su capital es El Cairo.' +
            'Es uno de los países con más población de África y Oriente Medio, cuya mayor parte se asienta en las riberas del río Nilo y en el delta donde están las zonas de tierra fértil. Casi la mitad de los egipcios viven en áreas urbanas, sobre todo en los centros densamente poblados de El Cairo y Alejandría.' +
            'Egipto es famoso por su civilización antigua y sus monumentos, como las pirámides y la gran esfinge; la ciudad meridional de Luxor contiene un gran número de restos antiguos, tales como el templo de Karnak y el Valle de los Reyes. Hoy Egipto es un centro político y cultural importante del Oriente Próximo.' +
            '<p><center><img src="img/egipto.jpg" width="280" height="180"></center></p>' +
            '<p>Para más información: <a href="http://es.wikipedia.org/wiki/Egipto">http://es.wikipedia.org/wiki/Egipto</a></p>' +
            '</div>' +
            '</div>';


    var Rusia = '<div id="content">' +
            '<div id="siteNotice">' +
            '</div>' +
            '<h2 id="firstHeading" class="firstHeading">Rusia</h2>' +
            '<div id="bodyContent">' +
            'Rusia  o la Federación Rusa (formalmente:6 Federación de Rusia; es el país más extenso del mundo. La Federación de Rusia cuenta con una superficie de 17.075.400 kilómetros cuadrados, más de la novena parte de la tierra firme del planeta, con gran variedad de relieves y entornos naturales.' +
            'Esta república semipresidencialista, formada por 83 sujetos federales, es el noveno país por población al tener 142.000.000 de habitantes. Ocupa todo el norte de Asia y alrededor del 40% de Europa (principalmente Europa Oriental), siendo un país transcontinental. En Rusia hay nueve zonas horarias, desde UTC+3 hasta UTC+12, sin incluir UTC+5. Rusia tiene las mayores reservas de recursos energéticos y minerales del mundo todavía sin explotar, y es considerada la mayor superpotencia energética. Posee las mayores reservas de recursos forestales y la cuarta parte de agua dulce no congelada del mundo.' +
            'Rusia es el país que limita con más países, y el que tiene las fronteras más extensas. Tiene fronteras terrestres con los siguientes países (empezando por el noroeste y siguiendo el sentido antihorario): Noruega, Finlandia, Estonia, Letonia, Bielorrusia, Lituania, Polonia, Ucrania, Abjasia, Georgia, Osetia del Sur, Azerbaiyán, Kazajistán, China, Mongolia y Corea del Norte. Además comparte fronteras marítimas con Japón y Alaska, estado federado de Estados Unidos. Sus costas están bañadas por el océano Ártico, el océano Pacífico del Norte, y por mares interiores como el mar Báltico, el mar Negro y el mar Caspio.' +
            'La historia del país comenzó con los eslavos orientales. Los eslavos emergieron como un grupo reconocible en Europa entre los siglos III y VIII d. C. Fundado y dirigido por una clase noble vikinga guerrera y sus descendientes, el primer estado de los eslavos orientales, la Rus de Kiev, surgió en el siglo IX y adoptó el cristianismo procedente del Imperio bizantino en 988, comenzando una síntesis de las culturas bizantina y eslava que definiría la cultura rusa durante el siguiente milenio. Posteriormente la Rus de Kiev se desintegró en muchos pequeños estados feudales, de los cuales el más poderoso era el Principado de Moscú que se convirtió en la fuerza principal en el proceso de la reunificación rusa y la lucha por la independencia contra la Horda de Oro. Gradualmente Moscú reunificó los principados rusos circundantes y comenzó a dominar en el legado cultural y político de la Rus de Kiev. Para el siglo XVIII la nación se expandió mediante la conquista, anexión y exploración hasta convertirse en el Imperio ruso, el tercer imperio más grande de la historia al extenderse desde Polonia en el oeste, hasta el océano Pacífico y Alaska.' +
            'Rusia estableció un poder e influencia mundial desde los tiempos del Imperio ruso hasta ser el mayor y dominante país constituyente de la Unión Soviética (URSS), el primer y más grande Estado socialista constitucionalmente establecido y una superpotencia reconocida. El país puede presumir de una larga tradición de excelencia en todos los aspectos de las artes y las ciencias. La Federación Rusa se fundó al disolverse la Unión Soviética en 1991, pero es reconocida como la heredera de la personalidad legal de la Unión Soviética.14 Su economía tiene uno de los mayores crecimientos del mundo. Es el noveno país por PIB nominal o el sexto por PIB PPA, con el quinto presupuesto militar más grande del mundo. Es uno de los cinco países con armas nucleares reconocidos y posee el mayor arsenal de armas de destrucción masiva del mundo. Rusia es miembro permanente del Consejo de Seguridad de Naciones Unidas, miembro del G8, APEC y OCS, con gran influencia en el espacio postsoviético, particularmente en la Comunidad de Estados Independientes (CEI).' +
            '<p><center><img src="img/rusia.jpg" width="280" height="180"></center></p>' +
            '<p>Para más información: <a href="http://es.wikipedia.org/wiki/Rusia">http://es.wikipedia.org/wiki/Rusia</a></p>' +
            '</div>' +
            '</div>';
    
    var Brasil = '<div id="content">' +
            '<div id="siteNotice">' +
            '</div>' +
            '<h2 id="firstHeading" class="firstHeading">Brasil</h2>' +
            '<div id="bodyContent">' +
            'Brasil, oficialmente República Federativa del Brasil (en portugués: República Federativa do Brasil), es un país ubicado en América del Sur que comprende la mitad oriental del subcontinente y algunos grupos de pequeñas islas en el océano Atlántico.'+

'Con una superficie estimada en más de 8,5 millones de km², es el quinto país más grande del mundo en área total (equivalente a 47% del territorio sudamericano). Delimitado por el océano Atlántico al este, Brasil tiene una línea costera de 7491 km. Al norte limita con el departamento ultramarino francés de la Guayana Francesa, Surinam, Guyana y Venezuela; al noroeste con Colombia; al oeste con Perú y Bolivia; al sureste con Paraguay y Argentina, y al sur con Uruguay. De este modo tiene frontera con todos los países de América del Sur, excepto Ecuador y Chile. En su mayor parte, el país está comprendido entre los trópicos terrestres, por lo que las estaciones climáticas no se sienten de una manera radical en gran parte del mismo. La selva amazónica cubre 3,6 millones de km² de su territorio. Gracias a su vegetación y a su clima, es uno de los países con más especies de animales en el mundo.'+

'Brasil, hasta entonces habitado por indígenas, fue descubierto por los europeos en 1500, por una expedición portuguesa liderada por Pedro Álvares Cabral. Tras el Tratado de Tordesillas, el territorio brasileño fue el segmento del continente americano que correspondió al reino de Portugal, del cual obtuvo su independencia el 7 de septiembre de 1822. Así, el país pasó de ser parte central del reino de Portugal a un imperio para finalmente convertirse en una república. Su primera capital fue Salvador de Bahía, que fue sustituida por Río de Janeiro hasta que se construyó una nueva capital, Brasilia. Su constitución actual, formulada en 1988, define a Brasil como una república federativa presidencialista. La federación está formada por la unión del Distrito Federal, los 26 estados y los 5565 municipios.'+

'A pesar de que sus más de 192 millones de habitantes hacen de Brasil el quinto país más poblado del mundo, presenta un bajo índice de densidad poblacional. Esto se debe a que la mayor parte de su población se concentra a lo largo del litoral, mientras el interior del territorio aún está marcado por enormes vacíos demográficos. El idioma oficial y el más hablado es el portugués, que lo hace el mayor país lusófono del mundo. Por su parte, la religión con más seguidores es el catolicismo, siendo el país con mayor número de católicos nominales del mundo. La sociedad brasileña es considerada una sociedad multiétnica al estar formada por descendientes de europeos, indígenas, africanos y asiáticos.'+

'La economía brasileña es la mayor de América Latina y del hemisferio Sur, la sexta mayor del mundo por PIB nominal y la séptima mayor por paridad del poder adquisitivo (PPC).4 Brasil es una de las principales economías con más rápido crecimiento económico en el mundo y las reformas económicas dieron al país un nuevo reconocimiento internacional, tanto en el ámbito regional como global. El país es miembro fundador de la Organización de las Naciones Unidas (ONU), G20, Comunidad de Países de Lengua Portuguesa (CPLP), Unión Latina, Organización de los Estados Americanos (OEA), Organización de los Estados iberoamericanos (OEI), Mercado Común del Sur (Mercosur) y de la Unión de Naciones Sudamericanas (Unasur), además de ser uno de los países BRIC.'+
           '<p><center><img src="img/Brasil.jpg" width="280" height="180"></center></p>' +
            '<p>Para más información: <a href="http://es.wikipedia.org/wiki/Brasil">http://es.wikipedia.org/wiki/Brasil</a></p>' +
            '</div>' +
            '</div>';
    
    
    var Australia = '<div id="content">' +
            '<div id="siteNotice">' +
            '</div>' +
            '<h2 id="firstHeading" class="firstHeading">Australia</h2>' +
            '<div id="bodyContent">' +
            'Australia (oficialmente, en inglés: Commonwealth of Australia, Mancomunidad de Australia) es un país de Oceanía. Ocupa la principal masa continental de la plataforma llamada Sahul, además de algunas islas en los océanos Pacífico, Índico y Antártico. Los países más cercanos a Australia son Indonesia, Timor Oriental y Papúa Nueva Guinea al norte, las Islas Salomón, Vanuatu y la dependencia francesa de Nueva Caledonia al noreste, y Nueva Zelanda al sureste. Australia es el sexto país más grande del mundo con una superficie de 7.686.850 km².'+

'Su capital, Canberra, se encuentra en el Territorio de la Capital Australiana. La población del país en 2006 era de unos 20,6 millones de habitantes, concentrados principalmente en las grandes ciudades costeras: Sídney, Melbourne, Brisbane, Perth y Adelaida y la capital Canberra.'+

'Australia ha estado habitada desde hace más de cuarenta y dos mil años por los aborígenes australianos. Tras las esporádicas visitas de pescadores septentrionales y de exploradores y comerciantes europeos iniciadas en el siglo XVII, la mitad oriental del continente fue reclamada por Inglaterra en 1770 y en 1788 se estableció una colonia penal en Nueva Gales del Sur. Debido al asentamiento de colonos, a su crecimiento demográfico y a la exploración de nuevas áreas, durante el siglo XIX se establecieron otras cinco colonias británicas más.'+

'El 1 de enero de 1901, las seis colonias se federaron formando la Confederación de Australia. Desde su institución ha mantenido un sistema político democrático liberal y ha continuado siendo una monarquía dentro de la Comunidad Británica de Naciones.'+

'En la división convencional en continentes, Australia se engloba en Oceanía, que agrupa también las islas del Pacífico. Sin embargo, los anglohablantes suelen hablar del "continente australiano" sin que Australia, desde un punto de vista geológico, constituya un continente. Nueva Zelanda y las islas adyacentes tampoco conforman un continente con Australia al no pertenecer a la plataforma Sahul, sino que se suelen asociar con esta por cercanía histórica y política.'+
                       '<p><center><img src="img/Australia.jpg" width="280" height="180"></center></p>' +
            '<p>Para más información: <a href="http://es.wikipedia.org/wiki/Australia">http://es.wikipedia.org/wiki/Australia</a></p>' +
            '</div>' +
            '</div>';


    var infowindowJapon = new google.maps.InfoWindow({
        content: Japon
    });

    var infowindowEspaña = new google.maps.InfoWindow({
        content: España
    });

    var infowindowChina = new google.maps.InfoWindow({
        content: China
    });
    var infowindowUsa = new google.maps.InfoWindow({
        content: Usa
    });
    var infowindowEgipto = new google.maps.InfoWindow({
        content: Egipto
    });
    
      var infowindowRusia = new google.maps.InfoWindow({
        content: Rusia
    });
    
     var infowindowBrasil = new google.maps.InfoWindow({
        content: Brasil
    });
    
      var infowindowAustralia = new google.maps.InfoWindow({
        content: Australia
    });

    google.maps.event.addListener(markerJapon, 'click', function() {
        infowindowJapon.open(map, markerJapon);
    });


    google.maps.event.addListener(markerEspaña, 'click', function() {
        infowindowEspaña.open(map, markerEspaña);
    });

    google.maps.event.addListener(markerChina, 'click', function() {
        infowindowChina.open(map, markerChina);
    });

    google.maps.event.addListener(markerUsa, 'click', function() {
        infowindowUsa.open(map, markerUsa);
    });
    google.maps.event.addListener(markerEgi, 'click', function() {
        infowindowEgipto.open(map, markerEgi);
    });
    
       google.maps.event.addListener(markerRus, 'click', function() {
        infowindowRusia.open(map, markerRus);
    });
    
    google.maps.event.addListener(markerBra, 'click', function() {
        infowindowBrasil.open(map, markerBra);
    });
    
      google.maps.event.addListener(markerAus, 'click', function() {
        infowindowAustralia.open(map, markerAus);
    });


}


function calcRoute() {
  var start = document.getElementById("start").value;
  var end = document.getElementById("end").value;
  var request = {
    origin:start,
    destination:end,
    travelMode: google.maps.TravelMode.DRIVING
  };
  directionsService.route(request, function(result, status) {
    if (status == google.maps.DirectionsStatus.OK) {
      directionsDisplay.setDirections(result);
    }
  });
}



