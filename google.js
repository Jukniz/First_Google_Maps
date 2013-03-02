
function initialize() {
    
        var mapOptions = {
          center: new google.maps.LatLng(39.232253141714885,-4.04296875),
          zoom: 4,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        
var map = new google.maps.Map(document.getElementById("map_canvas"),
            mapOptions);
            
            
var LatJap = new google.maps.LatLng(35.53222622770337, 137.4609375);
var LatEsp = new google.maps.LatLng(39.232253141714885,-4.04296875);
var LatChi = new google.maps.LatLng(33.7243396617476,101.77734375);
var LatUsa = new google.maps.LatLng(38.41055825094609,-101.07421875);
var LatEgi = new google.maps.LatLng(24.846565348219734,29.53125);

var markerJapon = new google.maps.Marker({
      position: LatJap,
      map: map,
      title:"Japón"
  });
  
  var markerEspaña = new google.maps.Marker({
      position: LatEsp,
      map: map,
      title:"España"
  });
  
    var markerChina = new google.maps.Marker({
      position: LatChi,
      map: map,
      title:"China"
  });
  
     var markerUsa= new google.maps.Marker({
      position: LatUsa,
      map: map,
      title:"Estados Unidos"
  });
  
     var markerEgi= new google.maps.Marker({
      position: LatEgi,
      map: map,
      title:"Egipto"
  });
  
  
  var Japon = '<div id="content">'+
    '<div id="siteNotice">'+
    '</div>'+
    '<h2 id="firstHeading" class="firstHeading">Japón</h2>'+
    '<div id="bodyContent">'+
    '<p>Japón (Nihon o Nippon, oficialmente Nihon-koku  o Nippon-koku, Estado de Japón; significado literal: el país del origen del sol),' +
'es un país insular del este de Asia. Está ubicado entre el océano Pacífico y el mar del Japón, al este de China, Rusia y la península de Corea. '+
'Las principales islas de Japón son Honshu, Hokkaido, Kyushu y Shikoku, que forman el 97% de la superficie total del país, y por otras 6.848 '+
'islas menores adyacentes. Tiene una población de 127 millones de personas, la décima más numerosa del mundo. El área metropolitana de'+
'Tokio, que incluye a la ciudad capital de Tokio y las prefecturas de sus alrededores, es el área urbana más grande del mundo en términos de '+
'población, albergando a más de 30 millones de habitantes. Es el segundo país más poblado de Asia Oriental, después de China. '+
'Las islas de Japón estuvieron habitadas desde el período Paleolítico superior. Las primeras menciones escritas acontecieron de manera breve '+
'en libros de historia de China del siglo I.4 La influencia del mundo exterior seguida de largos períodos de aislamiento ha caracterizado la historia '+
'de Japón. Desde que se adoptó una constitución en 1947, la forma de gobierno de Japón ha sido la de una monarquía constitucional, con un '+
'emperador y un parlamento elegido, conocido como la Dieta. '+
'Conocido como «La tierra del sol naciente», es una de las mayores potencias económicas del mundo. Es miembro de la Organización de las '+
'Naciones Unidas, G8, G4 y APEC. También es el sexto país exportador y el octavo importador. '+
'<p><center><img src="img/japanese.jpg" width="280" height="180"></center></p>'+
'<p>Para más información: <a href="http://es.wikipedia.org/wiki/Jap%C3%B3n">http://es.wikipedia.org/wiki/Jap%C3%B3n</a></p>'+
    '</div>'+
    '</div>';

var España = '<div id="content">'+
    '<div id="siteNotice">'+
    '</div>'+
    '<h2 id="firstHeading" class="firstHeading">España</h2>'+
    '<div id="bodyContent">'+
'España o el Reino de España es un país soberano, miembro de la Unión Europea, constituido en Estado social y democrático de derecho y cuya forma de gobierno es la monarquía parlamentaria. Su territorio está organizado en 17 comunidades autónomas y dos ciudades autónomas. Su capital es la villa de Madrid.'+
'Es un país bicontinental que se encuentra situado tanto en Europa occidental como en el norte de África. En Europa ocupa la mayor parte de la península Ibérica, conocida como España peninsular, y el archipiélago de las islas Baleares (en el mar Mediterráneo occidental); en África se hallan las ciudades de Ceuta (en la península Tingitana) y Melilla (en el cabo de Tres Forcas), las islas Canarias (en el océano Atlántico nororiental), las islas Chafarinas, el peñón de Vélez de la Gomera, las islas Alhucemas y la isla de Alborán. El municipio de Llivia, en los Pirineos, constituye un enclave rodeado totalmente por territorio francés. Completa el conjunto de territorios una serie de islas e islotes frente a las propias costas peninsulares. Tiene una extensión de 504.645 km², siendo el cuarto país más extenso del continente, tras Rusia, Ucrania y Francia. Con una altitud media de 650 metros es uno de los países más montañosos de Europa. Su población es de 47.190.493 habitantes, según datos del padrón municipal de 2011. El territorio peninsular comparte fronteras terrestres con Francia y con el principado de Andorra al norte, con Portugal al oeste y con el territorio británico de Gibraltar al sur. En sus territorios africanos, comparte fronteras terrestres y marítimas con Marruecos. Comparte con Francia la soberanía sobre la isla de los Faisanes en la desembocadura del río Bidasoa y cinco facerías pirenaicas.'+
'De acuerdo con la Constitución española, el castellano o español es la lengua oficial del Estado y todos los españoles tienen el deber de conocerla y el derecho a usarla. En 2006, era la lengua materna del 89% de los españoles. Otras lenguas, también españolas, son reconocidas como cooficiales en diversas comunidades autónomas, conforme a los estatutos de autonomía.'+
'La economía española es la 14.ª economía mundial en términos de PIB, por delante de Indonesia y de Turquía, y según Eurostat, el PIB per cápita español se situó, en 2011, en el 99% de la media de la Unión Europea, por delante de Chipre. Es el 8.º país del mundo con mayor presencia de multinacionales, tras Japón y por delante de Australia, Hong Kong y Canadá. Además, según el informe de 2010 de la ONU, tiene un índice de desarrollo humano de 0.878, el 23.º mayor del mundo, por delante de otros grandes países europeos, como Italia, Reino Unido o Grecia.5'+
'<p><center><img src="img/spain.jpg" width="280" height="180"></center></p>'+
'<p>Para más información: <a href="http://es.wikipedia.org/wiki/Espa%C3%B1a">http://es.wikipedia.org/wiki/Espa%C3%B1a</a></p>'+
'</div>'+
'</div>';


var China = '<div id="content">'+
    '<div id="siteNotice">'+
    '</div>'+
    '<h2 id="firstHeading" class="firstHeading">China</h2>'+
    '<div id="bodyContent">'+
'La República Popular China, o simplemente China, es un país ubicado en el este del continente asiático. Con una superficie de 9 596 961 km2 y límites con 14 países, es el 4.º más grande del mundo, así como el más poblado con una población de 1 339 724 852 habitantes. Tiene capital en Pekín, pero la ciudad más poblada es Shanghái. El territorio está dividido en 22 provincias, 5 regiones autónomas, 4 municipalidades y 2 regiones administrativas especiales (Hong Kong y Macao). Es miembro de la Organización de las Naciones Unidas (ONU) y del Foro de Cooperación Económica Asia-Pacífico (APEC).'+
'China es la 2.ª economía y potencia comercial más grande del mundo. Su régimen político está inspirado en el comunismo soviético, siendo un estado unipartidista, liderado por el Partido Comunista de China, sin embargo económicamente es un estado capitalista desde las reformas de 1978 a cargo de Deng Xiaoping. Desde el año 2003 hasta la actualidad (2012) gobierna Hu Jintao como presidente y Wen Jiabao como primer ministro. Ha tenido un crecimiento económico muy rápido, tanto que es posible que sobrepase a la economía estadounidense hacia el año 2016.'+
'Tradicionalmente, el nombre China se deriva de la dinastía Qin, que reinó desde el 221 hasta el 206 antes de Cristo. Sin embargo, ya en el siglo IV a. C., cuando Alejandro Magno (356-323 a. C.) fue a la conquista de Persia y la India, el territorio más allá de los Himalayas ya era denominado Tsinstán (el ‘país de los tsin’ ?así como Afganistán es el ‘país de los afganos’ o Kazajistán es el ‘país de los kazajos’?).'+
'Por lo tanto el nombre surge del nombre de la provincia central de Shaanxi, en torno a la cual el actual país se fue incrementando gradualmente.'+
'<p><center><img src="img/china.jpg" width="280" height="180"></center></p>'+
'<p>Para más información: <a href="http://es.wikipedia.org/wiki/Rep%C3%BAblica_Popular_China">http://es.wikipedia.org/wiki/Rep%C3%BAblica_Popular_China</a></p>'+
'</div>'+
'</div>';

var Usa = '<div id="content">'+
    '<div id="siteNotice">'+
    '</div>'+
    '<h2 id="firstHeading" class="firstHeading">Estados Unidos</h2>'+
    '<div id="bodyContent">'+'Estados Unidos de América (en inglés: United States of America; abreviado USA o US); de manera abreviada, Estados Unidos, EUA o EE. UU.; es una república federal constitucional compuesta por 50 estados y un distrito federal. La mayor parte del país se ubica en el centro de América del Norte —donde se encuentran sus 48 estados contiguos y Washington D. C., el distrito de la capital—, entre los océanos Pacífico y el Atlántico, limita con Canadá al norte y con México al sur. El estado de Alaska está en el noroeste del continente, limitando con Canadá al este y separado de Rusia al oeste por el estrecho de Bering. El estado de Hawái es un archipiélago polinesio en medio del océano Pacífico, y es el único estado estadounidense que no se encuentra en América. El país también posee varios territorios en el mar Caribe y en el Pacífico.'+
'Con 9,83 millones de km² y con más de 308 millones de habitantes, es el tercer o cuarto país más grande por área total y el tercero más grande tanto por la superficie terrestre como por población. Es una de las naciones del mundo étnicamente más diversas y multiculturales, producto de la inmigración a gran escala. Es, por otro lado, la economía nacional más grande del mundo, con un PIB estimado en 14,3 billones de dólares (una cuarta parte del PIB global nominal) y una quinta parte del PIB global en paridad de poder adquisitivo.'+
'Los pueblos indígenas de origen asiático han habitado lo que hoy es el territorio continental de los Estados Unidos por miles de años. Esta población amerindia fue reducida por las enfermedades y la guerra después del primer contacto con los europeos. Estados Unidos fue fundado por trece colonias británicas, situadas a lo largo de la costa atlántica. El 4 de julio de 1776, emitieron la Declaración de Independencia, que proclamó su derecho a la libre autodeterminación y el establecimiento de una unión cooperativa. Los estados rebeldes derrotaron al Imperio británico en la guerra de independencia, la primera guerra colonial de independencia exitosa.9 La actual Constitución de los Estados Unidos fue adoptada el 17 de septiembre de 1787; su ratificación al año siguiente hizo a los estados parte de una sola república con un gobierno central fuerte. La Carta de Derechos, que comprende diez enmiendas constitucionales que garantizan muchos derechos civiles fundamentales y las libertades, fue ratificada en 1791.'+
'En el siglo XIX, los Estados Unidos adquirieron territorios de Francia, España, Reino Unido, México y Rusia, además de anexarse la República de Texas y la República de Hawái. En la década de 1860, las disputas entre el sur agrario y el norte industrial sobre los derechos de los estados y la abolición de la esclavitud provocaron la Guerra de Secesión. La victoria del norte evitó una división permanente del país y condujo al final de la esclavitud legal. Para la década de 1870, la economía nacional era la más grande del mundo y la guerra hispano-estadounidense y la Primera Guerra Mundial confirmaron el estatus del país como una potencia militar. Después de la Segunda Guerra Mundial, surgió como el primer país con armas nucleares y un miembro permanente del Consejo de Seguridad de las Naciones Unidas. El final de la Guerra Fría y la disolución de la Unión Soviética dejaron a los Estados Unidos como la única superpotencia. El país representa dos quintas partes del gasto militar mundial y es una fuerza económica, política y cultural, líder en el mundo.'+
'<p><center><img src="img/usa.jpg" width="280" height="180"></center></p>'+
'<p>Para más información: <a href="http://es.wikipedia.org/wiki/Estados_Unidos">http://es.wikipedia.org/wiki/Estados_Unidos</a></p>'+
'</div>'+
'</div>';


var Egipto = '<div id="content">'+
    '<div id="siteNotice">'+
    '</div>'+
    '<h2 id="firstHeading" class="firstHeading">Egipto</h2>'+
    '<div id="bodyContent">'+
    'La República Árabe de Egipto, es un país de Oriente Próximo, situado en el extremo noreste de África, que incluye la península del Sinaí (que pertenece al continente asiático). La mayor parte de su superficie la integra el desierto del Sahara, sólo habitado en torno a los oasis. Su capital es El Cairo.'+
'Es uno de los países con más población de África y Oriente Medio, cuya mayor parte se asienta en las riberas del río Nilo y en el delta donde están las zonas de tierra fértil. Casi la mitad de los egipcios viven en áreas urbanas, sobre todo en los centros densamente poblados de El Cairo y Alejandría.'+
'Egipto es famoso por su civilización antigua y sus monumentos, como las pirámides y la gran esfinge; la ciudad meridional de Luxor contiene un gran número de restos antiguos, tales como el templo de Karnak y el Valle de los Reyes. Hoy Egipto es un centro político y cultural importante del Oriente Próximo.'+
'<p><center><img src="img/egipto.jpg" width="280" height="180"></center></p>'+
'<p>Para más información: <a href="http://es.wikipedia.org/wiki/Egipto">http://es.wikipedia.org/wiki/Egipto</a></p>'+
'</div>'+
'</div>';


var infowindowJapon = new google.maps.InfoWindow({
    content: Japon
});

var infowindowEspaña= new google.maps.InfoWindow({
    content: España
});

var infowindowChina= new google.maps.InfoWindow({
    content: China
});
var infowindowUsa= new google.maps.InfoWindow({
    content: Usa
});
var infowindowEgipto= new google.maps.InfoWindow({
    content: Egipto
});

google.maps.event.addListener(markerJapon, 'click', function() {
  infowindowJapon.open(map,markerJapon);
});
  
 
google.maps.event.addListener(markerEspaña, 'click', function() {
  infowindowEspaña.open(map,markerEspaña);
});

google.maps.event.addListener(markerChina, 'click', function() {
  infowindowChina.open(map,markerChina);
});

google.maps.event.addListener(markerUsa, 'click', function() {
  infowindowUsa.open(map,markerUsa);
});
  google.maps.event.addListener(markerEgi, 'click', function() {
  infowindowEgipto.open(map,markerEgi);
});
      }
     
   

