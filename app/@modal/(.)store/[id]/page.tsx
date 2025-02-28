"use client";

import StoreFormPage from "@/app/store/StoreForm";
import { useRouter } from "next/navigation";
import { useEffect, useRef } from "react";

export default function StoreEditModalPage() {
  const router = useRouter();
  const dialogRef = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    dialogRef.current?.showModal();
  }, []);

  const store = {
    id: 7168,
    description: "Lab 7168, AZ",
    city: "Scottsdale",
    state: "AZ",
    zip: "85254",
    phoneNumber: "4806722999",
    isOnlineReservation: true,
    isTemporarilyClosed: true,
    isOnlineOrder: false,
  };

  return (
    <div>
      <dialog className="border p-4 rounded backdrop:bg-slate-300/50"
        ref={dialogRef}
        onClose={() => router.back()}
      >
        <button className="absolute top-2 right-2 border-none"
          onClick={() => dialogRef.current?.close()}
        >
          &times;
        </button>
        <h1 className="text-2xl mb-4">Login</h1>
        <StoreFormPage store={store} />
      </dialog>
    </div>
  );
}
