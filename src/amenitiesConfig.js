import checkInIcon from './assets/lock-open.svg';
import checkOutIcon from './assets/checkout-icon.svg';
import houseRulesIcon from './assets/houserules-icon.svg';
import garbageIcon from './assets/recycle-bin-icon.svg';
import starterIcon from './assets/gift.svg';
import poolIcon from './assets/poolIcon.svg';
import tennisIcon from './assets/tennis-icon.svg';
import groceryIcon from './assets/grocery-trolley.svg';
import tvIcon from './assets/television-icon.svg';
import chargeIcon from './assets/charge.svg';
import washerIcon from './assets/washing-machine-icon.svg';
import dishwasherIcon from './assets/dishwasher.svg';
import balconyIcon from './assets/bacolony.svg';
import wifiIcon from './assets/wifi.svg';
import bbqIcon from './assets/bbqIcon.svg';
import transportIcon from './assets/transportIcon.svg';

import { CheckIn } from './components/amenities/CheckIn';
import { CheckOut } from './components/amenities/CheckOut';
import { Houserules } from './components/amenities/Houserules';
import { StarterPack } from './components/amenities/StarterPack';
import { Balcony } from './components/amenities/Balcony';
import { Barbeque } from './components/amenities/Barbeque';
import { Charge } from './components/amenities/Charge';
import { Dishwasher } from './components/amenities/Dishwasher';
import { Garbage } from './components/amenities/Garbage';
import { GroceryStore } from './components/amenities/GroceryStore';
import { Laundry } from './components/amenities/Laundry';
import { Pool } from './components/amenities/Pool';
import { Tennis } from './components/amenities/Tennis';
import { Transportation } from './components/amenities/Transportation';
import { Tv } from './components/amenities/Tv';
import { Wifi } from './components/amenities/Wifi';

// Delad källa för App.jsx (villkorlig rendering) och IconsNavbar.jsx (navigeringsknappar).
// key måste vara unik och används som activeComponent-värde i App.jsx state.
export const AMENITIES = [
  { key: 'Houserules', label: 'House Rules', icon: houseRulesIcon, Component: Houserules },
  { key: 'CheckIn', label: 'Check In', icon: checkInIcon, Component: CheckIn },
  { key: 'CheckOut', label: 'Check Out', icon: checkOutIcon, Component: CheckOut },
  { key: 'StarterPack', label: 'Starter Pack', icon: starterIcon, Component: StarterPack },
  { key: 'Balcony', label: 'Balcony', icon: balconyIcon, Component: Balcony },
  { key: 'Barbeque', label: 'Barbeque', icon: bbqIcon, Component: Barbeque },
  { key: 'Charge', label: 'Charge', icon: chargeIcon, Component: Charge },
  { key: 'Dishwasher', label: 'Dishwash', icon: dishwasherIcon, Component: Dishwasher },
  { key: 'Garbage', label: 'Garbage', icon: garbageIcon, Component: Garbage },
  { key: 'GroceryStores', label: 'Grocery Stores', icon: groceryIcon, Component: GroceryStore },
  { key: 'Laundry', label: 'Laundry', icon: washerIcon, Component: Laundry },
  { key: 'Pool', label: 'Pool', icon: poolIcon, Component: Pool },
  { key: 'Tennis', label: 'Tennis', icon: tennisIcon, Component: Tennis },
  { key: 'Transportation', label: 'Transport', icon: transportIcon, Component: Transportation },
  { key: 'TV', label: 'TV', icon: tvIcon, Component: Tv },
  { key: 'Wifi', label: 'Wifi', icon: wifiIcon, Component: Wifi },
];
