[Deutsch](#deutsch)
# Kinharbour

Kinharbour is a personal project exploring the idea of a private social hub for small groups delivered as a dedicated private instance. My goal is to create a space that replaces noisy social media with a calm, private bubble for sharing updates, planning events, and keeping track of the little things in life all while keeping data ownership with the user and helping me explore technical concepts as I learn and improve as I go

## **Planned Concept**

### **Single-tenant as a service (SaaS)**

A dedicated instance for a small group of users clossed off from the outside. Accessable only through generated keys (Invite only). Every instance will have a unique Tenant ID, and each invited member receives a unique User ID that is securely associated with the group's Tenant ID upon accepting the invite, or upon instance creation.

## **Templates**

User or the creator of the private instance will have the chance to set the current theme or the purpose of creating the group

- Couple / Partners
- Family
- Teams / Projects
- Friends / Communities

Templates will decide the features set that will be available to the instance, depending on the setting

## **Planned Core Features**

- Personal Highlights (Personal posts / blogs)
- Event planning ( Shared Calendar showing the group's memeber availability)
- Music sharing ( converted to the selected music app / platfrom)
- Media sharing
- Shared resources / links

## **Planned Optional features (Depending on the template chosen)**

- Intimacy Journal (Couple template only)
- Hobby Corner (Couple & Partners/ friends)
- Relationship retrospective: Favroutie dates and moments (Couple / Partners)
- Keepsakes: Favourite hangouts, dates or memories (Couple / Partners, Friends & Communities , Family)

## **Tech Stack**

- Frontend: React, Next.Js, TypeScript
- Backend: Python
- Database: PostgreSQL / Elasticsearch
- Auth: WebAuthn
- Deployment: Kubernetes


<br>
<br>

---


<a id="deutsch"></a>

# Kinharbour 

Kinharbour ist ein persönliches Projekt, das die Idee eines privaten Social Hubs für kleine Gruppen als dedizierte, private Instanz verfolgt. Mein Ziel ist es, einen Raum zu schaffen, der das laute und überladene Social Media durch eine ruhige, private Umgebung ersetzt. Hier können Nutzer Updates teilen, Events planen und die kleinen Dinge im Alltag festhalten. Gleichzeitig bleibt die Datenhoheit beim Nutzer und ich kann mithilfe des Projekts technische Konzepte besser verstehen und meine Fachkenntnisse Schritt für Schritt erweitern.

## **Geplantes Konzept: Single-Tenant as a Service (SaaS)**.

Eine dedizierte Instanz für eine kleine Gruppe von Nutzern, die vollständig von der Außenwelt abgeschottet ist. Der Zugang erfolgt ausschließlich über generierte Schlüssel (nur per Einladung). Jede Instanz erhält eine eindeutige Tenant-ID und jedes eingeladene Mitglied eine eigene User-ID. Diese wird beim Annehmen der Einladung oder bei der Erstellung der Instanz sicher mit der Tenant-ID der Gruppe verknüpft.

## Templates

Der Nutzer bzw. der Ersteller der privaten Instanz kann ein Template auswählen, das den aktuellen Zweck der Gruppe widerspiegelt.

- Paare
- Familie
- Teams/Projekte
- Freunde/Communities

Die Templates legen fest, welche Funktionsbereiche der Instanz zur Verfügung stehen abhängig vom jeweiligen Kontext.

## **Geplante Kernfunktionen**:

- Persönliche Highlights (Posts/kurze Blogs)

- Eventplanung (gemeinsamer Kalender mit Verfügbarkeiten der Gruppenmitglieder)

- Musik teilen (automatische Anpassung an die gewählte Musik-App/Plattform)

- Medien teilen

Geteilte Ressourcen/Links

## **Geplante optionale Funktionen (abhängig vom gewählten Template):**

- Intimacy Journal (nur für das Paar-Template)

- Hobby-Ecke (für Paare/Partner und Freunde)

- Relationship Retrospective: Lieblingsdates und besondere Momente (Paare/Partner)

- „Keepsakes”: Lieblingsorte, gemeinsame Erlebnisse oder Erinnerungen (Paare/Partner, Freunde & Communities, Familie)

## **Tech Stack**:

Frontend: React, Next.js, TypeScript

Backend: Python

Datenbank: PostgreSQL/Elasticsearch

Authentifizierung: WebAuthn

Deployment: Kubernetes

=======
This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/pages/api-reference/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/pages/building-your-application/routing/api-routes) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/pages/building-your-application/routing/api-routes) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/pages/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn-pages-router) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/pages/building-your-application/deploying) for more details.
>>>>>>> master
