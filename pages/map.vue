<template>
  <ClientOnly>
    <YandexMap
      class="map"
      :zoom="9"
      :coordinates="[30.264981955459618, 59.9567962610097]"
      :behaviors="['drag', 'multiTouch']"
      :controls="['zoomControl', 'geolocationControl']"
      @created="init"
    />
  </ClientOnly>
</template>

<script setup>
const props = defineProps({
  polygon: {
    type: Object,
    default: () => ({})
  }
})

let myMap = null

// const { data } = await useAsyncData(() => $fetch(`/api/map-zones`, {}))
const data = {}

// const createPolygon = () => {
//   if (!props.polygon.coords?.length && !props.polygon.revertCoords?.length) return
//
//   const coords =
//     props.polygon.coords ||
//     props.polygon.revertCoords.map(coord => {
//       ;[coord[0], coord[1]] = [coord[1], coord[0]]
//       return coord
//     })
//
//   const polygon = new ymaps.Polygon(
//     [coords],
//     {
//       hintContent: props.polygon.hint
//     },
//     {
//       fillColor: '#ff0000',
//       strokeColor: '#ff0000',
//       strokeWidth: 2,
//       fillOpacity: 0.5
//     }
//   )
//
//   myMap.geoObjects.add(polygon)
// }

const init = mapClass => {
  myMap = mapClass

  ymaps.ready(() => {
    const deliveryPoint = new ymaps.GeoObject({
        geometry: { type: 'Point' },
        properties: { iconCaption: 'Адрес' }
      }, {
        preset: 'islands#blackDotIconWithCaption',
        draggable: true,
        iconCaptionMaxWidth: '215'
      })

    const searchControl = new ymaps.control.SearchControl({
      options: {
        useMapBounds: true,
        strictBounds: true,
        noPlacemark: true,
        placeholderContent: 'Введите адрес доставки'
      }
    });

    myMap.geoObjects.add(deliveryPoint);
    myMap.controls.add(searchControl);

    const deliveryZones = ymaps.geoQuery(data.value).addToMap(myMap);
    // Задаём цвет и контент балунов полигонов.
    deliveryZones.each(function (obj) {
      obj.options.set({
        fillColor: obj.properties.get('fill'),
        fillOpacity: obj.properties.get('fill-opacity'),
        strokeColor: obj.properties.get('stroke'),
        strokeWidth: obj.properties.get('stroke-width'),
        strokeOpacity: obj.properties.get('stroke-opacity')
      });
      obj.properties.set('balloonContent', obj.properties.get('description'));
    });

    // Проверим попадание результата поиска в одну из зон доставки.
    searchControl.events.add('resultshow', function (e) {
      highlightResult(searchControl.getResultsArray()[e.get('index')]);
    });

    // Проверим попадание метки геолокации в одну из зон доставки.
    myMap.controls.get('geolocationControl').events.add('locationchange', function (e) {
      highlightResult(e.get('geoObjects').get(0));
    });

    // При перемещении метки сбрасываем подпись, содержимое балуна и перекрашиваем метку.
    deliveryPoint.events.add('dragstart', function () {
      deliveryPoint.properties.set({ iconCaption: '', balloonContent: '' });
      deliveryPoint.options.set('iconColor', 'black');
    });

    // По окончании перемещения метки вызываем функцию выделения зоны доставки.
    deliveryPoint.events.add('dragend', function () {
      highlightResult(deliveryPoint);
    });

    function highlightResult(obj) {
      // Сохраняем координаты переданного объекта.
      var coords = obj.geometry.getCoordinates(),
        // Находим полигон, в который входят переданные координаты.
        polygon = deliveryZones.searchContaining(coords).get(0);

      if (polygon) {
        // Уменьшаем прозрачность всех полигонов, кроме того, в который входят переданные координаты.
        deliveryZones.setOptions('fillOpacity', 0.4);
        polygon.options.set('fillOpacity', 0.8);
        // Перемещаем метку с подписью в переданные координаты и перекрашиваем её в цвет полигона.
        deliveryPoint.geometry.setCoordinates(coords);
        deliveryPoint.options.set('iconColor', polygon.properties.get('fill'));
        // Задаем подпись для метки.
        if (typeof(obj.getThoroughfare) === 'function') {
          setData(obj);
        } else {
          // Если вы не хотите, чтобы при каждом перемещении метки отправлялся запрос к геокодеру,
          // закомментируйте код ниже.
          ymaps.geocode(coords, {results: 1}).then(function (res) {
            var obj = res.geoObjects.get(0);
            setData(obj);
          });
        }
      } else {
        // Если переданные координаты не попадают в полигон, то задаём стандартную прозрачность полигонов.
        deliveryZones.setOptions('fillOpacity', 0.4);
        // Перемещаем метку по переданным координатам.
        deliveryPoint.geometry.setCoordinates(coords);
        // Задаём контент балуна и метки.
        deliveryPoint.properties.set({
          iconCaption: 'Доставка транспортной компанией',
          balloonContent: 'Cвяжитесь с оператором',
          balloonContentHeader: ''
        });
        // Перекрашиваем метку в чёрный цвет.
        deliveryPoint.options.set('iconColor', 'black');
      }

      function setData(obj){
        let address = [obj.getThoroughfare(), obj.getPremiseNumber(), obj.getPremise()].join(' ');
        if (address.trim() === '') {
          address = obj.getAddressLine();
        }

        let price = polygon.properties.get('description');
        price = price.match(/<strong>(.+)<\/strong>/)[1];
        deliveryPoint.properties.set({
          iconCaption: address,
          balloonContent: address,
          balloonContentHeader: price
        });
      }
    }

  })
}

</script>


<style lang="scss" scoped >
.map {
  width: 100%;
  height: 28rem;
}
</style>

<style lang="scss">


.ymaps-2-1-79-events-pane {
  //pointer-events: none !important;
}

.ymaps-2-1-79-default-cluster {
  //pointer-events: none;
}

//.ymaps-2-1-79-gotoymaps__container,
//.ymaps-2-1-79-map-copyrights-promo,
//.ymaps-2-1-79-gototech {
//  display: none !important;
//}
</style>
