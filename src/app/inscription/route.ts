import { NextRequest, NextResponse } from "next/server";

// let response = NextResponse.next();
// response.headers.set("Access-Control-Allow-Origin", "*"); // Adjust this to be more restrictive if needed
// response.headers.set("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
// response.headers.set("Access-Control-Allow-Headers", "Content-Type, Authorization");

export async function POST(req: NextRequest, res: NextResponse) {
//   const targetUrl = `http://api.clofit.fr/users/inscription`;
// 	try {
//         // Transfert de la requête vers l'API externe
//         const apiResponse = await fetch(targetUrl, {
//           method: req.method,
//           headers: req.headers,
//           body: req.method === 'POST' ? await req.text() : undefined,
//       });

//       // Obtention de la réponse de l'API
//       const data = await apiResponse.json();

//       // Retour de la réponse à l'application cliente
//       response = new NextResponse(JSON.stringify(data), {
//         status: apiResponse.status,
//         headers: {
//             'Content-Type': 'application/json',
//             // Ajoutez ici d'autres en-têtes au besoin
//         },
//       });
//       return response;
//   } catch (error) {
//         // Gestion des erreurs
//         return new NextResponse(JSON.stringify({ error: 'Error proxying the API' }), {
//           status: 500,
//           headers: {
//               'Content-Type': 'application/json',
//           },
//       });
//   }
}
