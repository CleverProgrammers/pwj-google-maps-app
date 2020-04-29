let map;
let markers = [];
let infoWindow;
let locationSelect;
const API_URL = "http://localhost:3001/api/stores";

const onEnter = (e) => {
    if(e.key == "Enter") {
        getStores();
    }
}

const getStores = () => {
    const zipCode = document.getElementById('zip-code-input').value;
    const fullUrl = `${API_URL}?zip_code=${zipCode}`;
    fetch(fullUrl)
    .then((response)=>{
        if(response.status == 200){
            return response.json();
        } else {
            throw new Error(response.status);
        }
    }).then((data)=>{
        setData(data);
    })
}

const setData = (data) => {
    if(data.length == 0) {
        clearLocations();
        noStoresFound();
    } else {
        setStoresList(data);
        searchLocationsNear(data);
        setOnClickListener();
    }
}

initMap = () => {
    var losAngeles = {lat: 34.063380, lng: -118.358080};
    map = new google.maps.Map(document.getElementById('map'), {
        center: losAngeles,
        zoom: 11,
        mapTypeId: 'roadmap',
        mapTypeControl: false,
        fullscreenControl: false,
        streetViewControl: false
    });
    infoWindow = new google.maps.InfoWindow
}

const noStoresFound = () => {
    const html = `
    <div class="no-stores-found">
        No Stores Found
    </div>
    `
    document.querySelector('.stores-list').innerHTML = html;
}

function setOnClickListener() {
    var storeElements = document.querySelectorAll('.store-container');
    storeElements.forEach((elem, index)=>{
        elem.addEventListener('mouseover', ()=>{
            elem.querySelector('.store-number').classList.add('store-number-hover-state')
        })
        elem.addEventListener('mouseout', ()=>{
            elem.querySelector('.store-number').classList.remove('store-number-hover-state')
        })
        elem.addEventListener('click', function(){
            new google.maps.event.trigger(markers[index], 'click');
        })
    })
}

const setStoresList = (stores) => {
    let storesHtml = '';
    stores.map((store, index)=>{
        storesHtml += `
        <div class="store-container">
            <div class="store-container-background">
                <div class="store-info-container">
                    <div class="store-address">
                        <span>${store["addressLines"][0]}</span>
                        <span>${store["addressLines"][1]}</span>
                    </div>
                    <div class="store-phone-number">${store["phoneNumber"]}</div>
                </div>
                <div class="store-number-container">
                    <div class="store-number">
                        ${index+1}
                    </div>
                </div>
            </div>
        </div>
        `
    })
    document.querySelector('.stores-list').innerHTML = storesHtml;
}

const clearLocations = () => {
    infoWindow.close();
    for (var i = 0; i < markers.length; i++) {
        markers[i].setMap(null);
    }
    markers.length = 0;
}

const searchLocationsNear = (stores) => {
    clearLocations();
    var bounds = new google.maps.LatLngBounds();
    stores.map((store, index)=>{
        var latlng = new google.maps.LatLng(
            parseFloat(store.location["coordinates"][1]),
            parseFloat(store.location["coordinates"][0]));
        let name = store["storeName"];
        let address = store["addressLines"][0];
        let fullAddress = `${store["addressLines"][0]} ${store["addressLines"][1]}`;
        bounds.extend(latlng);
        createMarker(latlng, name, address, fullAddress, index+1);
    });
    map.fitBounds(bounds);
}

const createMarker = (latlng, name, address, fullAddress, label) =>  {

    let googleUrl = new URL("https://www.google.com/maps/dir/");
    googleUrl.searchParams.append('api', '1');
    googleUrl.searchParams.append('destination', fullAddress);

    const html = `
        <div class="store-info-window">
            <div class="store-info-name">
                ${name}
            </div>
            <div class="store-info-open-status">
                Open until 6:00 PM
            </div>
            <div class="store-info-address">
                <div class="icon">
                    <i class="fas fa-location-arrow"></i>
                </div>
                <span>
                    <a target="_blank" href="${googleUrl.href}">${address}</a>
                </span>
            </div>
            <div class="store-info-phone">
                <div class="icon">
                    <i class="fas fa-phone-alt"></i>
                </div>
                <span><a href="tel:310-659-9562">310-659-9562</a></span>
            </div>
        </div>
    `
    var marker = new google.maps.Marker({
        map: map,
        position: latlng,
        label: label.toString()
    });
    google.maps.event.addListener(marker, 'click', function () {
        infoWindow.setContent(html);
        infoWindow.open(map, marker);
    });
    markers.push(marker);
}