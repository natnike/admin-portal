"use client";

import { useMemo } from "react";
import { StoreSchema } from "../schemas/StoreSchema";
import { getColumns } from "./Columns";
import DataTable from "./DataTable";

export default function Store() {
  const stores: StoreSchema[] = [
    {
      id: 7168,
      description: "Lab 7168, AZ",
      city: "Scottsdale",
      state: "AZ",
      zip: "85254",
      phoneNumber: "4806722999",
      isOnlineReservation: true,
      isTemporarilyClosed: false,
      isOnlineOrder: false,
    },
    {
      id: 1200,
      description: "Newport, CA",
      city: "Newport Beach",
      state: "CA",
      zip: "92660",
      phoneNumber: "9495999007",
      isOnlineReservation: false,
      isTemporarilyClosed: true,
      isOnlineOrder: false,
    },
    {
      id: 9990,
      description: "Honolulu, HI",
      city: "Honolulu",
      state: "HI",
      zip: "96815",
      phoneNumber: "8082866760",
      isOnlineReservation: false,
      isTemporarilyClosed: false,
      isOnlineOrder: true,
    },
    {
      id: 1300,
      description: "La Jolla, CA",
      city: "San Diego",
      state: "CA",
      zip: "92122",
      phoneNumber: "0828667601",
      isOnlineReservation: false,
      isTemporarilyClosed: false,
      isOnlineOrder: false,
    },
    {
      id: 1700,
      description: "Park Meadows - Littleton, CO",
      city: "Lone Tree",
      state: "CA",
      zip: "80124",
      phoneNumber: "2828667601",
      isOnlineReservation: false,
      isTemporarilyClosed: false,
      isOnlineOrder: false,
    },
    {
      id: 1900,
      description: "Metairie, LA, CO",
      city: "Metairie",
      state: "LA",
      zip: "70002",
      phoneNumber: "3828667601",
      isOnlineReservation: false,
      isTemporarilyClosed: false,
      isOnlineOrder: false,
    },
    {
      id: 2900,
      description: "Dallas, TX",
      city: "Dallas",
      state: "TX",
      zip: "85287",
      phoneNumber: "4828667601",
      isOnlineReservation: false,
      isTemporarilyClosed: false,
      isOnlineOrder: false,
    },
    {
      id: 3400,
      description: "Boca Raton, FL",
      city: "Boca Raton",
      state: "FL",
      zip: "33431",
      phoneNumber: "5828667601",
      isOnlineReservation: false,
      isTemporarilyClosed: false,
      isOnlineOrder: false,
    },
    {
      id: 1800,
      description: "Austin, TX",
      city: "Austin",
      state: "TX",
      zip: "78759",
      phoneNumber: "5828667601",
      isOnlineReservation: false,
      isTemporarilyClosed: false,
      isOnlineOrder: false,
    },
    {
      id: 9901,
      description: "Westchase, TX",
      city: "Houston",
      state: "TX",
      zip: "77077",
      phoneNumber: "5828667601",
      isOnlineReservation: false,
      isTemporarilyClosed: false,
      isOnlineOrder: false,
    },
    {
      id: 9910,
      description: "The Woodlands, TX",
      city: "The Woodlands",
      state: "TX",
      zip: "77380",
      phoneNumber: "5828667601",
      isOnlineReservation: false,
      isTemporarilyClosed: false,
      isOnlineOrder: false,
    },
    {
      id: 9935,
      description: "Sugar Land, TX",
      city: "Sugar Land",
      state: "TX",
      zip: "77479",
      phoneNumber: "5828667601",
      isOnlineReservation: false,
      isTemporarilyClosed: false,
      isOnlineOrder: false,
    },
    {
      id: 9962,
      description: "Houston (Galleria), TX",
      city: "Houston",
      state: "TX",
      zip: "77056",
      phoneNumber: "9828667601",
      isOnlineReservation: false,
      isTemporarilyClosed: false,
      isOnlineOrder: false,
    },
  ];

  const columns = useMemo(() => getColumns(), []);

  return (
    <main className="container mx-auto p-3">
      <div className="container mx-auto py-10">
        <DataTable columns={columns} data={stores} />
      </div>
    </main>
  );
}
