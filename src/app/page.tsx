"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

export default function DashboardPage() {
  const [user, setUser] = useState<any>(null);
  const searchParams = useSearchParams();
  const router = useRouter();

  useEffect(() => {
    const token = searchParams.get("whop-token");

    if (!token) {
      console.log("No se encontró el whop-token. Redirigiendo...");
      router.push("https://whop.com/login");
      return;
    }

    // Guardar token localmente (opcional)
    localStorage.setItem("whop-token", token);

    // Llamar a la API de Whop para obtener info del usuario
    fetch("https://api.whop.com/api/v2/me", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setUser(data.user);
        console.log("Usuario Whop:", data.user);
      })
      .catch((err) => {
        console.error("Error obteniendo el usuario:", err);
        router.push("https://whop.com/login");
      });
  }, [searchParams, router]);

  if (!user) {
    return <p className="text-center mt-10">Cargando sesión de Whop...</p>;
  }

  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-8 bg-gray-100">
      <h1 className="text-3xl font-bold mb-4">¡Hola {user.username}!</h1>
      <h2 className="text-xl mb-6">Start Your Business</h2>

      <div className="flex flex-col gap-4">
        <a href="/register/us">
          <button className="px-6 py-3 bg-blue-600 text-white rounded-xl">Soy estadounidense</button>
        </a>
        <a href="/register/foreign">
          <button className="px-6 py-3 bg-green-600 text-white rounded-xl">Soy extranjero</button>
        </a>
      </div>
    </main>
  );
}
