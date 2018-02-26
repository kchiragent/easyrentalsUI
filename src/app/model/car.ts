export class Car{
  address:address;
  amount: number=0;
  audioPlayer: boolean=true;
  bluetooth: boolean=true;
  contactNum: number=0;
  drivingLicenseNumber: string;
  drivingLicenseState: string;
  gps: boolean=true;
  hybrid: boolean=true;
  licenseNum: string;
  make: string;
  maximumDistance: string;
  model: string;
  odometer: number=0;
  petFriendly: boolean=true;
  style: string;
  sunRoof: boolean=true;
  transmission: string;
  withDriver: boolean=true;
  withoutDriver: boolean=true;
  year: string;
};

export class address{
    geolocation: geo;
    city: string;
    postalCode: 0;
    state: string;
    street: string;
  
};

export class geo{
    latitude: number=0;
    longitude: number=0;

}