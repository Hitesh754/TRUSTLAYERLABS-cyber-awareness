import type { CyberCrimeStation } from '../data/cyberCrimeStations';
import {
  CYBER_CRIME_STATIONS,
  STATIONS_BY_DISTRICT,
  STATIONS_BY_PINCODE,
  STATIONS_BY_STATE,
} from '../data/cyberCrimeStations';
import * as StateModules from '../data/india/states/states';
import * as UnionTerritoryModules from '../data/india/union-territories/union-territories';

type RegionData = Record<string, any>;
type RegionStation = Record<string, any>;

type RegionOption = {
  key: string;
  name: string;
  type: 'state' | 'union-territory';
  module: RegionData;
};

const normalizeQuery = (value: string) => value.trim().toLowerCase();

const REGION_MODULES: Record<string, RegionData> = {
  ...StateModules,
  ...UnionTerritoryModules,
};

const REGION_OPTIONS: RegionOption[] = Object.keys(REGION_MODULES)
  .map((key) => {
    const module = REGION_MODULES[key];
    const name = module?.profile?.name?.toString?.();

    if (!name) {
      return null;
    }

    return {
      key,
      name,
      type: key in StateModules ? 'state' : 'union-territory',
      module,
    };
  })
  .filter((option): option is RegionOption => Boolean(option));

const REGION_MAP: Record<string, RegionData> = REGION_OPTIONS.reduce(
  (acc, option) => {
    acc[normalizeQuery(option.name)] = option.module;
    return acc;
  },
  {} as Record<string, RegionData>
);

export function getRegionOptions() {
  return REGION_OPTIONS.map(({ name, type }) => ({ name, type }));
}

export function getRegionByName(name: string) {
  return REGION_MAP[normalizeQuery(name)];
}

export function getRegionNames() {
  return REGION_OPTIONS.map((option) => option.name);
}

export function searchByRegion(region: string): CyberCrimeStation[] | RegionStation[] {
  return searchByState(region);
}

export function getRegionStationRecords(region: string): RegionStation[] {
  if (!region.trim()) {
    return [];
  }

  const regionModule = getRegionByName(region);
  if (!regionModule) {
    return [];
  }

  return (
    regionModule.cyberPoliceStations ??
    regionModule.REGIONAL_CYBER_POLICE_UNITS ??
    regionModule.LADAKH_CYBER_CRIME_STATIONS ??
    []
  );
}

export function searchByPincode(pincode: string): CyberCrimeStation[] {
  if (!pincode.trim()) {
    return [];
  }

  const key = normalizeQuery(pincode);
  return STATIONS_BY_PINCODE[key] ?? [];
}

export function searchByState(state: string): CyberCrimeStation[] | RegionStation[] {
  if (!state.trim()) {
    return [];
  }

  const regionStations = getRegionStationRecords(state);
  if (regionStations.length) {
    return regionStations;
  }

  const key = normalizeQuery(state);
  return STATIONS_BY_STATE[key] ?? [];
}

export function searchByDistrict(district: string): CyberCrimeStation[] {
  if (!district.trim()) {
    return [];
  }

  const key = normalizeQuery(district);
  return STATIONS_BY_DISTRICT[key] ?? [];
}

export function globalSearch(query: string): CyberCrimeStation[] {
  const normalized = normalizeQuery(query);
  if (!normalized) {
    return [];
  }

  return CYBER_CRIME_STATIONS.filter((station) => {
    return (
      station.pincode.toLowerCase().includes(normalized) ||
      station.state.toLowerCase().includes(normalized) ||
      station.district.toLowerCase().includes(normalized) ||
      station.cyberCell.toLowerCase().includes(normalized) ||
      station.address.toLowerCase().includes(normalized) ||
      (station.phone?.toLowerCase().includes(normalized) ?? false) ||
      (station.email?.toLowerCase().includes(normalized) ?? false)
    );
  });
}

export function getAllCyberCrimeStations(): CyberCrimeStation[] {
  return CYBER_CRIME_STATIONS;
}
