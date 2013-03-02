
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
      title:"Jap�n"
  });
  
  var markerEspa�a = new google.maps.Marker({
      position: LatEsp,
      map: map,
      title:"Espa�a"
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
    '<h2 id="firstHeading" class="firstHeading">Jap�n</h2>'+
    '<div id="bodyContent">'+
    '<p>Jap�n (Nihon o Nippon, oficialmente Nihon-koku  o Nippon-koku, Estado de Jap�n; significado literal: el pa�s del origen del sol),' +
'es un pa�s insular del este de Asia. Est� ubicado entre el oc�ano Pac�fico y el mar del Jap�n, al este de China, Rusia y la pen�nsula de Corea. '+
'Las principales islas de Jap�n son Honshu, Hokkaido, Kyushu y Shikoku, que forman el 97% de la superficie total del pa�s, y por otras 6.848 '+
'islas menores adyacentes. Tiene una poblaci�n de 127 millones de personas, la d�cima m�s numerosa del mundo. El �rea metropolitana de'+
'Tokio, que incluye a la ciudad capital de Tokio y las prefecturas de sus alrededores, es el �rea urbana m�s grande del mundo en t�rminos de '+
'poblaci�n, albergando a m�s de 30 millones de habitantes. Es el segundo pa�s m�s poblado de Asia Oriental, despu�s de China. '+
'Las islas de Jap�n estuvieron habitadas desde el per�odo Paleol�tico superior. Las primeras menciones escritas acontecieron de manera breve '+
'en libros de historia de China del siglo I.4 La influencia del mundo exterior seguida de largos per�odos de aislamiento ha caracterizado la historia '+
'de Jap�n. Desde que se adopt� una constituci�n en 1947, la forma de gobierno de Jap�n ha sido la de una monarqu�a constitucional, con un '+
'emperador y un parlamento elegido, conocido como la Dieta. '+
'Conocido como �La tierra del sol naciente�, es una de las mayores potencias econ�micas del mundo. Es miembro de la Organizaci�n de las '+
'Naciones Unidas, G8, G4 y APEC. Tambi�n es el sexto pa�s exportador y el octavo importador. '+
'<p><center><img src="img/japanese.jpg" width="280" height="180"></center></p>'+
'<p>Para m�s informaci�n: <a href="http://es.wikipedia.org/wiki/Jap%C3%B3n">http://es.wikipedia.org/wiki/Jap%C3%B3n</a></p>'+
    '</div>'+
    '</div>';

var Espa�a = '<div id="content">'+
    '<div id="siteNotice">'+
    '</div>'+
    '<h2 id="firstHeading" class="firstHeading">Espa�a</h2>'+
    '<div id="bodyContent">'+
'Espa�a o el Reino de Espa�a es un pa�s soberano, miembro de la Uni�n Europea, constituido en Estado social y democr�tico de derecho y cuya forma de gobierno es la monarqu�a parlamentaria. Su territorio est� organizado en 17 comunidades aut�nomas y dos ciudades aut�nomas. Su capital es la villa de Madrid.'+
'Es un pa�s bicontinental que se encuentra situado tanto en Europa occidental como en el norte de �frica. En Europa ocupa la mayor parte de la pen�nsula Ib�rica, conocida como Espa�a peninsular, y el archipi�lago de las islas Baleares (en el mar Mediterr�neo occidental); en �frica se hallan las ciudades de Ceuta (en la pen�nsula Tingitana) y Melilla (en el cabo de Tres Forcas), las islas Canarias (en el oc�ano Atl�ntico nororiental), las islas Chafarinas, el pe��n de V�lez de la Gomera, las islas Alhucemas y la isla de Albor�n. El municipio de Llivia, en los Pirineos, constituye un enclave rodeado totalmente por territorio franc�s. Completa el conjunto de territorios una serie de islas e islotes frente a las propias costas peninsulares. Tiene una extensi�n de 504.645 km�, siendo el cuarto pa�s m�s extenso del continente, tras Rusia, Ucrania y Francia. Con una altitud media de 650 metros es uno de los pa�ses m�s monta�osos de Europa. Su poblaci�n es de 47.190.493 habitantes, seg�n datos del padr�n municipal de 2011. El territorio peninsular comparte fronteras terrestres con Francia y con el principado de Andorra al norte, con Portugal al oeste y con el territorio brit�nico de Gibraltar al sur. En sus territorios africanos, comparte fronteras terrestres y mar�timas con Marruecos. Comparte con Francia la soberan�a sobre la isla de los Faisanes en la desembocadura del r�o Bidasoa y cinco facer�as pirenaicas.'+
'De acuerdo con la Constituci�n espa�ola, el castellano o espa�ol es la lengua oficial del Estado y todos los espa�oles tienen el deber de conocerla y el derecho a usarla. En 2006, era la lengua materna del 89% de los espa�oles. Otras lenguas, tambi�n espa�olas, son reconocidas como cooficiales en diversas comunidades aut�nomas, conforme a los estatutos de autonom�a.'+
'La econom�a espa�ola es la 14.� econom�a mundial en t�rminos de PIB, por delante de Indonesia y de Turqu�a, y seg�n Eurostat, el PIB per c�pita espa�ol se situ�, en 2011, en el 99% de la media de la Uni�n Europea, por delante de Chipre. Es el 8.� pa�s del mundo con mayor presencia de multinacionales, tras Jap�n y por delante de Australia, Hong Kong y Canad�. Adem�s, seg�n el informe de 2010 de la ONU, tiene un �ndice de desarrollo humano de 0.878, el 23.� mayor del mundo, por delante de otros grandes pa�ses europeos, como Italia, Reino Unido o Grecia.5'+
'<p><center><img src="img/spain.jpg" width="280" height="180"></center></p>'+
'<p>Para m�s informaci�n: <a href="http://es.wikipedia.org/wiki/Espa%C3%B1a">http://es.wikipedia.org/wiki/Espa%C3%B1a</a></p>'+
'</div>'+
'</div>';


var China = '<div id="content">'+
    '<div id="siteNotice">'+
    '</div>'+
    '<h2 id="firstHeading" class="firstHeading">China</h2>'+
    '<div id="bodyContent">'+
'La Rep�blica Popular China, o simplemente China, es un pa�s ubicado en el este del continente asi�tico. Con una superficie de 9 596 961 km2 y l�mites con 14 pa�ses, es el 4.� m�s grande del mundo, as� como el m�s poblado con una poblaci�n de 1 339 724 852 habitantes. Tiene capital en Pek�n, pero la ciudad m�s poblada es Shangh�i. El territorio est� dividido en 22 provincias, 5 regiones aut�nomas, 4 municipalidades y 2 regiones administrativas especiales (Hong Kong y Macao). Es miembro de la Organizaci�n de las Naciones Unidas (ONU) y del Foro de Cooperaci�n Econ�mica Asia-Pac�fico (APEC).'+
'China es la 2.� econom�a y potencia comercial m�s grande del mundo. Su r�gimen pol�tico est� inspirado en el comunismo sovi�tico, siendo un estado unipartidista, liderado por el Partido Comunista de China, sin embargo econ�micamente es un estado capitalista desde las reformas de 1978 a cargo de Deng Xiaoping. Desde el a�o 2003 hasta la actualidad (2012) gobierna Hu Jintao como presidente y Wen Jiabao como primer ministro. Ha tenido un crecimiento econ�mico muy r�pido, tanto que es posible que sobrepase a la econom�a estadounidense hacia el a�o 2016.'+
'Tradicionalmente, el nombre China se deriva de la dinast�a Qin, que rein� desde el 221 hasta el 206 antes de Cristo. Sin embargo, ya en el siglo IV a. C., cuando Alejandro Magno (356-323 a. C.) fue a la conquista de Persia y la India, el territorio m�s all� de los Himalayas ya era denominado Tsinst�n (el �pa�s de los tsin� ?as� como Afganist�n es el �pa�s de los afganos� o Kazajist�n es el �pa�s de los kazajos�?).'+
'Por lo tanto el nombre surge del nombre de la provincia central de Shaanxi, en torno a la cual el actual pa�s se fue incrementando gradualmente.'+
'<p><center><img src="img/china.jpg" width="280" height="180"></center></p>'+
'<p>Para m�s informaci�n: <a href="http://es.wikipedia.org/wiki/Rep%C3%BAblica_Popular_China">http://es.wikipedia.org/wiki/Rep%C3%BAblica_Popular_China</a></p>'+
'</div>'+
'</div>';

var Usa = '<div id="content">'+
    '<div id="siteNotice">'+
    '</div>'+
    '<h2 id="firstHeading" class="firstHeading">Estados Unidos</h2>'+
    '<div id="bodyContent">'+'Estados Unidos de Am�rica (en ingl�s: United States of America; abreviado USA o US); de manera abreviada, Estados Unidos, EUA o EE. UU.; es una rep�blica federal constitucional compuesta por 50 estados y un distrito federal. La mayor parte del pa�s se ubica en el centro de Am�rica del Norte �donde se encuentran sus 48 estados contiguos y Washington D. C., el distrito de la capital�, entre los oc�anos Pac�fico y el Atl�ntico, limita con Canad� al norte y con M�xico al sur. El estado de Alaska est� en el noroeste del continente, limitando con Canad� al este y separado de Rusia al oeste por el estrecho de Bering. El estado de Haw�i es un archipi�lago polinesio en medio del oc�ano Pac�fico, y es el �nico estado estadounidense que no se encuentra en Am�rica. El pa�s tambi�n posee varios territorios en el mar Caribe y en el Pac�fico.'+
'Con 9,83 millones de km� y con m�s de 308 millones de habitantes, es el tercer o cuarto pa�s m�s grande por �rea total y el tercero m�s grande tanto por la superficie terrestre como por poblaci�n. Es una de las naciones del mundo �tnicamente m�s diversas y multiculturales, producto de la inmigraci�n a gran escala. Es, por otro lado, la econom�a nacional m�s grande del mundo, con un PIB estimado en 14,3 billones de d�lares (una cuarta parte del PIB global nominal) y una quinta parte del PIB global en paridad de poder adquisitivo.'+
'Los pueblos ind�genas de origen asi�tico han habitado lo que hoy es el territorio continental de los Estados Unidos por miles de a�os. Esta poblaci�n amerindia fue reducida por las enfermedades y la guerra despu�s del primer contacto con los europeos. Estados Unidos fue fundado por trece colonias brit�nicas, situadas a lo largo de la costa atl�ntica. El 4 de julio de 1776, emitieron la Declaraci�n de Independencia, que proclam� su derecho a la libre autodeterminaci�n y el establecimiento de una uni�n cooperativa. Los estados rebeldes derrotaron al Imperio brit�nico en la guerra de independencia, la primera guerra colonial de independencia exitosa.9 La actual Constituci�n de los Estados Unidos fue adoptada el 17 de septiembre de 1787; su ratificaci�n al a�o siguiente hizo a los estados parte de una sola rep�blica con un gobierno central fuerte. La Carta de Derechos, que comprende diez enmiendas constitucionales que garantizan muchos derechos civiles fundamentales y las libertades, fue ratificada en 1791.'+
'En el siglo XIX, los Estados Unidos adquirieron territorios de Francia, Espa�a, Reino Unido, M�xico y Rusia, adem�s de anexarse la Rep�blica de Texas y la Rep�blica de Haw�i. En la d�cada de 1860, las disputas entre el sur agrario y el norte industrial sobre los derechos de los estados y la abolici�n de la esclavitud provocaron la Guerra de Secesi�n. La victoria del norte evit� una divisi�n permanente del pa�s y condujo al final de la esclavitud legal. Para la d�cada de 1870, la econom�a nacional era la m�s grande del mundo y la guerra hispano-estadounidense y la Primera Guerra Mundial confirmaron el estatus del pa�s como una potencia militar. Despu�s de la Segunda Guerra Mundial, surgi� como el primer pa�s con armas nucleares y un miembro permanente del Consejo de Seguridad de las Naciones Unidas. El final de la Guerra Fr�a y la disoluci�n de la Uni�n Sovi�tica dejaron a los Estados Unidos como la �nica superpotencia. El pa�s representa dos quintas partes del gasto militar mundial y es una fuerza econ�mica, pol�tica y cultural, l�der en el mundo.'+
'<p><center><img src="img/usa.jpg" width="280" height="180"></center></p>'+
'<p>Para m�s informaci�n: <a href="http://es.wikipedia.org/wiki/Estados_Unidos">http://es.wikipedia.org/wiki/Estados_Unidos</a></p>'+
'</div>'+
'</div>';


var Egipto = '<div id="content">'+
    '<div id="siteNotice">'+
    '</div>'+
    '<h2 id="firstHeading" class="firstHeading">Egipto</h2>'+
    '<div id="bodyContent">'+
    'La Rep�blica �rabe de Egipto, es un pa�s de Oriente Pr�ximo, situado en el extremo noreste de �frica, que incluye la pen�nsula del Sina� (que pertenece al continente asi�tico). La mayor parte de su superficie la integra el desierto del Sahara, s�lo habitado en torno a los oasis. Su capital es El Cairo.'+
'Es uno de los pa�ses con m�s poblaci�n de �frica y Oriente Medio, cuya mayor parte se asienta en las riberas del r�o Nilo y en el delta donde est�n las zonas de tierra f�rtil. Casi la mitad de los egipcios viven en �reas urbanas, sobre todo en los centros densamente poblados de El Cairo y Alejandr�a.'+
'Egipto es famoso por su civilizaci�n antigua y sus monumentos, como las pir�mides y la gran esfinge; la ciudad meridional de Luxor contiene un gran n�mero de restos antiguos, tales como el templo de Karnak y el Valle de los Reyes. Hoy Egipto es un centro pol�tico y cultural importante del Oriente Pr�ximo.'+
'<p><center><img src="img/egipto.jpg" width="280" height="180"></center></p>'+
'<p>Para m�s informaci�n: <a href="http://es.wikipedia.org/wiki/Egipto">http://es.wikipedia.org/wiki/Egipto</a></p>'+
'</div>'+
'</div>';


var infowindowJapon = new google.maps.InfoWindow({
    content: Japon
});

var infowindowEspa�a= new google.maps.InfoWindow({
    content: Espa�a
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
  
 
google.maps.event.addListener(markerEspa�a, 'click', function() {
  infowindowEspa�a.open(map,markerEspa�a);
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
     
   

