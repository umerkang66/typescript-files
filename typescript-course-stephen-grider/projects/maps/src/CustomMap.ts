// Instructions to every other class, if they want to show their pointer on the map
export interface MapPointable {
  location: {
    lat: number;
    lng: number;
  };
  markerContent(): string;
}

export class CustomMap {
  private mapDiv: HTMLElement | null;
  private googleMap: google.maps.Map<Element> | null = null;

  constructor(mapDivId: string) {
    this.mapDiv = document.getElementById(mapDivId);

    if (this.mapDiv) {
      this.googleMap = new google.maps.Map(this.mapDiv, {
        zoom: 1,
        center: {
          lat: 0,
          lng: 0,
        },
      });
    }
  }

  addMarker(mapPointable: MapPointable): void {
    let marker: google.maps.Marker | null = null;

    if (this.googleMap) {
      marker = new google.maps.Marker({
        map: this.googleMap,
        position: {
          lat: mapPointable.location.lat,
          lng: mapPointable.location.lng,
        },
      });
    }

    // Show window on click on marker
    if (marker) {
      marker.addListener('click', () => {
        // Create the info window
        const infoWindow = new google.maps.InfoWindow({
          content: mapPointable.markerContent(),
        });

        // Open the info window
        // On which you want to open the window
        if (this.googleMap) infoWindow.open(this.googleMap);
      });
    }
  }
}
