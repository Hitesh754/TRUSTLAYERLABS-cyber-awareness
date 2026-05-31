import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  getAllCyberCrimeStations,
  getRegionByName,
  getRegionOptions,
  globalSearch,
  searchByDistrict,
  searchByPincode,
  searchByRegion,
} from '../../utils/cyberCrimeLocator';

function StationList({ stations }: { stations: any[] }) {
  if (!stations.length) {
    return (
      <div className="rounded-3xl border border-slate-700 bg-slate-950/80 p-6 text-slate-300">
        No stations found. Try a different PIN, state, district, or keyword.
      </div>
    );
  }

  return (
    <div className="grid gap-4">
      {stations.map((station) => {
        const title = station.cyberCell ?? station.name ?? station.stationName ?? station.unitName ?? 'Unknown unit';
        const label = station.cyberCell ? 'Cyber Cell' : 'Police Station';
        const location = [station.district, station.state ?? station.unionTerritory ?? station.enclave]
          .filter(Boolean)
          .join(', ');

        return (
          <div
            key={station.id ?? title}
            className="rounded-3xl border border-slate-700 bg-slate-950/90 p-6 shadow-[0_20px_80px_-40px_rgba(14,165,233,0.35)]"
          >
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-[0.35em] text-cyan-400">{label}</p>
                <h3 className="mt-2 text-xl font-semibold text-white">{title}</h3>
                {location ? (
                  <p className="mt-1 text-sm text-slate-300">{location}</p>
                ) : null}
              </div>
              {station.pincode ? (
                <span className="rounded-full bg-cyan-500/10 px-3 py-1 text-sm font-medium text-cyan-300">
                  {station.pincode}
                </span>
              ) : null}
            </div>

            <div className="mt-5 space-y-3 text-sm text-slate-300">
              {station.address ? <p>{station.address}</p> : null}
              {station.phone ? (
                <p><span className="font-semibold text-slate-100">Phone:</span> {station.phone}</p>
              ) : null}
              {station.email ? (
                <p><span className="font-semibold text-slate-100">Email:</span> {station.email}</p>
              ) : null}
            </div>
          </div>
        );
      })}
    </div>
  );
}

