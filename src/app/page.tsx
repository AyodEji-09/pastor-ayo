import { redirect } from "next/navigation";

export default function Home() {
  redirect("/home");
}

// export default function UnderConstruction() {
//   return (
//     <main
//       style={{
//         minHeight: "100vh",
//         display: "flex",
//         flexDirection: "column",
//         justifyContent: "center",
//         alignItems: "center",
//         background: "#f8f9fa",
//       }}
//     >
//       <h1 style={{ fontSize: "3rem", color: "#9c0404", marginBottom: "1rem" }}>
//         🚧 Under Construction 🚧
//       </h1>
//       <p style={{ fontSize: "1.5rem", color: "#333", textAlign: "center" }}>
//         We&apos;re working hard to bring you something amazing.
//         <br />
//         Please check back soon!
//       </p>
//     </main>
//   );
// }
