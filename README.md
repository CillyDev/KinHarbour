## Kinharbour

Kinharbour is a personal project aiming to build an invite-only self-contained social hub for small groups (friends/family/significant others/housemates/teams), delivered as a dedicated private instance. It plans on replacing noisy social media with a calm, private space for sharing updates, planning events, and keeping track of the little things in life while keeping ownership of your data in the hands of the user.

## Planned Concept

### Private instance model (Single-tenant SaaS)

A dedicated instance for a small group of users clossed off from the outside. Accessable only through generated keys ( Invite only). Every instance has a unique Tenant ID, and each invited person receives a unique User ID that is securely associated with that Tenant ID upon accepting the invite, or upon instance creation.

### Templates
User or the creator of the private instance will have the chance to set the current theme or the purpose of creating the group
- Couple / Partners
- Family
- Teams / Projects
- Friends / Communities

Templates will decide the features set that will be available to the instance, depending on the setting

### Planned Core Features 
- Personal Highlights (Personal posts / blogs)
- Event planning ( Shared Calendar showing the group's memeber availability)
- Music sharing ( converted to the selected music app / platfrom)
- Media sharing
- Shared resources / links 

### Planned Optional features (Depending on the template chosen) 
- Intimacy Journal (Couple template only)
- Hobby Corner (Couple & Partners/ friends)
- Relationship retrospective: Favroutie dates and moments (Couple / Partners)
- Keepsakes: Favourite hangouts, dates or memories (Couple / Partners, Friends & Communities , Family)


## Tech Stack

- Frontend: React, Next.Js, TypeScript
- Backend: Python
- Database: PostgreSQL / Elasticsearch
- Auth: WebAuthn
- Deployment: Kubernetes

## Changelog
Update and progress will be documented here as the project evolves