function humanizeKey(key: string) {
  return key
    .replace(/([A-Z])/g, ' $1')
    .replace(/[_-]+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
    .replace(/^./, (char) => char.toUpperCase());
}

function normalizeReportingResources(resources: any) {
  if (Array.isArray(resources)) {
    return resources;
  }
  if (!resources || typeof resources !== 'object') {
    return [];
  }

  return Object.entries(resources).map(([key, value]) => {
    if (typeof value === 'string') {
      return {
        resourceName: humanizeKey(key),
        description: value,
      };
    }

    if (value && typeof value === 'object') {
      const normalizedValue = value as Record<string, any>;
      return {
        resourceName: normalizedValue.resourceName ?? normalizedValue.name ?? humanizeKey(key),
        description:
          normalizedValue.description ?? normalizedValue.details ?? normalizedValue.summary ?? JSON.stringify(normalizedValue),
        contactOrUrl:
          normalizedValue.url ?? normalizedValue.link ?? normalizedValue.contact ?? normalizedValue.phone,
      };
    }

    return {
      resourceName: humanizeKey(key),
      description: String(value),
    };
  });
}

function normalizeEmergencyContacts(contacts: any) {
  if (Array.isArray(contacts)) {
    return contacts;
  }
  if (!contacts || typeof contacts !== 'object') {
    return [];
  }

  return Object.entries(contacts).map(([key, value]) => {
    if (typeof value === 'string') {
      return {
        service: humanizeKey(key),
        number: value,
      };
    }

    if (value && typeof value === 'object') {
      const normalizedValue = value as Record<string, any>;
      return {
        service: normalizedValue.service ?? humanizeKey(key),
        number: normalizedValue.number ?? normalizedValue.phone ?? normalizedValue.contact,
        remarks: normalizedValue.remarks ?? normalizedValue.notes ?? normalizedValue.description,
      };
    }

    return {
      service: humanizeKey(key),
      number: String(value),
    };
  });
}

function RegionSummary({ region }: { region: Record<string, any> }) {
  const profile = region.profile || {};
  const cyberPoliceStations = region.cyberPoliceStations ?? region.REGIONAL_CYBER_POLICE_UNITS ?? region.LADAKH_CYBER_CRIME_STATIONS ?? [];
  const cyberCells = region.cyberCells ?? [];
  const reportingResources = normalizeReportingResources(region.reportingResources);

  return (
    <div className="rounded-3xl border border-slate-700/90 bg-slate-900/80 p-6 shadow-sm">
      <p className="text-xs uppercase tracking-[0.35em] text-cyan-400">Region intelligence</p>
      <h3 className="mt-3 text-2xl font-semibold text-white">{profile.name ?? 'Region summary'}</h3>
      <div className="mt-4 grid gap-3 sm:grid-cols-2">
        {profile.capital ? (
          <div className="rounded-2xl bg-slate-950/80 p-4 text-slate-300">
            <p className="text-xs uppercase tracking-[0.35em] text-slate-400">Capital</p>
            <p className="mt-2 text-sm text-white">{Array.isArray(profile.capital) ? profile.capital.join(' / ') : profile.capital}</p>
          </div>
        ) : null}
        {profile.population ? (
          <div className="rounded-2xl bg-slate-950/80 p-4 text-slate-300">
            <p className="text-xs uppercase tracking-[0.35em] text-slate-400">Population</p>
            <p className="mt-2 text-sm text-white">{profile.population.toLocaleString()}</p>
          </div>
        ) : null}
        {profile.area ? (
          <div className="rounded-2xl bg-slate-950/80 p-4 text-slate-300">
            <p className="text-xs uppercase tracking-[0.35em] text-slate-400">Area</p>
            <p className="mt-2 text-sm text-white">{profile.area.toLocaleString()} km²</p>
          </div>
        ) : null}
        <div className="rounded-2xl bg-slate-950/80 p-4 text-slate-300">
          <p className="text-xs uppercase tracking-[0.35em] text-slate-400">Cyber coverage</p>
          <p className="mt-2 text-sm text-white">{cyberPoliceStations.length + cyberCells.length} units</p>
        </div>
      </div>
      <div className="mt-4 grid gap-3 sm:grid-cols-3">
        <div className="rounded-2xl bg-slate-950/80 p-4 text-slate-300">
          <p className="text-xs uppercase tracking-[0.35em] text-slate-400">Stations</p>
          <p className="mt-2 text-sm text-white">{cyberPoliceStations.length}</p>
        </div>
        <div className="rounded-2xl bg-slate-950/80 p-4 text-slate-300">
          <p className="text-xs uppercase tracking-[0.35em] text-cyan-400">Cells</p>
          <p className="mt-2 text-sm text-white">{cyberCells.length}</p>
        </div>
        <div className="rounded-2xl bg-slate-950/80 p-4 text-slate-300">
          <p className="text-xs uppercase tracking-[0.35em] text-cyan-400">Resources</p>
          <p className="mt-2 text-sm text-white">{reportingResources.length}</p>
        </div>
      </div>
    </div>
  );
}

function RegionDetails({ region }: { region: Record<string, any> }) {
  if (!region) {
    return null;
  }

  const profile = region.profile || {};
  const crimeStatistics = region.crimeStatistics;
  const cyberCrimeStatistics = region.cyberCrimeStatistics;
  const policeStations = region.cyberPoliceStations ?? region.REGIONAL_CYBER_POLICE_UNITS ?? region.LADAKH_CYBER_CRIME_STATIONS ?? [];
  const cyberCells = region.cyberCells ?? [];
  const reportingResources = normalizeReportingResources(region.reportingResources);
  const emergencyContacts = normalizeEmergencyContacts(region.emergencyContacts);

  return (
    <section className="mt-12 rounded-[2rem] border border-slate-700/80 bg-slate-950/85 p-8 shadow-[0_40px_120px_-60px_rgba(14,165,233,0.35)]">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <p className="text-sm uppercase tracking-[0.35em] text-cyan-400">Region profile</p>
          <h2 className="mt-2 text-3xl font-semibold text-white">{profile.name ?? 'Selected Region'}</h2>
          {profile.capital ? (
            <p className="mt-3 text-sm text-slate-300">
              <span className="font-semibold text-white">Capital:</span>{' '}
              {Array.isArray(profile.capital) ? profile.capital.join(' / ') : profile.capital}
            </p>
          ) : null}
          {profile.area ? (
            <p className="mt-1 text-sm text-slate-300">
              <span className="font-semibold text-white">Area:</span> {profile.area.toLocaleString()} sq km
            </p>
          ) : null}
          {profile.population ? (
            <p className="mt-1 text-sm text-slate-300">
              <span className="font-semibold text-white">Population:</span> {profile.population.toLocaleString()}
            </p>
          ) : null}
        </div>
        <div className="rounded-3xl bg-slate-900/90 px-5 py-4 text-slate-200">
          <p className="text-sm uppercase tracking-[0.35em] text-cyan-400">Region type</p>
          <p className="mt-3 text-xl font-semibold text-white">{profile.highCourt ? 'Union Territory / State' : 'Region'}</p>
        </div>
      </div>

      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        {crimeStatistics ? (
          <div className="rounded-3xl border border-slate-700/90 bg-slate-900/80 p-6">
            <h3 className="text-lg font-semibold text-white">Crime statistics</h3>
            <div className="mt-4 space-y-3 text-sm text-slate-300">
              {Object.entries(crimeStatistics).map(([key, value]) => {
                const formattedValue = Array.isArray(value) ? value.join(', ') : String(value);
                return (
                  <p key={key}>
                    <span className="font-semibold text-slate-100">{key.replace(/([A-Z])/g, ' $1')}:</span>{' '}
                    {formattedValue}
                  </p>
                );
              })}
            </div>
          </div>
        ) : null}

        {cyberCrimeStatistics ? (
          <div className="rounded-3xl border border-slate-700/90 bg-slate-900/80 p-6">
            <h3 className="text-lg font-semibold text-white">Cyber crime statistics</h3>
            <div className="mt-4 space-y-3 text-sm text-slate-300">
              {Object.entries(cyberCrimeStatistics).map(([key, value]) => {
                const formattedValue = Array.isArray(value) ? value.join(', ') : String(value);
                return (
                  <p key={key}>
                    <span className="font-semibold text-slate-100">{key.replace(/([A-Z])/g, ' $1')}:</span>{' '}
                    {formattedValue}
                  </p>
                );
              })}
            </div>
          </div>
        ) : null}
      </div>

      {policeStations.length ? (
        <div className="mt-8">
          <h3 className="text-xl font-semibold text-white">Cyber police stations</h3>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            {policeStations.map((station: any) => (
              <div key={station.id || station.stationName || station.name} className="rounded-3xl border border-slate-700 bg-slate-950/90 p-5 text-slate-300">
                <p className="font-semibold text-white">{station.stationName ?? station.name ?? station.unitName}</p>
                <p className="mt-2 text-sm">{station.address}</p>
                {station.phone ? <p className="mt-2 text-sm">Phone: {station.phone}</p> : null}
              </div>
            ))}
          </div>
        </div>
      ) : null}

      {cyberCells.length ? (
        <div className="mt-8">
          <h3 className="text-xl font-semibold text-white">Cyber cells</h3>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            {cyberCells.map((cell: any) => (
              <div key={cell.id || cell.name} className="rounded-3xl border border-slate-700 bg-slate-950/90 p-5 text-slate-300">
                <p className="font-semibold text-white">{cell.cellName ?? cell.name}</p>
                <p className="mt-2 text-sm">{cell.address}</p>
                {cell.phone ? <p className="mt-2 text-sm">Phone: {cell.phone}</p> : null}
              </div>
            ))}
          </div>
        </div>
      ) : null}

      {reportingResources.length ? (
        <div className="mt-8">
          <h3 className="text-xl font-semibold text-white">Reporting resources</h3>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            {reportingResources.map((resource: any) => (
              <div key={resource.resourceName ?? resource.name} className="rounded-3xl border border-slate-700 bg-slate-950/90 p-5 text-slate-300">
                <p className="font-semibold text-white">{resource.resourceName ?? resource.name}</p>
                <p className="mt-2 text-sm">{resource.description}</p>
                <p className="mt-2 text-xs text-slate-400">{resource.contactOrUrl ?? resource.url}</p>
              </div>
            ))}
          </div>
        </div>
      ) : null}

      {emergencyContacts.length ? (
        <div className="mt-8">
          <h3 className="text-xl font-semibold text-white">Emergency contacts</h3>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            {emergencyContacts.map((contact: any) => (
              <div key={contact.service} className="rounded-3xl border border-slate-700 bg-slate-950/90 p-5 text-slate-300">
                <p className="font-semibold text-white">{contact.service}</p>
                <p className="mt-2 text-sm">{contact.number}</p>
                {contact.remarks ? <p className="mt-2 text-xs text-slate-400">{contact.remarks}</p> : null}
              </div>
            ))}
          </div>
        </div>
      ) : null}
    </section>
  );
}

export default function CyberCrimeLocatorPage() {
  const [pincodeQuery, setPincodeQuery] = useState('');
  const [stateQuery, setStateQuery] = useState('');
  const [districtQuery, setDistrictQuery] = useState('');
  const [globalQuery, setGlobalQuery] = useState('');
  const [selectedRegion, setSelectedRegion] = useState<Record<string, any> | null>(null);
  const [regionMessage, setRegionMessage] = useState('');
  const [results, setResults] = useState<any[]>(getAllCyberCrimeStations());
  const [activeSearch, setActiveSearch] = useState('all');

  const searchPincode = () => {
    setResults(searchByPincode(pincodeQuery));
    setActiveSearch('PIN');
  };

  const searchState = () => {
    setResults(searchByRegion(stateQuery));
    setActiveSearch('State / UT');
    const region = getRegionByName(stateQuery);
    setSelectedRegion(region ?? null);
    setRegionMessage(region ? '' : 'No state or UT profile matched that name.');
  };

  const searchDistrict = () => {
    setResults(searchByDistrict(districtQuery));
    setActiveSearch('District');
  };

  const searchGlobal = () => {
    setResults(globalSearch(globalQuery));
    setActiveSearch('Global');
  };

  return (
    <div className="relative overflow-hidden pt-8 pb-16">
      <div className="absolute inset-x-0 top-0 h-80 bg-gradient-to-b from-slate-950 via-slate-900 to-transparent" />
      <div className="relative mx-auto max-w-7xl px-6 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_0.9fr] lg:items-start">
          <section className="rounded-[2rem] border border-slate-700/80 bg-slate-950/85 p-8 shadow-[0_40px_120px_-60px_rgba(14,165,233,0.35)] backdrop-blur-xl">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.35em] text-cyan-400">Locator</p>
                <h1 className="mt-3 text-4xl font-semibold text-white sm:text-5xl">
                  Cyber Crime Locator
                </h1>
                <p className="mt-4 max-w-2xl text-base leading-7 text-slate-300">
                  Find the nearest cyber crime cell by PIN, state, district, or through a global search across the TRUSTLAYERLABS database.
                </p>
              </div>
              <div className="rounded-3xl border border-cyan-500/20 bg-cyan-500/5 p-4 text-slate-100 shadow-lg shadow-cyan-500/10">
                <p className="text-sm uppercase tracking-[0.35em] text-cyan-200">Emergency</p>
                <div className="mt-4 space-y-3 text-sm leading-6">
                  <div className="rounded-2xl bg-slate-900/90 px-4 py-3">
                    <p className="font-semibold text-white">1930 Helpline</p>
                    <p className="text-slate-300">Report cybercrime immediately.</p>
                  </div>
                  <div className="rounded-2xl bg-slate-900/90 px-4 py-3">
                    <p className="font-semibold text-white">Cybercrime Portal</p>
                    <p className="text-slate-300">https://cybercrime.gov.in</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-10 grid gap-6 xl:grid-cols-2">
              <div className="rounded-3xl border border-slate-700/90 bg-slate-900/80 p-6">
                <h2 className="text-lg font-semibold text-white">Search by PIN</h2>
                <p className="mt-2 text-sm text-slate-400">Enter a 6-digit PIN code to locate cyber cells in that area.</p>
                <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                  <input
                    value={pincodeQuery}
                    onChange={(event) => setPincodeQuery(event.target.value)}
                    placeholder="110001"
                    className="min-w-0 flex-1 rounded-2xl border border-slate-700 bg-slate-950/80 px-4 py-3 text-white outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
                  />
                  <button
                    type="button"
                    onClick={searchPincode}
                    className="inline-flex items-center justify-center rounded-2xl bg-cyan-500 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400"
                  >
                    Search PIN
                  </button>
                </div>
              </div>

              <div className="rounded-3xl border border-slate-700/90 bg-slate-900/80 p-6">
                <h2 className="text-lg font-semibold text-white">Search by State / UT</h2>
                <p className="mt-2 text-sm text-slate-400">Type a state or union territory name to view region intelligence and local cyber cell locations.</p>
                <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                  <div className="min-w-0 flex-1">
                    <input
                      list="region-options"
                      value={stateQuery}
                      onChange={(event) => setStateQuery(event.target.value)}
                      placeholder="Maharashtra or Delhi"
                      className="min-w-0 w-full rounded-2xl border border-slate-700 bg-slate-950/80 px-4 py-3 text-white outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
                    />
                    <datalist id="region-options">
                      {getRegionOptions().map((option) => (
                        <option key={option.name} value={option.name} />
                      ))}
                    </datalist>
                  </div>
                  <button
                    type="button"
                    onClick={searchState}
                    className="inline-flex items-center justify-center rounded-2xl bg-cyan-500 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400"
                  >
                    Search region
                  </button>
                </div>
                {regionMessage ? (
                  <p className="mt-3 text-sm text-amber-300">{regionMessage}</p>
                ) : null}
              </div>

              <div className="rounded-3xl border border-slate-700/90 bg-slate-900/80 p-6">
                <h2 className="text-lg font-semibold text-white">Search by District</h2>
                <p className="mt-2 text-sm text-slate-400">Use the district name if you know the city or local district.</p>
                <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                  <input
                    value={districtQuery}
                    onChange={(event) => setDistrictQuery(event.target.value)}
                    placeholder="Mumbai"
                    className="min-w-0 flex-1 rounded-2xl border border-slate-700 bg-slate-950/80 px-4 py-3 text-white outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
                  />
                  <button
                    type="button"
                    onClick={searchDistrict}
                    className="inline-flex items-center justify-center rounded-2xl bg-cyan-500 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400"
                  >
                    Search District
                  </button>
                </div>
              </div>

              <div className="rounded-3xl border border-slate-700/90 bg-slate-900/80 p-6">
                <h2 className="text-lg font-semibold text-white">Global Search</h2>
                <p className="mt-2 text-sm text-slate-400">Search by any station name, address, phone, email, state, district, or PIN.</p>
                <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                  <input
                    value={globalQuery}
                    onChange={(event) => setGlobalQuery(event.target.value)}
                    placeholder="Hyderabad or cybercrime.gov.in"
                    className="min-w-0 flex-1 rounded-2xl border border-slate-700 bg-slate-950/80 px-4 py-3 text-white outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
                  />
                  <button
                    type="button"
                    onClick={searchGlobal}
                    className="inline-flex items-center justify-center rounded-2xl bg-cyan-500 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400"
                  >
                    Global Search
                  </button>
                </div>
              </div>
            </div>
          </section>

          <aside className="space-y-6">
            <div className="rounded-[2rem] border border-slate-700/80 bg-slate-950/85 p-6 shadow-[0_40px_80px_-60px_rgba(14,165,233,0.35)]">
              <p className="text-sm uppercase tracking-[0.35em] text-cyan-400">Quick reference</p>
              <h2 className="mt-4 text-2xl font-semibold text-white">How to use</h2>
              <ul className="mt-4 space-y-3 text-slate-300">
                <li className="rounded-2xl bg-slate-900/80 p-4">
                  <p className="font-semibold text-white">Search by PIN</p>
                  <p className="text-sm text-slate-400">Exact PIN gives the best local match.</p>
                </li>
                <li className="rounded-2xl bg-slate-900/80 p-4">
                  <p className="font-semibold text-white">Search by State</p>
                  <p className="text-sm text-slate-400">Use state names for broader coverage.</p>
                </li>
                <li className="rounded-2xl bg-slate-900/80 p-4">
                  <p className="font-semibold text-white">Search by District</p>
                  <p className="text-sm text-slate-400">District search works for city-level stations.</p>
                </li>
                <li className="rounded-2xl bg-slate-900/80 p-4">
                  <p className="font-semibold text-white">Global Search</p>
                  <p className="text-sm text-slate-400">Match any station field for fast discovery.</p>
                </li>
              </ul>
            </div>

            <div className="rounded-[2rem] border border-slate-700/80 bg-slate-950/85 p-6 shadow-[0_40px_80px_-60px_rgba(14,165,233,0.35)]">
              <p className="text-sm uppercase tracking-[0.35em] text-cyan-400">Emergency panel</p>
              <div className="mt-4 space-y-4 text-slate-200">
                <div className="rounded-3xl bg-slate-900/90 p-5">
                  <p className="text-base font-semibold text-white">1930 Helpline</p>
                  <p className="mt-2 text-sm text-slate-400">Call the national cybercrime reporting helpline for urgent incidents.</p>
                </div>
                <div className="rounded-3xl bg-slate-900/90 p-5">
                  <p className="text-base font-semibold text-white">Cybercrime Portal</p>
                  <p className="mt-2 text-sm text-slate-400">Visit the portal to file complaints and track cases.</p>
                  <Link
                    to="https://cybercrime.gov.in"
                    className="mt-4 inline-flex rounded-2xl bg-cyan-500 px-4 py-2 text-sm font-semibold text-slate-950 hover:bg-cyan-400"
                  >
                    Open Portal
                  </Link>
                </div>
              </div>
            </div>
          </aside>
        </div>

        <div className="mt-12 rounded-[2rem] border border-slate-700/80 bg-slate-950/85 p-8 shadow-[0_40px_120px_-60px_rgba(14,165,233,0.35)]">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-cyan-400">Search results</p>
              <h2 className="mt-2 text-3xl font-semibold text-white">{activeSearch === 'all' ? 'All cyber cells' : `${activeSearch} results`}</h2>
            </div>
            <span className="rounded-full bg-slate-900 px-4 py-2 text-sm font-medium text-slate-300">
              {selectedRegion && activeSearch === 'State / UT'
                ? `${results.length} station${results.length === 1 ? '' : 's'} + ${selectedRegion.cyberCells?.length ?? 0} cells found`
                : `${results.length} station${results.length === 1 ? '' : 's'} found`}
            </span>
          </div>

          <div className="mt-8">
            {selectedRegion ? (
              <div className="mb-8">
                <RegionSummary region={selectedRegion} />
              </div>
            ) : null}
            <StationList stations={results} />
            {selectedRegion && activeSearch === 'State / UT' && selectedRegion.cyberCells?.length ? (
              <div className="mt-10">
                <h3 className="mb-5 text-xl font-semibold text-white">Cyber cells</h3>
                <StationList stations={selectedRegion.cyberCells} />
              </div>
            ) : null}
          </div>
          {selectedRegion ? (
            <div className="mt-10">
              <RegionDetails region={selectedRegion} />
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
